import type { Field } from 'payload'

const title: Field = {
  name: 'title',
  type: 'text',
  localized: true,
  label: {
    nl: 'Titel',
    en: 'Title'
  },
  required: false,
  admin: {
    description: {
      nl: 'Laat de titel leeg om deze niet te tonen.',
      en: 'Leave the title empty to not show it.'
    }
  }
}

export { title }
