import type { Field } from 'payload'

export type TabForPayloadTabsField = {
  name?: string
  label: {
    nl: string
    en: string
  }
  fields: Field[]
}

