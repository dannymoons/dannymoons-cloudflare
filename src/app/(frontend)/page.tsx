import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default async function Page() {
  const headersList = await headers()
  const locale = headersList.get('x-locale') || 'nl'
  redirect(locale === 'nl' ? '/' : `/${locale}`)
}
