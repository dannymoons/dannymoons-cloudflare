import type { Metadata } from "next";

import type {
  Media,
  Page,
  Post,
  Wiki,
  Glossary,
  Config,
} from "../payload-types";

import { mergeOpenGraph } from "./mergeOpenGraph";
import { getServerSideURL } from "./getURL";
import { DEFAULT_LOCALE, type Locale } from "./locale";
import { SITE_NAME } from "./site";

const getImageURL = (image?: Media | Config["db"]["defaultIDType"] | null) => {
  const serverUrl = getServerSideURL();

  let url = serverUrl + "/website-template-OG.webp";

  if (image && typeof image === "object" && "id" in image && image.id != null) {
    // Cloudflare Images serves OG crops via the /media/[id] transform route
    url = `${serverUrl}/media/${image.id}?w=1200`;
  } else if (
    image &&
    typeof image === "object" &&
    "url" in image &&
    image.url
  ) {
    url = image.url.startsWith("http") ? image.url : serverUrl + image.url;
  }

  return url;
};

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | Partial<Wiki> | Partial<Glossary> | null;
  /**
   * Per-locale public paths for this document (e.g. `{ nl: '/over-ons', en: '/en/about-us' }`).
   * Used to emit the canonical URL and `hreflang` alternates. Relative paths are
   * resolved against `metadataBase` (set in the root layout).
   */
  alternates?: Partial<Record<Locale, string>>;
  /** Active locale of the page being rendered. */
  locale?: Locale;
}): Promise<Metadata> => {
  const { doc, alternates, locale = DEFAULT_LOCALE } = args;

  const ogImage = getImageURL(doc?.meta?.image);
  const meta = doc?.meta as
    | (NonNullable<typeof doc>["meta"] & {
        socialTitle?: string | null;
        socialDescription?: string | null;
      })
    | null
    | undefined;

  const title = meta?.title ? `${meta.title} | ${SITE_NAME}` : SITE_NAME;
  const socialTitle = meta?.socialTitle || meta?.title || SITE_NAME;
  const socialDescription = meta?.socialDescription || meta?.description || "";

  const canonical = alternates?.[locale];

  // Build the hreflang map: one entry per available locale plus an `x-default`
  // that points at the default locale's URL.
  const languages: Record<string, string> = {};
  if (alternates) {
    for (const [loc, path] of Object.entries(alternates)) {
      if (path) languages[loc] = path;
    }
    const defaultPath = alternates[DEFAULT_LOCALE];
    if (defaultPath) languages["x-default"] = defaultPath;
  }

  return {
    description: meta?.description,
    alternates: {
      canonical: canonical ?? undefined,
      languages: Object.keys(languages).length > 0 ? languages : undefined,
    },
    openGraph: mergeOpenGraph({
      description: socialDescription,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title: socialTitle,
      url: canonical ?? "/",
    }),
    title,
  };
};
