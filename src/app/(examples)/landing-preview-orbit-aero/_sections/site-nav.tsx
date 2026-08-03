import { Orbit } from 'lucide-react'

/** Future Payload mapping: siteHeader (agency). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b bg-white/70 px-5 py-4 backdrop-blur-xl sm:px-8'>
			<div className='mx-auto flex max-w-6xl items-center justify-between gap-4'>
				<a href='#top' className='flex min-w-0 items-center gap-2.5'>
					<span className='grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[var(--line)] bg-white/80 backdrop-blur-xl [color:var(--blue)]'>
						<Orbit className='h-4 w-4' />
					</span>
					<span className='truncate font-[family-name:var(--font-display)] font-bold text-lg tracking-tight [color:var(--ink)]'>
						moonsio
						<span className='ml-1.5 font-[family-name:var(--font-body)] font-medium text-sm [color:var(--mute)]'>
							Orbit Aero
						</span>
					</span>
				</a>
				<nav className='hidden gap-6 font-medium text-[11px] uppercase tracking-[0.16em] [color:var(--mute)] lg:flex'>
					<a
						href='#portfolio'
						className='transition-colors hover:[color:var(--blue)]'
					>
						Portfolio
					</a>
					<a
						href='#dashboard'
						className='transition-colors hover:[color:var(--blue)]'
					>
						Dashboard
					</a>
					<a
						href='#reports'
						className='transition-colors hover:[color:var(--blue)]'
					>
						Reports
					</a>
					<a
						href='#pricing'
						className='transition-colors hover:[color:var(--blue)]'
					>
						Pricing
					</a>
				</nav>
				<a
					href='#get-started'
					className='inline-flex min-h-12 shrink-0 items-center rounded-xl border border-[color-mix(in_oklch,var(--blue)_35%,transparent)] bg-white/70 px-4 font-medium text-xs backdrop-blur-xl transition-colors [color:var(--blue)] hover:[background:var(--blue)] hover:[color:var(--cloud)]'
				>
					Start free trial
				</a>
			</div>
		</header>
	)
}
