import { Globe } from 'lucide-react'

const sites = [
	{
		domain: 'acme.com',
		pages: 847,
		avg: 0.35,
		status: 'On target',
		statusColor: 'var(--mint)'
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
		statusColor: 'var(--mint)'
	}
]

/** Future Payload mapping: multiSiteDashboard. */
export function MultiSite() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='grid items-start gap-10 lg:grid-cols-2'>
					<div>
						<span className='ob-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--orbit)]'>
							Multi-site
						</span>
						<h2 className='ob-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							All your websites, one orbit
						</h2>
						<p className='ob-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							Manage marketing sites, e-commerce stores, and documentation
							portals from a single dashboard. Compare portfolios, share
							reports, and set per-site carbon budgets.
						</p>
						<a
							href='#trial'
							className='ob-reveal mt-8 inline-flex min-h-12 items-center rounded-full border border-[color-mix(in_oklch,var(--orbit)_35%,var(--line))] px-6 font-[family-name:var(--font-display)] text-sm transition-colors hover:[background:var(--surface)]'
						>
							Add your first site
						</a>
					</div>

					<div className='ob-reveal space-y-3'>
						{sites.map((s, i) => (
							<article
								key={s.domain}
								className='flex items-center gap-4 rounded-xl border border-[color-mix(in_oklch,var(--orbit)_12%,var(--line))] p-4 transition-all [background:color-mix(in_oklch,var(--panel)_70%,transparent)] hover:border-[color-mix(in_oklch,var(--orbit)_30%,var(--line))] sm:p-5'
								style={{ animationDelay: `${i * 80}ms` }}
							>
								<span className='grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--line)] [background:var(--surface)]'>
									<Globe className='h-4 w-4 [color:var(--orbit)]' />
								</span>
								<div className='min-w-0 flex-1'>
									<p className='truncate font-[family-name:var(--font-display)] font-medium'>
										{s.domain}
									</p>
									<p className='mt-0.5 text-xs [color:var(--mute)]'>
										{s.pages} pages · {s.avg.toFixed(2)}g avg
									</p>
								</div>
								<span
									className='shrink-0 rounded-full border px-2.5 py-1 text-[10px]'
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
							className='flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[color-mix(in_oklch,var(--orbit)_25%,var(--line))] border-dashed text-xs transition-colors [color:var(--mute)] hover:border-[color-mix(in_oklch,var(--orbit)_40%,var(--line))] hover:[color:var(--orbit)]'
						>
							+ Connect another domain
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
