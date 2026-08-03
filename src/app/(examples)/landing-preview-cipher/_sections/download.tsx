const stores = [
	{ platform: 'iOS', label: 'App Store', version: '2.4.1' },
	{ platform: 'Android', label: 'Play Store / F-Droid', version: '2.4.1' },
	{ platform: 'Desktop', label: 'macOS · Windows · Linux', version: '2.4.0' }
]

/** Future Payload mapping: downloadCta (app stores). */
export function Download() {
	return (
		<section
			id='download'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--green)_6%,var(--void))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-3xl text-center'>
				<div className='cf-reveal'>
					<h2 className='font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
						Download Cipher
					</h2>
					<p className='mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Free, open source, and ready in under a minute. No account —
						generate keys locally.
					</p>
				</div>

				<div className='cf-reveal mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3'>
					{stores.map(s => (
						<a
							key={s.platform}
							href='#top'
							className='flex min-h-12 flex-col items-center justify-center rounded border border-[color-mix(in_oklch,var(--green)_35%,var(--line))] px-4 py-5 transition-colors [background:var(--panel)] hover:border-[var(--green)]'
						>
							<span className='font-[family-name:var(--font-display)] text-xs uppercase tracking-widest [color:var(--green)]'>
								{s.platform}
							</span>
							<span className='mt-2 text-sm [color:var(--text)]'>
								{s.label}
							</span>
							<span className='mt-1 font-[family-name:var(--font-display)] text-[10px] [color:var(--mute)]'>
								v{s.version}
							</span>
						</a>
					))}
				</div>

				<p className='cf-reveal mt-8 font-[family-name:var(--font-display)] text-xs [color:var(--mute)]'>
					SHA-256 checksums published for every build ·{' '}
					<a href='#protocol' className='[color:var(--green)] hover:underline'>
						Verify signatures
					</a>
				</p>
			</div>
		</section>
	)
}
