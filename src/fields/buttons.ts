import type { Field } from 'payload'
import { button } from './button'

const buttons: Field = {
  name: 'buttons',
  type: 'array',
  label: {
    nl: 'Knoppen',
    en: 'Buttons'
  },
  labels: {
    singular: {
      nl: 'Knop',
      en: 'Button'
    },
    plural: {
      nl: 'Knoppen',
      en: 'Buttons'
    }
  },
  maxRows: 2,
  fields: [button()]
}

export { buttons }
