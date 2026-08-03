import { GitBranch, Search } from 'lucide-react'

/** Future Payload mapping: docsHeader. */
export function DocsNav() {
	return (
		<header className='sticky top-0 z-40 border-border border-b bg-background/80 backdrop-blur'>
			<div className='mx-auto flex max-w-[90rem] items-center gap-4 px-5 py-3 sm:px-10'>
				<a href='#top' className='flex items-center gap-2 font-semibold'>
					<span className='grid h-7 w-7 place-items-center rounded-md bg-primary font-bold text-primary-foreground text-sm'>
						H
					</span>
					Helix
					<span className='rounded-full bg-muted px-2 py-0.5 font-[family-name:var(--font-mono)] text-muted-foreground text-xs'>
						v3.2
					</span>
				</a>

				<nav className='ml-6 hidden gap-5 text-muted-foreground text-sm md:flex'>
					<a href='#top' className='font-medium text-foreground'>
						Docs
					</a>
					<a href='#top' className='hover:text-foreground'>
						API
					</a>
					<a href='#top' className='hover:text-foreground'>
						Guides
					</a>
					<a href='#top' className='hover:text-foreground'>
						Changelog
					</a>
				</nav>

				<div className='ml-auto flex items-center gap-3'>
					<button
						type='button'
						className='hidden items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-muted-foreground text-sm sm:flex'
					>
						<Search className='h-4 w-4' />
						Search
						<kbd className='rounded border border-border bg-background px-1.5 font-[family-name:var(--font-mono)] text-xs'>
							⌘K
						</kbd>
					</button>
					<a
						href='#top'
						aria-label='GitHub'
						className='grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground hover:bg-muted'
					>
						<GitBranch className='h-4 w-4' />
					</a>
				</div>
			</div>
		</header>
	)
}
