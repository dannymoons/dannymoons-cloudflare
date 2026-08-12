import type { Payload } from "payload";

export const importCollections = ["posts", "glossary"] as const;
export type ImportCollection = (typeof importCollections)[number];

type Frontmatter = Record<string, string | string[]>;
type ImportAction = "created" | "updated";

type ImportResult = {
  action: ImportAction;
  slug: string;
  title: string;
};

const importContext = {
  context: { disableRevalidate: true },
  overrideAccess: true,
} as const;

export function isImportCollection(value: unknown): value is ImportCollection {
  return (
    typeof value === "string" &&
    importCollections.includes(value as ImportCollection)
  );
}

function parseFrontmatter(markdown: string): {
  body: string;
  frontmatter: Frontmatter;
} {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Markdown must start with a frontmatter block.");

  const frontmatter: Frontmatter = {};

  for (const line of match[1].split("\n")) {
    const entry = line.match(/^([\w-]+):\s*(.+)$/);
    if (!entry) continue;

    const [, key, rawValue] = entry;
    const value = rawValue.trim();
    frontmatter[key] =
      value.startsWith("[") && value.endsWith("]")
        ? value
            .slice(1, -1)
            .split(",")
            .map((item) => item.trim().replace(/^"|"$/g, ""))
            .filter(Boolean)
        : value.replace(/^"|"$/g, "");
  }

  return { body: match[2].trim(), frontmatter };
}

