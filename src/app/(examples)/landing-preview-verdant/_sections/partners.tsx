const logos = ['Patagonia', 'IKEA', 'Unilever', 'Ørsted', 'Interface', 'B Corp']

/** Future Payload mapping: logoStrip. */
export function Partners() {
	return (
		<section className='px-5 py-16 sm:px-8'>
			<div className='mx-auto max-w-6xl text-center'>
				<p className='text-xs uppercase tracking-[0.24em] [color:var(--mute)]'>
					Trusted by leaders in transition
				</p>
				<div className='mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
					{logos.map(l => (
						<span
							key={l}
							className='font-[family-name:var(--font-display)] text-xl opacity-70 [color:var(--mute)]'
						>
							{l}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}
