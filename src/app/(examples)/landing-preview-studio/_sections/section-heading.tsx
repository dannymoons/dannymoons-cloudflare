/** Shared editorial heading: small clay eyebrow + serif title. */
export function SectionHeading({
	eyebrow,
	title,
	meta
}: {
	eyebrow: string
	title: string
	meta?: string
}) {
	return (
		<div className='mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
			<div>
				<span className='text-[var(--clay)] text-xs uppercase tracking-[0.25em]'>
					{eyebrow}
				</span>
				<h2 className='mt-3 max-w-xl font-[family-name:var(--font-display)] font-light text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em]'>
					{title}
				</h2>
			</div>
			{meta ? (
				<span className='text-[var(--ink-soft)] text-xs uppercase tracking-widest'>
					{meta}
				</span>
			) : null}
		</div>
	)
}
