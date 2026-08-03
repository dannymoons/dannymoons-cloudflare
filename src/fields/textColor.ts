import type { Field } from 'payload'

type ColorLabelIntl = {
  nl: string
  en: string
}

type Color = {
  value: string
  label: string | ColorLabelIntl
}

type TextColorField = {
  colors?: Color[]
  defaultValue?: string
}

const textColor = ({ colors, defaultValue }: TextColorField = {}) => {
  const TextColorResult: Field = {
    name: 'textColor',
    label: {
      nl: 'Tekstkleur',
      en: 'Text color'
    },
    type: 'select',
    options: [
      {
        label: {
          nl: 'Pagina tekstkleur',
          en: 'Page background color'
        },
        value: 'text-foreground'
      },
      {
        label: {
          nl: 'Primair',
          en: 'Primary'
        },
        value: 'text-primary'
      },
      {
        label: {
          nl: 'Primair tekst',
          en: 'Primary text'
        },
        value: 'bg-primary-foreground'
      },
      {
        label: {
          nl: 'Secundair',
          en: 'Secondary'
        },
        value: 'text-secondary'
      },
      {
        label: {
          nl: 'Secundaire tekst',
          en: 'Secondary text'
        },
        value: 'text-secondary-foreground'
      },
      {
        label: {
          nl: 'Tertiaire',
          en: 'Tertiary'
        },
        value: 'text-tertiary'
      },
      {
        label: {
          nl: 'Tertiaire tekst',
          en: 'Tertiary text'
        },
        value: 'text-tertiary-foreground'
      }
    ],
    defaultValue: defaultValue || 'text-primary-foreground'
  }

  if (colors) {
    TextColorResult.options = colors
  }

  return TextColorResult
}

export { textColor }
