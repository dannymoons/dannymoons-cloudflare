import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // Cloudflare Images generates responsive variants from the R2 original at request time.
    crop: false,
    focalPoint: false,
  },
}
