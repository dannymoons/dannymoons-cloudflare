import type { TabForPayloadTabsField } from './types'
import { button } from './button'

const buttonsTab: TabForPayloadTabsField = {
  label: {
    nl: 'Knoppen',
    en: 'Buttons'
  },
  fields: [
    {
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
  ]
}

export { buttonsTab }
