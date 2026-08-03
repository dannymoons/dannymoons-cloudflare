/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--night)_92%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-2xl tracking-wide [color:var(--amber)]'
				>
					KESTREL
				</a>
				<nav className='hidden gap-7 text-sm [color:var(--mute)] md:flex'>
					<a href='#expedition' className='hover:[color:var(--cream)]'>
						Expedition
					</a>
					<a href='#species' className='hover:[color:var(--cream)]'>
						Species
					</a>
					<a href='#field-notes' className='hover:[color:var(--cream)]'>
						Field notes
					</a>
					<a href='#gallery' className='hover:[color:var(--cream)]'>
						Gallery
					</a>
				</nav>
				<a
					href='#contact'
					className='inline-flex min-h-12 items-center rounded-sm px-5 text-sm [background:var(--amber)] [color:var(--night)]'
				>
					Join the crew
				</a>
			</div>
		</header>
	)
}
