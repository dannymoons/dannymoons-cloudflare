import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['nl', 'en'] as const
const DEFAULT_LOCALE = 'nl'

/** Design preview routes in `src/app/(examples)/` — no locale prefix. */
function isExampleRoute(pathname: string) {
  return (
    pathname === '/sections-preview' ||
    pathname === '/landing-pages' ||
    pathname === '/landing-preview' ||
    pathname.startsWith('/landing-preview-')
  )
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip non-frontend routes (including Cloudflare Images media transforms)
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/media') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/next') ||
    pathname === '/favicon.ico'
  ) {
    return
  }

  // Static design previews live outside the `[lang]` tree
  if (isExampleRoute(pathname)) {
    return
  }

  // Skip static files
  if (pathname.includes('.')) {
    return
  }

  const requestHeaders = new Headers(request.headers)

  // Already has a locale prefix — set header, keep URL as-is
  if (pathname.startsWith('/en/') || pathname === '/en') {
    requestHeaders.set('x-locale', 'en')
    return NextResponse.rewrite(request.nextUrl, {
      request: { headers: requestHeaders },
    })
  }

  if (pathname.startsWith('/nl/') || pathname === '/nl') {
    requestHeaders.set('x-locale', 'nl')
    return NextResponse.rewrite(request.nextUrl, {
      request: { headers: requestHeaders },
    })
  }

  // No locale prefix — prepend /nl internally (user sees clean URLs)
  requestHeaders.set('x-locale', 'nl')
  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? '/nl' : `/nl${pathname}`
  return NextResponse.rewrite(url, {
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|admin|api).*)'],
}
