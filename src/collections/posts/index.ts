import type { CollectionConfig, RichTextField } from 'payload'

import {
  BlocksFeature,
  BlockquoteFeature,
  convertMarkdownToLexical,
  editorConfigFactory,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  OrderedListFeature,
  UnorderedListFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
// import { Banner } from '../../blocks/Banner/config'
// import { Code } from '../../blocks/Code/config'
// import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const Posts: CollectionConfig<'posts'> = {
  slug: 'posts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'posts'>
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true
    }
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'posts',
          req
        })
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'posts',
        req
      }),
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media'
            },
            {
              name: 'markdown',
              type: 'code',
              localized: true,
              admin: {
                language: 'markdown',
                description:
                  'The source of truth. Pasting Markdown and saving regenerates the rich text content below from this.'
              },
              hooks: {
                beforeValidate: [
                  async ({ siblingData, siblingFields, value, previousValue, operation }) => {
                    const generate = (siblingData as Record<string, unknown> | undefined)
                      ?.generateRichText as boolean | undefined
                    if (generate === false) return
                    const changed = operation === 'create' || value !== previousValue
                    if (!changed) return
                    const raw = value
                    if (typeof raw !== 'string' || !raw.trim()) return
                    const contentField = siblingFields.find(
                      field => 'name' in field && field.name === 'content'
                    ) as RichTextField | undefined
                    if (!contentField) return
                    const editorConfig = editorConfigFactory.fromField({
                      field: contentField as RichTextField
                    })
                    ;(siblingData as Record<string, unknown>).content = convertMarkdownToLexical({
                      markdown: raw,
                      editorConfig
                    })
                  }
                ]
              }
            },
            {
              name: 'generateRichText',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description:
                  'When on, saving regenerates the rich text content below from the Markdown. Toggle off to author the rich text by hand.'
              }
            },
            {
              name: 'content',
              type: 'richText',
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({
                      enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4']
                    }),
                    UnorderedListFeature(),
                    OrderedListFeature(),
                    BlockquoteFeature(),
                    BlocksFeature({ blocks: [] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature()
                  ]
                }
              }),
              label: false
            }
          ],
          label: 'Content'
        },
        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              admin: {
                position: 'sidebar'
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id]
                  }
                }
              },
              hasMany: true,
              relationTo: 'posts'
            },
            {
              name: 'postType',
              type: 'select',
              admin: {
                position: 'sidebar'
              },
              options: [
                { label: 'Blog', value: 'blog' },
                { label: 'Field note', value: 'field-note' },
                { label: 'Announcement', value: 'announcement' }
              ]
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar'
              },
              hasMany: true,
              relationTo: 'categories'
            },
            {
              name: 'tags',
              type: 'relationship',
              admin: {
                position: 'sidebar'
              },
              hasMany: true,
              relationTo: 'tags'
            }
          ],
          label: 'Meta'
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image'
            }),
            MetaTitleField({
              hasGenerateFn: true
            }),
            MetaImageField({
              relationTo: 'media'
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description'
            })
          ]
        }
      ]
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime'
        },
        position: 'sidebar'
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          }
        ]
      }
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar'
      },
      hasMany: true,
      relationTo: 'users'
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false
      },
      admin: {
        disabled: true,
        readOnly: true
      },
      fields: [
        {
          name: 'id',
          type: 'text'
        },
        {
          name: 'name',
          type: 'text'
        }
      ]
    },
    slugField({
      localized: true
    })
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete]
  },
  versions: {
    drafts: {
      autosave: {
        interval: 300 // We set this interval for optimal live preview
      },
      schedulePublish: true
    },
    maxPerDoc: 3
  }
}
