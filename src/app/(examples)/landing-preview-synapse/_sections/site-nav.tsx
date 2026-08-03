import { BrainCircuit } from 'lucide-react'

/** Future Payload mapping: siteHeader (glass). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 flex items-center justify-between border-[color-mix(in_oklch,var(--neon)_25%,var(--line))] border-b px-5 py-4 backdrop-blur-xl [background:color-mix(in_oklch,var(--void)_72%,transparent)] sm:px-8'>
			<a href='#top' className='flex items-center gap-2.5'>
				<span className='grid h-8 w-8 place-items-center rounded-lg border border-[color-mix(in_oklch,var(--neon)_40%,transparent)] shadow-[0_0_24px_-8px_var(--neon)] [background:linear-gradient(135deg,var(--pulse),var(--neon))] [color:var(--void)]'>
					<BrainCircuit className='h-4 w-4' />
				</span>
				<span className='font-[family-name:var(--font-display)] font-semibold text-lg tracking-tight'>
					SYNAPSE
				</span>
			</a>
			<nav className='hidden gap-6 text-[11px] uppercase tracking-[0.2em] [color:var(--mute)] md:flex'>
				<a
					href='#capabilities'
					className='transition-colors hover:[color:var(--neon)]'
				>
					Capabilities
				</a>
				<a
					href='#models'
					className='transition-colors hover:[color:var(--neon)]'
				>
					Models
				</a>
				<a
					href='#benchmarks'
					className='transition-colors hover:[color:var(--neon)]'
				>
					Benchmarks
				</a>
				<a
					href='#pricing'
					className='transition-colors hover:[color:var(--neon)]'
				>
					Pricing
				</a>
			</nav>
			<a
				href='#demo'
				className='inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_oklch,var(--neon)_45%,transparent)] px-4 py-1.5 text-xs transition-all duration-300 hover:shadow-[0_0_28px_-6px_var(--neon)] hover:[background:color-mix(in_oklch,var(--neon)_12%,transparent)] hover:[color:var(--neon)]'
			>
				Open playground
			</a>
		</header>
	)
}
