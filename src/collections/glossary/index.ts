import type { CollectionConfig, RichTextField } from "payload";

import {
  BlocksFeature,
  BlockquoteFeature,
  CodeBlock,
  convertMarkdownToLexical,
  editorConfigFactory,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  OrderedListFeature,
  UnorderedListFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

import { authenticated } from "../../access/authenticated";
import { authenticatedOrPublished } from "../../access/authenticatedOrPublished";
import { generatePreviewPath } from "../../utilities/generatePreviewPath";
import {
  revalidateDelete,
  revalidateGlossary,
} from "./hooks/revalidateGlossary";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { slugField } from "payload";

const codeLanguageAliases: Record<string, string> = {
  bash: "shell",
  js: "javascript",
  jsonc: "plaintext",
  md: "markdown",
  plain: "plaintext",
  py: "python",
  rb: "ruby",
  sh: "shell",
  text: "plaintext",
  ts: "typescript",
  txt: "plaintext",
  yml: "yaml",
};

const normalizeCodeBlocks = (content: Record<string, unknown>) => {
  const root = content.root;
  if (!root || typeof root !== "object") return content;

  const children = (root as { children?: unknown }).children;
  if (!Array.isArray(children)) return content;

  for (const node of children) {
    if (!node || typeof node !== "object") continue;
    const block = node as {
      fields?: { blockType?: string; code?: unknown; language?: unknown };
      type?: string;
    };
    if (block.type !== "block" || block.fields?.blockType !== "Code") continue;

    const language =
      typeof block.fields.language === "string" ? block.fields.language : "";
    block.fields.language =
      (codeLanguageAliases[language] ?? language) || "plaintext";
    block.fields.code =
      typeof block.fields.code === "string" ? block.fields.code : "";
  }

  return content;
};

export const Glossary: CollectionConfig<"glossary"> = {
  slug: "glossary",
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    aliases: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: "glossary",
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: "glossary",
        req,
      }),
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "markdown",
              type: "code",
              admin: {
                language: "markdown",
                description:
                  "The source of truth. Pasting Markdown and saving regenerates the rich text content below from this.",
              },
              hooks: {
                beforeValidate: [
                  async ({
                    siblingData,
                    siblingFields,
                    value,
                    previousValue,
                    operation,
                  }) => {
                    const generate = (
                      siblingData as Record<string, unknown> | undefined
                    )?.generateRichText as boolean | undefined;
                    if (generate === false) return;
                    const changed =
                      operation === "create" || value !== previousValue;
                    if (!changed) return;
                    const raw = value;
                    if (typeof raw !== "string" || !raw.trim()) return;
                    const contentField = siblingFields.find(
                      (field) => "name" in field && field.name === "content",
                    ) as RichTextField | undefined;
                    if (!contentField) return;
                    const editorConfig = editorConfigFactory.fromField({
                      field: contentField,
                    });
                    (siblingData as Record<string, unknown>).content =
                      normalizeCodeBlocks(
                        convertMarkdownToLexical({
                          markdown: raw,
                          editorConfig,
                        }) as unknown as Record<string, unknown>,
                      );
                  },
                ],
              },
            },
            {
              name: "generateRichText",
              type: "checkbox",
              defaultValue: true,
              admin: {
                hidden: true,
              },
            },
            {
              name: "content",
              type: "richText",
              admin: {
                hidden: true,
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({
                      enabledHeadingSizes: ["h2", "h3", "h4"],
                    }),
                    UnorderedListFeature(),
                    OrderedListFeature(),
                    BlockquoteFeature(),
                    BlocksFeature({ blocks: [CodeBlock()] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ];
                },
              }),
              label: false,
            },
            {
              name: "aliases",
              type: "array",
              admin: {
                description:
                  "Alternative terms that should redirect or link to this entry.",
              },
              fields: [
                {
                  name: "alias",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
          label: "Content",
        },
        {
          fields: [
            {
              name: "tags",
              type: "relationship",
              admin: {
                position: "sidebar",
              },
              hasMany: true,
              relationTo: "tags",
            },
          ],
          label: "Meta",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    slugField({
      localized: true,
    }),
  ],
  hooks: {
    afterChange: [revalidateGlossary],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
      schedulePublish: true,
    },
    maxPerDoc: 3,
  },
};
