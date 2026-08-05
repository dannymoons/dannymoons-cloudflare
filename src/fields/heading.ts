import type { Field } from 'payload'

const heading: Field = {
  name: 'heading',
  type: 'group',
  label: {
    nl: 'Koptekst',
    en: 'Heading'
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: {
        nl: 'Heading tekst',
        en: 'Heading text'
      },
      required: true
    },
    {
      name: 'level',
      type: 'select',
      label: {
        nl: 'Heading niveau',
        en: 'Heading level'
      },
      options: [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
        { label: 'H5', value: 'h5' },
        { label: 'H6', value: 'h6' }
      ],
      defaultValue: 'h2',
      admin: {
        description: {
          nl: 'Semantisch niveau van de heading voor toegankelijkheid',
          en: 'Semantic level of the heading for accessibility'
        }
      }
    }
  ],
  admin: {
    description: {
      nl: 'Hoofding met configureerbaar semantisch niveau',
      en: 'Heading with configurable semantic level'
    }
  }
}

export { heading }
