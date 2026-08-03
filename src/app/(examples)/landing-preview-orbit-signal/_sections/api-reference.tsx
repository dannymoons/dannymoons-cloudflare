const endpoints = [
	{
		method: 'GET',
		path: '/v1/sites/{id}/pages',
		desc: 'List all tracked pages with carbon metrics'
	},
	{
		method: 'GET',
		path: '/v1/sites/{id}/pages/{path}',
		desc: 'Single page detail with asset breakdown'
	},
	{
		method: 'POST',
		path: '/v1/sites',
		desc: 'Register a new site for monitoring'
	},
	{
		method: 'GET',
		path: '/v1/sites/{id}/events',
		desc: 'Real-time event stream (SSE or paginated)'
	},
	{
		method: 'POST',
		path: '/v1/webhooks',
		desc: 'Create webhook subscription for alerts'
	},
	{
		method: 'GET',
		path: '/v1/sites/{id}/budget',
		desc: 'Carbon budget status and burn rate'
	}
] as const

const methodColors: Record<string, string> = {
	GET: 'var(--lime)',
	POST: 'var(--violet)'
}

/** Future Payload mapping: apiReference (endpoint table). */
export function ApiReference() {
	return (
		<section
			id='api'
			className='border-[var(--line)] border-y px-5 py-20 [background:var(--panel)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-10'>
					<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						REST API
					</span>
					<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Endpoint reference
					</h2>
					<p className='osg-reveal mt-4 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
						JSON responses, cursor pagination, and OpenAPI 3.1 spec. Base URL:{' '}
						<code className='rounded border border-[var(--line)] px-1.5 py-0.5 text-xs [color:var(--lime)]'>
							https://api.orbit.moonsio.com
						</code>
					</p>
				</div>

				<div className='osg-reveal overflow-hidden rounded border border-[var(--line)]'>
					<div className='overflow-x-auto'>
						<table className='w-full min-w-[540px] text-left text-sm'>
							<thead>
								<tr className='border-[var(--line)] border-b [background:color-mix(in_oklch,var(--void)_60%,transparent)]'>
									<th
										scope='col'
										className='px-4 py-3 font-[family-name:var(--font-body)] font-medium text-[10px] uppercase tracking-[0.16em] [color:var(--mute)] sm:px-6'
									>
										Method
									</th>
									<th
										scope='col'
										className='px-4 py-3 font-[family-name:var(--font-body)] font-medium text-[10px] uppercase tracking-[0.16em] [color:var(--mute)] sm:px-6'
									>
										Endpoint
									</th>
									<th
										scope='col'
										className='hidden px-4 py-3 font-[family-name:var(--font-body)] font-medium text-[10px] uppercase tracking-[0.16em] [color:var(--mute)] sm:table-cell sm:px-6'
									>
										Description
									</th>
								</tr>
							</thead>
							<tbody>
								{endpoints.map(ep => (
									<tr
										key={ep.path + ep.method}
										className='border-[var(--line)] border-b transition-colors [background:var(--void)] last:border-b-0 hover:[background:color-mix(in_oklch,var(--panel)_50%,var(--void))]'
									>
										<td className='px-4 py-4 sm:px-6'>
											<span
												className='inline-block rounded border px-2 py-0.5 font-[family-name:var(--font-body)] font-medium text-[10px] uppercase tracking-wider'
												style={{
													color: methodColors[ep.method],
													borderColor: `color-mix(in oklch, ${methodColors[ep.method]} 35%, transparent)`
												}}
											>
												{ep.method}
											</span>
										</td>
										<td className='px-4 py-4 font-[family-name:var(--font-body)] text-xs [color:var(--text)] sm:px-6 sm:text-sm'>
											{ep.path}
										</td>
										<td className='hidden px-4 py-4 text-sm [color:var(--mute)] sm:table-cell sm:px-6'>
											{ep.desc}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<p className='osg-reveal mt-4 font-[family-name:var(--font-body)] text-xs [color:var(--mute)] sm:hidden'>
					Tap a row to view full endpoint docs on desktop.
				</p>
			</div>
		</section>
	)
}
