import { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    slugField(),
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      hasMany: false,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
