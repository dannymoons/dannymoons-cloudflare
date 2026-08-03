import { Asterisk } from 'lucide-react'

/** Future Payload mapping: siteHeader (playful). */
export function SiteNav() {
	return (
		<header className='flex items-center justify-between px-5 py-5 sm:px-8'>
			<a
				href='#top'
				className='flex items-center gap-1 font-extrabold text-2xl tracking-tight'
			>
				<Asterisk className='flx-spin h-6 w-6 [color:var(--magenta)]' />
				FLUX
			</a>
			<nav className='hidden gap-7 font-[family-name:var(--font-mono)] text-sm uppercase md:flex'>
				<a
					href='#work'
					className='transition-colors hover:[color:var(--cobalt)]'
				>
					Work
				</a>
				<a
					href='#capabilities'
					className='transition-colors hover:[color:var(--cobalt)]'
				>
					Studio
				</a>
				<a
					href='#team'
					className='transition-colors hover:[color:var(--cobalt)]'
				>
					Team
				</a>
			</nav>
			<a
				href='#contact'
				className='rounded-full border-2 border-[var(--ink)] px-4 py-1.5 font-semibold text-sm transition-colors hover:[background:var(--ink)] hover:[color:var(--cream)]'
			>
				Let&rsquo;s talk
			</a>
		</header>
	)
}
