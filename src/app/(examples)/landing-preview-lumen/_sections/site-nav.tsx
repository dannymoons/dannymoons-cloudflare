import { Sparkles } from 'lucide-react'

/** Future Payload mapping: siteHeader (glass). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 flex items-center justify-between border-[var(--line)] border-b px-5 py-4 backdrop-blur-xl [background:color-mix(in_oklch,var(--void)_72%,transparent)] sm:px-8'>
			<a
				href='#top'
				className='flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-lg tracking-tight'
			>
				<span className='grid h-7 w-7 place-items-center rounded-md [background:linear-gradient(135deg,var(--violet),var(--cyan))] [color:var(--void)]'>
					<Sparkles className='h-4 w-4' />
				</span>
				LUMEN
			</a>
			<nav className='hidden gap-7 font-[family-name:var(--font-display)] text-xs uppercase tracking-widest [color:var(--mute)] md:flex'>
				<a href='#work' className='transition-colors hover:[color:var(--cyan)]'>
					Work
				</a>
				<a
					href='#capabilities'
					className='transition-colors hover:[color:var(--cyan)]'
				>
					Capabilities
				</a>
				<a href='#lab' className='transition-colors hover:[color:var(--cyan)]'>
					Lab
				</a>
				<a href='#team' className='transition-colors hover:[color:var(--cyan)]'>
					Team
				</a>
			</nav>
			<a
				href='#contact'
				className='inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-4 py-1.5 text-sm transition-colors hover:[background:linear-gradient(120deg,var(--violet),var(--cyan))] hover:[color:var(--void)]'
			>
				Start a project
			</a>
		</header>
	)
}
