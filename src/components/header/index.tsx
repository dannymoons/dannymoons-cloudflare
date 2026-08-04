import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { Container } from '@/components/layout/container'
import { Header as HeaderShell } from '@/components/header/header'
import { MobileMenu } from '@/components/header/mobile-menu'
import { Nav } from '@/components/header/nav'
import { Navbar, NavbarActions, NavbarBrand, NavbarContent } from '@/components/header/navbar'

export function SiteHeader() {
  return (
    <HeaderShell border="glass" className="bg-background/76">
      <Container size="wide" padding="none">
        <Navbar className="h-[4.5rem]">
          <NavbarBrand>
            <Link href="/" className="group flex items-center gap-3" aria-label="Danny Moons">
              <span className="relative grid size-8 place-items-center rounded-full border border-primary/45 bg-primary/8">
                <span className="size-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
                <span className="absolute inset-1 rounded-full border border-primary/35 border-dashed" />
              </span>
              <span className="font-semibold text-foreground text-sm tracking-[-0.02em] sm:text-base">
                Danny Moons
              </span>
            </Link>
          </NavbarBrand>

          <NavbarContent className="justify-center">
            <Nav aria-label="Primary">
              <Link
                href="/#thesis"
                className="px-3 py-2 font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Thesis
              </Link>
              <Link
                href="/#work"
                className="px-3 py-2 font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Work
              </Link>
              <Link
                href="/posts"
                className="px-3 py-2 font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Notes
              </Link>
              <Link
                href="/#about"
                className="px-3 py-2 font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                About
              </Link>
            </Nav>
          </NavbarContent>

          <NavbarActions>
            <a
              href="https://github.com/dannymoons"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden h-9 items-center gap-2 rounded-full border border-border bg-surface px-4 font-semibold text-foreground text-xs transition-colors hover:border-primary/40 hover:bg-elevated sm:inline-flex"
            >
              GitHub
              <ArrowUpRight className="size-3.5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <MobileMenu side="right" contentClassName="bg-background">
              <Nav orientation="vertical">
                <Link
                  href="/#thesis"
                  className="border-border border-b px-2 py-4 font-medium text-base text-foreground"
                >
                  Thesis
                </Link>
                <Link
                  href="/#work"
                  className="border-border border-b px-2 py-4 font-medium text-base text-foreground"
                >
                  Work
                </Link>
                <Link
                  href="/posts"
                  className="border-border border-b px-2 py-4 font-medium text-base text-foreground"
                >
                  Notes
                </Link>
                <Link
                  href="/#about"
                  className="border-border border-b px-2 py-4 font-medium text-base text-foreground"
                >
                  About
                </Link>
              </Nav>
            </MobileMenu>
          </NavbarActions>
        </Navbar>
      </Container>
    </HeaderShell>
  )
}
