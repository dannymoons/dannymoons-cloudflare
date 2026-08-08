import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { Heading } from '@/components/content/heading'
import { SiteBrand } from '@/components/brand/site-brand'
import { Container } from '@/components/layout/container'

export function Footer() {
  return (
    <footer className="border-border border-t bg-surface/55 pt-16 pb-7 sm:pt-20">
      <Container size="wide">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.55fr_0.55fr]">
          <div>
            <SiteBrand />
            <Heading
              headingLevel="p"
              size="md"
              color="foreground"
              className="mt-7 max-w-lg font-normal text-2xl leading-tight tracking-[-0.025em] sm:text-3xl"
            >
              Better digital work starts with clear thinking.
            </Heading>
            <p className="mt-5 max-w-md text-muted-foreground text-sm leading-6">
              Notes on sustainable software engineering, AI agents, and the future of digital
              products.
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.63rem] text-primary uppercase tracking-[0.18em]">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/#notes"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.63rem] text-primary uppercase tracking-[0.18em]">
              Connect
            </p>
            <div className="mt-5 space-y-3">
              <a
                href="https://github.com/dannymoons"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                GitHub
                <ArrowUpRight className="size-3.5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-border border-t pt-6 text-[0.68rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Danny Moons</p>
          <p>Built with care for speed, clarity, and impact.</p>
        </div>
      </Container>
    </footer>
  )
}
