import type { TabForPayloadTabsField } from './types'

const uspsTab: TabForPayloadTabsField = {
  label: {
    nl: 'Usps',
    en: 'Usps'
  },
  fields: [
    {
      name: 'usps',
      type: 'array',
      label: {
        nl: 'Usps',
        en: 'Usps'
      },
      minRows: 2,
      maxRows: 10,
      fields: [
        {
          type: 'textarea',
          name: 'text',
          localized: true,
          label: {
            nl: 'USP tekst',
            en: 'USP text'
          }
        }
      ]
    }
  ]
}

export { uspsTab }
