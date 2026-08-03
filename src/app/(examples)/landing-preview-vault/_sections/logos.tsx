const names = [
	'Forbes',
	'TechCrunch',
	'Wired',
	'Sifted',
	'The Verge',
	'Bloomberg'
]

/** Future Payload mapping: logoStrip. */
export function Logos() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-8 sm:px-8'>
			<p className='mb-5 text-center text-[var(--mute)] text-xs uppercase tracking-widest'>
				As featured in
			</p>
			<div className='mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4'>
				{names.map(n => (
					<span
						key={n}
						className='font-[family-name:var(--font-display)] font-medium text-[var(--mute)] text-xl opacity-70'
					>
						{n}
					</span>
				))}
			</div>
		</section>
	)
}
