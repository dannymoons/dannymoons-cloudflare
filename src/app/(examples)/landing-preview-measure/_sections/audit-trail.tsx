const entries = [
	{
		ts: '2026-06-08T14:32:11Z',
		actor: 'system',
		event: 'scope3.supplier.mapped',
		detail: 'vendor:media-buy-desk → 12.4 tCO₂e Q2'
	},
	{
		ts: '2026-06-08T14:28:04Z',
		actor: 's.martinez@corp.io',
		event: 'report.export',
		detail: 'CSRD annex — marketing attribution v3.2'
	},
	{
		ts: '2026-06-08T11:15:22Z',
		actor: 'auditor@deloitte.ext',
		event: 'audit.readonly',
		detail: 'session: 47 min — 12 data sources verified'
	},
	{
		ts: '2026-06-07T09:41:08Z',
		actor: 'system',
		event: 'anomaly.flagged',
		detail: 'campaign:summer-launch — +18% vs forecast'
	},
	{
		ts: '2026-06-06T16:02:55Z',
		actor: 'c.moore@corp.io',
		event: 'kpi.approved',
		detail: 'board metric: marketing intensity 0.42'
	}
]

/** Future Payload mapping: auditTrail (forensic log). */
export function AuditTrail() {
	return (
		<section
			id='audit-trail'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--slate)] [color:var(--ice)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal mb-10 grid gap-6 lg:grid-cols-2 lg:items-end'>
					<div>
						<p className='font-mono text-[10px] uppercase tracking-[0.28em] [color:var(--blue)]'>
							Audit trail
						</p>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
							Every figure. Timestamped. Immutable.
						</h2>
					</div>
					<p className='font-mono text-xs leading-relaxed [color:color-mix(in_oklch,var(--ice)_65%,transparent)]'>
						Auditors don&apos;t want dashboards — they want provenance. Measure
						logs every export, approval, and anomaly flag with actor, event, and
						hash.
					</p>
				</div>

				<div className='me-reveal overflow-hidden rounded-sm border border-[color-mix(in_oklch,var(--ice)_15%,transparent)] font-mono text-[11px] sm:text-xs'>
					<div className='border-[color-mix(in_oklch,var(--ice)_12%,transparent)] border-b px-4 py-2 [color:color-mix(in_oklch,var(--ice)_50%,transparent)]'>
						measure/audit — readonly stream
					</div>
					<ul className='divide-y divide-[color-mix(in_oklch,var(--ice)_10%,transparent)]'>
						{entries.map(e => (
							<li
								key={e.ts}
								className='grid gap-2 px-4 py-3 sm:grid-cols-[10rem_6rem_1fr] sm:items-center sm:gap-4 sm:py-3.5'
							>
								<span className='tabular-nums [color:color-mix(in_oklch,var(--ice)_45%,transparent)]'>
									{e.ts.slice(0, 19).replace('T', ' ')}
								</span>
								<span className='[color:var(--blue)]'>{e.actor}</span>
								<span>
									<span className='[color:var(--ice)]'>{e.event}</span>
									<span className='ml-2 [color:color-mix(in_oklch,var(--ice)_55%,transparent)]'>
										{e.detail}
									</span>
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
