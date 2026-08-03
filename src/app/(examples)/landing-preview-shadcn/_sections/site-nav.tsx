import { Box, ChevronRight } from 'lucide-react'

const links = ['Product', 'Solutions', 'Docs', 'Pricing', 'Changelog']

/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-border border-b bg-background/80 backdrop-blur-md'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-gutter'>
				<a
					href='#top'
					className='flex items-center gap-2 font-semibold tracking-tight'
				>
					<span className='grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground'>
						<Box className='h-4 w-4' />
					</span>
					Trace
				</a>
				<nav className='hidden items-center gap-6 text-muted-foreground text-sm md:flex'>
					{links.map(l => (
						<a
							key={l}
							href='#features'
							className='transition-colors hover:text-foreground'
						>
							{l}
						</a>
					))}
				</nav>
				<div className='flex items-center gap-2'>
					<a
						href='#cta'
						className='hidden rounded-md px-3 py-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground sm:inline-block'
					>
						Sign in
					</a>
					<a
						href='#cta'
						className='group inline-flex items-center gap-1 rounded-md bg-primary px-3.5 py-1.5 font-medium text-primary-foreground text-sm shadow-sm transition-colors hover:bg-primary-dark'
					>
						Get started
						<ChevronRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
					</a>
				</div>
			</div>
		</header>
	)
}
