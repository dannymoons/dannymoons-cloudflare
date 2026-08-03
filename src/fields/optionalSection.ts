import type { Field } from 'payload'

type LocalizedLabel = {
  nl: string
  en: string
} & Record<string, string>

interface OptionalSectionConfig {
  /**
   * Group field name. The grouped data lives at `data[name].*`.
   */
  name: string
  /**
   * Label shown above the group in admin.
   */
  label: LocalizedLabel
  /**
   * Toggle field name. Defaults to `show${capitalize(name)}`.
   */
  toggleName?: string
  /**
   * Toggle label.
   */
  toggleLabel: LocalizedLabel
  /**
   * Toggle default. Defaults to `true`.
   */
  toggleDefault?: boolean
  /**
   * Optional description for the toggle.
   */
  toggleDescription?: LocalizedLabel
  /**
   * Add an `anchorId` text field at the top of the group so editors can
   * customize the in-page anchor (e.g. for hero buttons that scroll to a
   * section). Defaults to `false`.
   */
  includeAnchorId?: boolean
  /**
   * Default anchor id surfaced in the admin description.
   */
  defaultAnchorId?: string
  /**
   * Inner fields of the group.
   */
  fields: Field[]
}

const capitalize = (value: string) =>
  value.length > 0 ? value[0].toUpperCase() + value.slice(1) : value

/**
 * Build a pair of fields for a toggle-able fixed section: a checkbox toggle
 * + a group that is conditionally shown when the toggle is on. Spread the
 * result directly into a tab's `fields` array.
 *
 * @example
 * fields: [
 *   ...optionalSection({
 *     name: 'faqs',
 *     label: { nl: 'FAQ sectie', en: 'FAQ section' },
 *     toggleLabel: { nl: 'FAQ tonen', en: 'Show FAQ' },
 *     includeAnchorId: true,
 *     defaultAnchorId: 'faq',
 *     fields: [...faqFields],
 *   }),
 * ]
 */
export const optionalSection = ({
  name,
  label,
  toggleName,
  toggleLabel,
  toggleDefault = true,
  toggleDescription,
  includeAnchorId = false,
  defaultAnchorId,
  fields
}: OptionalSectionConfig): Field[] => {
  const resolvedToggleName = toggleName ?? `show${capitalize(name)}`

  const groupFields: Field[] = []

  if (includeAnchorId) {
    groupFields.push({
      name: 'anchorId',
      type: 'text',
      label: {
        nl: 'Anker ID (voor in-pagina links)',
        en: 'Anchor ID (for in-page links)'
      },
      admin: {
        description: defaultAnchorId
          ? {
              nl: `Optioneel. Wordt gebruikt als #anker in de URL. Standaard: "${defaultAnchorId}".`,
              en: `Optional. Used as the #anchor in the URL. Default: "${defaultAnchorId}".`
            }
          : {
              nl: 'Optioneel. Wordt gebruikt als #anker in de URL.',
              en: 'Optional. Used as the #anchor in the URL.'
            }
      }
    })
  }

  groupFields.push(...fields)

  const toggle: Field = {
    name: resolvedToggleName,
    type: 'checkbox',
    defaultValue: toggleDefault,
    label: toggleLabel,
    ...(toggleDescription
      ? { admin: { description: toggleDescription } }
      : {})
  }

  const group: Field = {
    name,
    type: 'group',
    label,
    admin: {
      condition: (_, sibling) => {
        const value = sibling?.[resolvedToggleName]
        return toggleDefault ? value !== false : value === true
      }
    },
    fields: groupFields
  }

  return [toggle, group]
}
