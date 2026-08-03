/** Future Payload mapping: monitoringGauges (uptime + budget). */
const gauges = [
	{
		label: 'Uptime',
		value: 99.97,
		unit: '%',
		max: 100,
		desc: 'API availability (30d rolling)',
		color: 'var(--lime)'
	},
	{
		label: 'Carbon budget',
		value: 68,
		unit: '%',
		max: 100,
		desc: 'Monthly budget consumed · acme.com',
		color: 'var(--violet)'
	}
] as const

function Gauge({
	label,
	value,
	unit,
	max,
	desc,
	color
}: {
	label: string
	value: number
	unit: string
	max: number
	desc: string
	color: string
}) {
	const pct = (value / max) * 100
	const circumference = 2 * Math.PI * 54
	const offset = circumference - (pct / 100) * circumference

	return (
		<article className='osg-reveal flex flex-col items-center rounded border border-[var(--line)] p-6 [background:var(--panel)] sm:p-8'>
			<h3 className='font-[family-name:var(--font-display)] font-semibold text-sm uppercase tracking-wider [color:var(--mute)]'>
				{label}
			</h3>
			<div className='relative mt-6'>
				<svg
					width='140'
					height='140'
					viewBox='0 0 140 140'
					role='img'
					aria-label={`${label}: ${value}${unit}`}
				>
					<circle
						cx='70'
						cy='70'
						r='54'
						fill='none'
						stroke='var(--line)'
						strokeWidth='8'
					/>
					<circle
						cx='70'
						cy='70'
						r='54'
						fill='none'
						stroke={color}
						strokeWidth='8'
						strokeLinecap='round'
						strokeDasharray={circumference}
						strokeDashoffset={offset}
						transform='rotate(-90 70 70)'
					/>
				</svg>
				<div className='absolute inset-0 flex flex-col items-center justify-center'>
					<span
						className='font-[family-name:var(--font-display)] font-semibold text-2xl tabular-nums'
						style={{ color }}
					>
						{value}
						<span className='text-sm'>{unit}</span>
					</span>
				</div>
			</div>
			<p className='mt-4 text-center font-[family-name:var(--font-body)] text-xs [color:var(--mute)]'>
				{desc}
			</p>
		</article>
	)
}

/** Future Payload mapping: monitoringGauges (uptime + budget). */
export function Monitoring() {
	return (
		<section id='monitoring' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-10 text-center'>
					<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						Monitoring
					</span>
					<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Uptime & carbon budgets
					</h2>
					<p className='osg-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Set per-site carbon budgets and track API uptime from the same
						dashboard — or pull both via GET /v1/sites/&#123;id&#125;/budget.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{gauges.map(g => (
						<Gauge key={g.label} {...g} />
					))}
				</div>

				<div className='osg-reveal mt-8 grid grid-cols-2 gap-px overflow-hidden rounded border border-[var(--line)] [background:var(--line)] sm:grid-cols-4'>
					{(
						[
							['Scans today', '1,284'],
							['Avg latency', '42ms'],
							['Budget alerts', '3'],
							['Sites tracked', '12']
						] as const
					).map(([label, val]) => (
						<div
							key={label}
							className='px-4 py-4 [background:var(--panel)] sm:px-5'
						>
							<p className='font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
								{label}
							</p>
							<p className='mt-1 font-[family-name:var(--font-display)] font-semibold text-xl tabular-nums [color:var(--text)]'>
								{val}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
