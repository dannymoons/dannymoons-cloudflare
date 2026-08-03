/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
				<span className='font-[family-name:var(--font-display)] text-2xl tracking-wide [color:var(--amber)]'>
					KESTREL
				</span>
				<nav className='flex flex-wrap gap-6 text-sm [color:var(--mute)]'>
					<a href='#expedition' className='hover:[color:var(--cream)]'>
						Expedition
					</a>
					<a href='#species' className='hover:[color:var(--cream)]'>
						Species
					</a>
					<a href='#field-notes' className='hover:[color:var(--cream)]'>
						Field notes
					</a>
					<a href='#contact' className='hover:[color:var(--cream)]'>
						Contact
					</a>
				</nav>
				<p className='text-sm [color:var(--mute)]'>
					© {new Date().getFullYear()} KESTREL Expedition Films — Concept
					preview
				</p>
			</div>
		</footer>
	)
}