function requireString(frontmatter: Frontmatter, key: string): string {
  const value = frontmatter[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Frontmatter requires a non-empty "${key}" value.`);
  }

  return value;
}

function stringList(frontmatter: Frontmatter, key: string): string[] {
  const value = frontmatter[key];
  if (Array.isArray(value)) return value;
  return typeof value === "string" && value ? [value] : [];
}

function postType(
  frontmatter: Frontmatter,
): "blog" | "field-note" | "announcement" {
  const value = frontmatter["post-type"] ?? frontmatter.postType;
  if (value === undefined) return "field-note";
  if (value === "blog" || value === "field-note" || value === "announcement") {
    return value;
  }
  throw new Error(
    'Frontmatter "post-type" must be "blog", "field-note", or "announcement".',
  );
}

async function resolveRelationships(
  payload: Payload,
  collection: "categories" | "tags",
  names: string[],
): Promise<(string | number)[]> {
  return Promise.all(
    names.map(async (name) => {
      const slug = name.toLowerCase().replace(/\s+/g, "-");
      const existing = await payload.find({
        collection,
        where: { slug: { equals: slug } },
        limit: 1,
        ...importContext,
      });

      if (existing.docs[0]) return existing.docs[0].id;

      const created = await payload.create({
        collection,
        data: { title: name, slug },
        ...importContext,
      });
      return created.id;
    }),
  );
}

async function resolveHeroImage(
  payload: Payload,
  filename?: string,
): Promise<string | number | null> {
  if (!filename) return null;

  const byFilename = await payload.find({
    collection: "media",
    where: { filename: { equals: filename } },
    limit: 1,
    ...importContext,
  });
  if (byFilename.docs[0]) return byFilename.docs[0].id;

  const basename = filename.replace(/\.[^.]+$/, "");
  const byAlt = await payload.find({
    collection: "media",
    where: { alt: { equals: basename } },
    limit: 1,
    ...importContext,
  });
  return byAlt.docs[0]?.id ?? null;
}

async function resolveRelatedPosts(
  payload: Payload,
  slugs: string[],
  currentId?: string | number,
): Promise<(string | number)[]> {
  if (slugs.length === 0) return [];

  return Promise.all(
    slugs.map(async (relatedSlug) => {
      const result = await payload.find({
        collection: "posts",
        where: {
          and: [
            { slug: { equals: relatedSlug } },
            ...(currentId ? [{ id: { not_equals: currentId } }] : []),
          ],
        },
        limit: 1,
        locale: "en",
        ...importContext,
      });

      if (!result.docs[0]) {
        throw new Error(`Related post not found for slug "${relatedSlug}".`);
      }

      return result.docs[0].id;
    }),
  );
}

async function getAuthorId(payload: Payload): Promise<string | number> {
  const users = await payload.find({
    collection: "users",
    limit: 1,
    ...importContext,
  });
  const author = users.docs[0];
  if (!author) throw new Error("No user found to assign as the post author.");
  return author.id;
}

export async function importMarkdown(
  payload: Payload,
  collection: ImportCollection,
  markdown: string,
): Promise<ImportResult> {
  const { body, frontmatter } = parseFrontmatter(markdown);
  const title = requireString(frontmatter, "title");
  const slug = requireString(frontmatter, "slug");
  const date =
    typeof frontmatter.date === "string" && frontmatter.date
      ? new Date(frontmatter.date)
      : new Date();

  if (Number.isNaN(date.valueOf()))
    throw new Error('Frontmatter "date" must be a valid date.');

  const existing = await payload.find({
    collection,
    where: { slug: { equals: slug } },
    limit: 1,
    locale: "en",
    ...importContext,
  });

  let data: Record<string, unknown>;

  if (collection === "posts") {
    const [categories, tags, author, heroImage, relatedPosts] =
      await Promise.all([
        resolveRelationships(
          payload,
          "categories",
          stringList(frontmatter, "categories"),
        ),
        resolveRelationships(payload, "tags", stringList(frontmatter, "tags")),
        getAuthorId(payload),
        resolveHeroImage(
          payload,
          typeof frontmatter.heroImage === "string"
            ? frontmatter.heroImage
            : typeof frontmatter.featuredImage === "string"
              ? frontmatter.featuredImage
              : undefined,
        ),
        resolveRelatedPosts(
          payload,
          stringList(frontmatter, "related-posts"),
          existing.docs[0]?.id,
        ),
      ]);
    const cleanBody = body.replace(
      new RegExp(
        `^#\\s+${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\n\\n?`,
      ),
      "",
    );

    data = {
      title,
      slug,
      markdown: cleanBody,
      generateRichText: true,
      authors: [author],
      relatedPosts,
      categories,
      tags,
      postType: postType(frontmatter),
      publishedAt: date.toISOString(),
      ...(heroImage ? { heroImage } : {}),
      meta: {
        title,
        description:
          typeof frontmatter.description === "string"
            ? frontmatter.description
            : "",
        ...(typeof frontmatter["social-title"] === "string"
          ? { socialTitle: frontmatter["social-title"] }
          : {}),
        ...(typeof frontmatter["social-description"] === "string"
          ? { socialDescription: frontmatter["social-description"] }
          : {}),
      },
      _status: frontmatter.status === "published" ? "published" : "draft",
    };
  } else {
    const tags = await resolveRelationships(
      payload,
      "tags",
      stringList(frontmatter, "tags"),
    );

    data = {
      title,
      slug,
      markdown: body,
      generateRichText: true,
      publishedAt: date.toISOString(),
      aliases: stringList(frontmatter, "aliases").map((alias) => ({ alias })),
      tags,
      meta: {
        title,
        description: `${title} — explained in simple terms.`,
        ...(typeof frontmatter["social-title"] === "string"
          ? { socialTitle: frontmatter["social-title"] }
          : {}),
        ...(typeof frontmatter["social-description"] === "string"
          ? { socialDescription: frontmatter["social-description"] }
          : {}),
      },
      _status: frontmatter.status === "published" ? "published" : "draft",
    };
  }

  // Payload's collection-specific write generics do not accept a runtime union.
  // The collection is validated above and the data shape is selected by that union.
  const update = payload.update.bind(payload) as unknown as (
    options: Record<string, unknown>,
  ) => Promise<unknown>;
  const create = payload.create.bind(payload) as unknown as (
    options: Record<string, unknown>,
  ) => Promise<unknown>;

  if (existing.docs[0]) {
    await update({
      collection,
      id: existing.docs[0].id,
      locale: "en",
      data,
      ...importContext,
    });
    return { action: "updated", slug, title };
  }

  await create({ collection, locale: "en", data, ...importContext });
  return { action: "created", slug, title };
}
