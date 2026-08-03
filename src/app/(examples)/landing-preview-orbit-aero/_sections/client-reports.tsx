import { Calendar, Download, Palette } from 'lucide-react'

const reports = [
	{
		client: 'Northwind Studio',
		brand: '#1E4FD9',
		period: 'Q4 2025',
		grade: 'A',
		co2: 0.28,
		pages: 24
	},
	{
		client: 'Harbor & Co.',
		brand: '#0D9488',
		period: 'Q4 2025',
		grade: 'B',
		co2: 0.41,
		pages: 38
	},
	{
		client: 'Lumen Retail',
		brand: '#7C3AED',
		period: 'Q4 2025',
		grade: 'C',
		co2: 0.52,
		pages: 112
	}
]

const features = [
	{
		icon: Palette,
		title: 'Client branding',
		desc: 'Logo, colours, and typography pulled from each client workspace — reports look native, not generic.'
	},
	{
		icon: Calendar,
		title: 'Scheduled delivery',
		desc: 'Monthly PDFs to client stakeholders on autopilot — strategists approve before send.'
	},
	{
		icon: Download,
		title: 'One-click export',
		desc: 'Download board-ready PDFs with executive summary, grade breakdown, and trend charts.'
	}
]

/** Future Payload mapping: clientReportPreviews. */
export function ClientReports() {
	return (
		<section id='reports' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div className='oa-reveal grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5'>
						{reports.map(r => (
							<article
								key={r.client}
								className='overflow-hidden rounded-2xl border border-[var(--line)] bg-white/70 shadow-[0_12px_40px_-12px_color-mix(in_oklch,var(--blue)_15%,transparent)] backdrop-blur-xl'
							>
								<div
									className='flex items-center justify-between px-4 py-3'
									style={{
										background: `linear-gradient(135deg, color-mix(in oklch, ${r.brand} 18%, white), transparent)`
									}}
								>
									<div className='flex items-center gap-2'>
										<span
											className='h-3 w-3 rounded-full'
											style={{ background: r.brand }}
										/>
										<span className='font-[family-name:var(--font-display)] font-semibold text-sm'>
											{r.client}
										</span>
									</div>
									<span className='text-[10px] uppercase tracking-widest [color:var(--mute)]'>
										PDF
									</span>
								</div>
								<div className='space-y-2 p-4'>
									<div className='flex items-center justify-between'>
										<span className='text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
											{r.period}
										</span>
										<span className='rounded-lg border border-[var(--line)] bg-white/60 px-2 py-0.5 font-[family-name:var(--font-display)] font-bold text-sm [color:var(--blue)]'>
											{r.grade}
										</span>
									</div>
									<div className='mt-3 space-y-2'>
										<div className='h-2 w-4/5 rounded-full [background:var(--line)]' />
										<div className='h-2 w-full rounded-full [background:var(--line)]' />
										<div className='h-2 w-3/5 rounded-full [background:var(--line)]' />
									</div>
									<div className='mt-4 grid grid-cols-3 gap-2 border-[var(--line)] border-t pt-3 text-center'>
										<div>
											<p className='font-[family-name:var(--font-display)] font-bold tabular-nums'>
												{r.co2.toFixed(2)}g
											</p>
											<p className='text-[9px] uppercase [color:var(--mute)]'>
												CO₂
											</p>
										</div>
										<div>
											<p className='font-[family-name:var(--font-display)] font-bold tabular-nums'>
												{r.pages}
											</p>
											<p className='text-[9px] uppercase [color:var(--mute)]'>
												Pages
											</p>
										</div>
										<div>
											<p className='font-[family-name:var(--font-display)] font-bold tabular-nums'>
												↓12%
											</p>
											<p className='text-[9px] uppercase [color:var(--mute)]'>
												Trend
											</p>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>

					<div>
						<span className='oa-reveal mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							Client reports
						</span>
						<h2 className='oa-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Branded PDF report previews
						</h2>
						<p className='oa-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							Export on-brand sustainability reports for every client —
							formatted for quarterly reviews, pitch decks, and stakeholder
							updates.
						</p>
						<div className='oa-reveal mt-8 space-y-4'>
							{features.map(f => (
								<div key={f.title} className='flex gap-4'>
									<span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--line)] bg-white/70 backdrop-blur-xl [color:var(--blue)]'>
										<f.icon className='h-4 w-4' />
									</span>
									<div>
										<h3 className='font-[family-name:var(--font-display)] font-semibold'>
											{f.title}
										</h3>
										<p className='mt-1 text-sm [color:var(--mute)]'>{f.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
