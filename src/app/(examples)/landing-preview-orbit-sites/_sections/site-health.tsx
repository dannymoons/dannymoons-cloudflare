import { Activity, CheckCircle, Clock, XCircle } from 'lucide-react'

/** Future Payload mapping: siteHealth (block). */
const CHECKS = [
	{ label: 'Tracking script installed', ok: true, detail: 'Last ping 2m ago' },
	{ label: 'Sitemap crawled', ok: true, detail: '248 URLs indexed' },
	{ label: 'SSL certificate', ok: true, detail: 'Valid until Mar 2027' },
	{
		label: 'Budget alerts configured',
		ok: false,
		detail: 'shop.acme.com missing'
	},
	{ label: 'CDN carbon routing', ok: true, detail: 'Green PoP enabled' }
]

export function SiteHealth() {
	const score = Math.round(
		(CHECKS.filter(c => c.ok).length / CHECKS.length) * 100
	)

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<div className='mb-4 flex items-center justify-between'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Site health
				</h2>
				<div className='flex items-center gap-2'>
					<Activity className='h-4 w-4 [color:var(--mint)]' />
					<span className='font-[family-name:var(--font-display)] font-bold text-lg'>
						{score}%
					</span>
				</div>
			</div>
			<ul className='space-y-2'>
				{CHECKS.map(c => (
					<li
						key={c.label}
						className='flex items-start gap-2.5 rounded-lg border border-[var(--line)] p-2.5 [background:var(--surface)]'
					>
						{c.ok ? (
							<CheckCircle
								className='mt-0.5 h-4 w-4 shrink-0 [color:var(--mint)]'
								aria-hidden
							/>
						) : (
							<XCircle
								className='mt-0.5 h-4 w-4 shrink-0 [color:var(--orbit)]'
								aria-hidden
							/>
						)}
						<div className='min-w-0 flex-1'>
							<p className='font-medium text-xs'>{c.label}</p>
							<p className='text-[11px] [color:var(--mute)]'>{c.detail}</p>
						</div>
						{!c.ok ? (
							<Clock className='h-3.5 w-3.5 [color:var(--mute)]' aria-hidden />
						) : null}
					</li>
				))}
			</ul>
		</section>
	)
}
