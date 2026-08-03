import { Globe } from 'lucide-react'

const sites = [
	{
		domain: 'acme.com',
		pages: 847,
		avg: 0.35,
		status: 'On target',
		statusColor: 'var(--positive)'
	},
	{
		domain: 'shop.io',
		pages: 312,
		avg: 0.58,
		status: '2 over budget',
		statusColor: 'var(--warn)'
	},
	{
		domain: 'docs.dev',
		pages: 156,
		avg: 0.28,
		status: 'On target',
		statusColor: 'var(--positive)'
	}
]

/** Future Payload mapping: multiSiteDashboard. */
export function MultiSite() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='grid items-start gap-10 lg:grid-cols-2'>
					<div>
						<span className='ohd-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--olive)]'>
							Multi-site
						</span>
						<h2 className='ohd-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
							All your websites,{' '}
							<span className='italic [color:var(--olive)]'>one orbit</span>
						</h2>
						<p className='ohd-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							Manage marketing sites, e-commerce stores, and documentation
							portals from a single dashboard. Compare portfolios, share
							reports, and set per-site carbon budgets.
						</p>
						<a
							href='#trial'
							className='ohd-reveal mt-8 inline-flex min-h-12 cursor-pointer items-center border border-[color-mix(in_oklch,var(--olive)_45%,transparent)] px-6 font-[family-name:var(--font-body)] font-medium text-sm [background:color-mix(in_oklch,var(--olive)_24%,var(--surface))] [color:var(--ink)]'
						>
							Add your first site
						</a>
					</div>

					<div className='ohd-reveal space-y-3'>
						{sites.map((s, i) => (
							<article
								key={s.domain}
								className='flex items-center gap-4 border-2 border-[var(--stroke)] p-4 [background:var(--panel)] sm:p-5'
								style={{ animationDelay: `${i * 80}ms` }}
							>
								<span className='grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--line)] [background:var(--surface)]'>
									<Globe className='h-4 w-4 [color:var(--olive)]' />
								</span>
								<div className='min-w-0 flex-1'>
									<p className='truncate font-[family-name:var(--font-mono)] font-medium [color:var(--ink)]'>
										{s.domain}
									</p>
									<p className='mt-0.5 font-[family-name:var(--font-mono)] text-xs tabular-nums [color:var(--mute)]'>
										{s.pages} pages · {s.avg.toFixed(2)}g avg
									</p>
								</div>
								<span
									className='shrink-0 rounded-full border px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px]'
									style={{
										borderColor: `color-mix(in oklch, ${s.statusColor} 35%, transparent)`,
										color: s.statusColor
									}}
								>
									{s.status}
								</span>
							</article>
						))}

						<button
							type='button'
							className='flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 border-2 border-[var(--stroke)] border-dashed text-xs transition-colors [color:var(--mute)] hover:[background:var(--surface)] hover:[color:var(--ink)]'
						>
							+ Connect another domain
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
