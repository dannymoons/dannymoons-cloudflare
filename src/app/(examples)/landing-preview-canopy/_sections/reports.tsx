import { Download } from 'lucide-react'

/** Future Payload mapping: resourceCta. */
export function Reports() {
	return (
		<section className='px-5 py-20 sm:px-8'>
			<div className='cp-reveal mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl p-8 text-[color:var(--sand)] [background:var(--bark)] sm:flex-row sm:items-center sm:p-10'>
				<div>
					<p className='text-xs uppercase tracking-[0.24em] [color:var(--sun)]'>
						Annual report
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)]'>
						2026 Regeneration Impact Report
					</h2>
					<p className='mt-3 max-w-md text-sm leading-relaxed opacity-90 sm:text-base'>
						Verified data on soil carbon sequestration, material recovery rates,
						and biodiversity co-benefits across our partner network — with
						methodology notes for assurance teams.
					</p>
				</div>
				<a
					href='#contact'
					className='inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full px-6 [background:var(--sun)] [color:var(--bark)]'
				>
					<Download className='h-5 w-5' />
					Download report
				</a>
			</div>
		</section>
	)
}
