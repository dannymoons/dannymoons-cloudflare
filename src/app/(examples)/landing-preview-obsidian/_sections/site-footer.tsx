const socials = ['Instagram', 'Behance', 'Vimeo', 'LinkedIn']

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<a href='#top' className='font-bold text-3xl tracking-tight'>
						OBSIDIAN<span className='[color:var(--amber)]'>°</span>
					</a>
					<p className='mt-3 max-w-xs text-[var(--mute)] text-sm'>
						Cinematic design & 3D studio. Amsterdam · Berlin · Remote.
					</p>
				</div>
				<div className='flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest'>
					{socials.map(s => (
						<a
							key={s}
							href='#top'
							className='text-[var(--mute)] transition-colors hover:[color:var(--paper)]'
						>
							{s}
						</a>
					))}
				</div>
			</div>
			<p className='mt-10 font-[family-name:var(--font-mono)] text-[var(--mute)] text-xs'>
				© {new Date().getFullYear()} Obsidian Studio — Concept preview
			</p>
		</footer>
	)
}
