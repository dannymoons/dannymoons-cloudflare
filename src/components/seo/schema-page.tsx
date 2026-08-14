import {
  SchemaJson,
  setBaseUrl,
  type SchemaJsonProps
} from '@moonsio/next-schema'

import { defaultSchemaValues } from '../../../schema.config'
import { SITE_NAME } from '@/utilities/site'

const baseUrl = 'https://dannymoons.nl'

setBaseUrl(baseUrl)

type SchemaPageProps = Omit<SchemaJsonProps, 'logo' | 'website'>

export function SchemaPage(props: SchemaPageProps) {
  const { person, ...schemaProps } = props

  return (
    <SchemaJson
      {...schemaProps}
      logo={defaultSchemaValues.logo}
      website={{ baseUrl, companyName: SITE_NAME }}
      person={
        person
          ? { ...person, sameAs: person.sameAs ?? defaultSchemaValues.sameAs }
          : undefined
      }
    />
  )
}
