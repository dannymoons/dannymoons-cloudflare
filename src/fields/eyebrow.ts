import type { Field } from 'payload'

const eyebrow: Field = {
  name: 'eyebrow',
  type: 'text',
  localized: true,
  label: {
    nl: 'Bovenkop',
    en: 'Eyebrow'
  },
  admin: {
    description: {
      nl: 'Kleine tekst boven de hoofding (bijv. "Nieuw", "Belangrijk")',
      en: 'Small text above the heading (e.g. "New", "Important")'
    }
  }
}

export { eyebrow }
