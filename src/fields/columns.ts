import type { Field } from 'payload'

type ColumnsFieldOptions = {
  name?: string
  label?: {
    nl: string
    en: string
  }
  includeAuto?: boolean
  defaultValue?: string
}

const columnsField = (options: ColumnsFieldOptions = {}): Field => {
  const baseOptions = [
    { label: '2 kolommen', value: '2' },
    { label: '3 kolommen', value: '3' },
    { label: '4 kolommen', value: '4' }
  ]

  const optionsWithAuto = options.includeAuto
    ? [
        ...baseOptions,
        {
          label: 'Auto (responsive)',
          value: 'auto'
        }
      ]
    : baseOptions

  return {
    name: options.name || 'columns',
    type: 'select',
    label: options.label || {
      nl: 'Kolommen',
      en: 'Columns'
    },
    options: optionsWithAuto,
    defaultValue: options.defaultValue || '3',
    admin: {
      description: {
        nl: 'Aantal kolommen op desktop (automatisch responsive op mobiel)',
        en: 'Number of columns on desktop (automatically responsive on mobile)'
      }
    }
  }
}

// Pre-configured common columns field
const columns: Field = columnsField({ includeAuto: true })

export { columnsField, columns }
