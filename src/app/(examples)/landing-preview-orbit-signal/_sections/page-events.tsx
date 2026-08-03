/** Future Payload mapping: pageEvents (event stream). */
const events = [
	{
		type: 'page_view',
		path: '/pricing',
		co2: '0.41g',
		time: '2s ago',
		status: 'ok'
	},
	{
		type: 'asset_load',
		path: '/hero.webp',
		co2: '0.08g',
		time: '2s ago',
		status: 'ok'
	},
	{
		type: 'page_view',
		path: '/docs/api',
		co2: '0.29g',
		time: '5s ago',
		status: 'ok'
	},
	{
		type: 'asset_load',
		path: '/bundle.js',
		co2: '0.12g',
		time: '5s ago',
		status: 'warn'
	},
	{
		type: 'page_view',
		path: '/',
		co2: '0.38g',
		time: '8s ago',
		status: 'ok'
	},
	{
		type: 'asset_load',
		path: '/fonts/inter.woff2',
		co2: '0.03g',
		time: '8s ago',
		status: 'ok'
	},
	{
		type: 'page_view',
		path: '/blog/carbon-api',
		co2: '0.35g',
		time: '12s ago',
		status: 'ok'
	},
	{
		type: 'asset_load',
		path: '/video/demo.mp4',
		co2: '0.24g',
		time: '12s ago',
		status: 'warn'
	}
] as const

const typeColors: Record<string, string> = {
	page_view: 'var(--lime)',
	asset_load: 'var(--violet)'
}

/** Future Payload mapping: pageEvents (event stream). */
export function PageEvents() {
	return (
		<section
			id='events'
			className='border-[var(--line)] border-y px-5 py-20 [background:var(--panel)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							Event stream
						</span>
						<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Real-time page events
						</h2>
						<p className='osg-reveal mt-3 max-w-md text-sm [color:var(--mute)]'>
							Subscribe via SSE or poll GET /v1/sites/&#123;id&#125;/events.
							Every page view and asset load emits a carbon measurement.
						</p>
					</div>
					<span className='osg-reveal inline-flex items-center gap-2 rounded border border-[color-mix(in_oklch,var(--lime)_35%,var(--line))] px-3 py-1.5 font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider [color:var(--lime)]'>
						<span className='h-1.5 w-1.5 animate-pulse rounded-full [background:var(--lime)]' />
						Live
					</span>
				</div>

				<ul className='osg-reveal divide-y divide-[var(--line)] overflow-hidden rounded border border-[var(--line)] [background:var(--void)]'>
					{events.map(ev => (
						<li
							key={`${ev.type}-${ev.path}-${ev.time}`}
							className='flex flex-col gap-2 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5'
						>
							<div className='flex min-w-0 items-center gap-3'>
								<span
									className='shrink-0 rounded border px-2 py-0.5 font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider'
									style={{
										color: typeColors[ev.type],
										borderColor: `color-mix(in oklch, ${typeColors[ev.type]} 35%, transparent)`
									}}
								>
									{ev.type}
								</span>
								<span className='truncate font-[family-name:var(--font-body)] text-sm [color:var(--text)]'>
									{ev.path}
								</span>
							</div>
							<div className='flex items-center gap-4 pl-0 sm:shrink-0 sm:pl-0'>
								<span className='font-[family-name:var(--font-body)] text-xs tabular-nums [color:var(--lime)]'>
									{ev.co2}
								</span>
								<span className='font-[family-name:var(--font-body)] text-[10px] [color:var(--mute)]'>
									{ev.time}
								</span>
								<span
									className={`h-1.5 w-1.5 rounded-full ${ev.status === 'warn' ? '[background:oklch(0.75_0.15_85)]' : '[background:var(--lime)]'}`}
									aria-hidden
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
