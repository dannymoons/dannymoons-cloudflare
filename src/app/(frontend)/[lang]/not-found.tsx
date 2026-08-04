import Link from 'next/link'

import { Heading } from '@/components/content/heading'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container py-28">
      <div className="max-w-none">
        <Heading headingLevel="h1" size="xl" color="foreground" className="mb-3">
          404
        </Heading>
        <p className="mb-4">This page could not be found.</p>
      </div>
      <Button asChild variant="primary">
        <Link href="/">Go home</Link>
      </Button>
    </div>
  )
}
