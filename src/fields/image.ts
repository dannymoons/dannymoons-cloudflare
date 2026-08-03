import type { Field } from 'payload'

const image: Field = {
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  label: {
    nl: 'Afbeelding',
    en: 'Image'
  }
}

export { image }
