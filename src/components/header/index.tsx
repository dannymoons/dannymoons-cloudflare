import { ArrowUpRight, AudioLines, ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { Container } from '@/components/layout/container'
import { Header as HeaderShell } from '@/components/header/header'
import { MobileMenu } from '@/components/header/mobile-menu'
import { Nav } from '@/components/header/nav'
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent
} from '@/components/header/navbar'
import { NavItem } from './nav-item'

export function SiteHeader() {
  return (
    <HeaderShell border='glass' className='bg-background/76'>
      <Container size='wide' padding='none'>
        <Navbar className='h-[4.5rem]'>
          <NavbarBrand>
            <Link
              href='/'
              className='group flex items-center gap-3'
              aria-label='Danny Moons'
            >
              <span className='relative grid size-8 place-items-center rounded-full border border-primary/45 bg-primary/8'>
                <span className='size-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125' />
                <span className='absolute inset-1 rounded-full border border-primary/35 border-dashed' />
              </span>
              <span className='font-semibold text-foreground text-sm tracking-[-0.02em] sm:text-base'>
                Danny Moons
              </span>
            </Link>
          </NavbarBrand>

          <NavbarContent className='justify-center'>
            <Nav aria-label='Primary'>
              <NavItem href='/posts'>Notes</NavItem>
              <NavItem href='/#work'>Work</NavItem>
              <NavItem href='/#faq'> Questions</NavItem>
              <NavItem href='/#about'>About</NavItem>
            </Nav>
          </NavbarContent>

          <NavbarActions>
            <a
              href='https://www.linkedin.com/in/danny-moons/'
              target='_blank'
              rel='noopener noreferrer'
              className='group hidden h-9 items-center gap-2 rounded-full border border-border bg-surface px-4 font-semibold text-foreground text-xs transition-colors hover:border-primary/40 hover:bg-elevated sm:inline-flex'
            >
              Let's connect
              <AudioLines className='size-3.5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </a>
            <MobileMenu contentClassName='bg-background' />
          </NavbarActions>
        </Navbar>
      </Container>
    </HeaderShell>
  )
}
