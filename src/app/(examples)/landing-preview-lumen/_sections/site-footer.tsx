const socials = ['Instagram', 'Behance', 'LinkedIn', 'Vimeo']

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<a
						href='#top'
						className='font-[family-name:var(--font-display)] font-bold text-3xl tracking-tight'
					>
						LUMEN
						<span
							className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
							style={{
								backgroundImage:
									'linear-gradient(120deg, var(--violet), var(--cyan), var(--violet))'
							}}
						>
							°
						</span>
					</a>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Iridescent experiential brand studio. London · Tokyo · Remote.
					</p>
				</div>
				<div className='flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest'>
					{socials.map(s => (
						<a
							key={s}
							href='#top'
							className='transition-colors [color:var(--mute)] hover:[color:var(--cyan)]'
						>
							{s}
						</a>
					))}
				</div>
			</div>
			<p className='mt-10 text-xs [color:var(--mute)]'>
				© {new Date().getFullYear()} LUMEN Studio — Concept preview
			</p>
		</footer>
	)
}
