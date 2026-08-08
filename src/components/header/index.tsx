import { AudioLines } from 'lucide-react'

import { SiteBrand } from '@/components/brand/site-brand'
import { Container } from '@/components/layout/container'
import { DesktopNav } from '@/components/header/desktop-nav'
import { MobileMenu } from '@/components/header/mobile-menu'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-[var(--z-sticky)] w-full border-border/50 border-b bg-background/76 backdrop-blur-md supports-[backdrop-filter]:bg-background/60'>
      <Container size='wide' padding='none'>
        <div className='flex h-[4.5rem] items-center gap-4 px-4 sm:px-6 lg:px-8'>
          <SiteBrand />

          <DesktopNav />

          <div className='ml-auto flex items-center gap-2'>
            <a
              href='https://www.linkedin.com/in/danny-moons/'
              target='_blank'
              rel='noopener noreferrer'
              className='group hidden h-9 items-center gap-2 rounded-full border border-border bg-surface px-4 font-semibold text-foreground text-xs transition-colors hover:border-primary/40 hover:bg-elevated sm:inline-flex'
            >
              Let&apos;s connect
              <AudioLines className='size-3.5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </a>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  )
}
