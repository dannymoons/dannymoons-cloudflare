import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/media') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/next') ||
    pathname === '/favicon.ico' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt'
  ) {
    return
  }

  // Remove legacy locale prefixes while English is the only public language.
  if (/^\/(en|nl)(\/|$)/.test(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(/^\/(en|nl)/, '') || '/'
    return NextResponse.redirect(url)
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', 'en')

  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? '/en' : `/en${pathname}`
  return NextResponse.rewrite(url, {
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|admin|api).*)'],
}
