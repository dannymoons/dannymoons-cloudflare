/** Future Payload mapping: reportPreview. */
export function ReportPreview() {
	return (
		<section id='report-preview' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal grid gap-10 lg:grid-cols-2 lg:items-center'>
					<div>
						<p className='text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
							Client reports
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
							White-label carbon reports your clients will actually read
						</h2>
						<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							Generate branded PDF and interactive reports with portfolio
							breakdowns, trend charts, and reduction recommendations — ready
							for client QBRs or RFP appendices.
						</p>
						<ul className='mt-6 space-y-3 text-sm'>
							{[
								'Custom logo and colour palette',
								'Executive summary + detailed appendix',
								'Embeddable badge for client websites',
								'Automated quarterly delivery'
							].map(item => (
								<li key={item} className='flex items-center gap-2'>
									<span className='h-1.5 w-1.5 rounded-full [background:var(--green)]' />
									{item}
								</li>
							))}
						</ul>
					</div>

					<div className='gb-reveal overflow-hidden rounded-xl border border-[var(--line)] shadow-lg'>
						<div className='border-[var(--line)] border-b px-5 py-3 [background:color-mix(in_oklch,var(--green)_8%,var(--white))]'>
							<p className='font-[family-name:var(--font-display)] font-semibold text-sm'>
								Q2 2026 Carbon Report — Acme Retail
							</p>
							<p className='text-xs [color:var(--mute)]'>
								Prepared by Your Agency via Greenbench
							</p>
						</div>
						<div className='grid grid-cols-2 gap-px [background:var(--line)]'>
							{(
								[
									['Total emissions', '42.8 tCO₂e'],
									['vs Q1', '−12%'],
									['Sites tracked', '8'],
									['Grade', 'B+']
								] as const
							).map(([label, val]) => (
								<div
									key={label}
									className='px-4 py-4 [background:var(--white)]'
								>
									<p className='text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
										{label}
									</p>
									<p className='mt-1 font-[family-name:var(--font-display)] font-bold'>
										{val}
									</p>
								</div>
							))}
						</div>
						<div className='p-5'>
							<p className='font-medium text-xs uppercase tracking-[0.14em] [color:var(--mute)]'>
								Top recommendation
							</p>
							<p className='mt-2 text-sm leading-relaxed'>
								Migrate 3 client sites to renewable hosting to reduce portfolio
								emissions by an estimated 8.2 tCO₂e annually.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
