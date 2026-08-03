import { Bolt } from 'lucide-react'

/** Future Payload mapping: siteHeader (bold). */
export function SiteNav() {
	return (
		<header className='flex items-center justify-between px-5 py-5 sm:px-8'>
			<a
				href='#top'
				className='font-[family-name:var(--font-display)] text-3xl tracking-tight [color:var(--acid)]'
			>
				VOLT<span className='[color:var(--magenta)]'>CORE</span>
			</a>
			<nav className='hidden gap-7 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest md:flex'>
				<a
					href='#flavors'
					className='transition-colors hover:[color:var(--acid)]'
				>
					Flavors
				</a>
				<a href='#fuel' className='transition-colors hover:[color:var(--acid)]'>
					The Fuel
				</a>
				<a href='#hype' className='transition-colors hover:[color:var(--acid)]'>
					Hype
				</a>
				<a href='#buy' className='transition-colors hover:[color:var(--acid)]'>
					Stockists
				</a>
			</nav>
			<a
				href='#get'
				className='inline-flex items-center gap-1.5 border-2 border-[var(--acid)] px-4 py-2 font-[family-name:var(--font-display)] text-lg transition-transform duration-200 [background:var(--acid)] [color:var(--void)] hover:-rotate-2 hover:scale-105'
			>
				<Bolt className='h-4 w-4' /> BUY NOW
			</a>
		</header>
	)
}
