import { Cloud, Database, FileSpreadsheet, Globe } from 'lucide-react'

const sources = [
	{
		icon: FileSpreadsheet,
		name: 'ERP & finance',
		systems: 'SAP, Oracle, NetSuite, Workday',
		desc: 'Vendor spend and PO data auto-mapped to emission factors by category.'
	},
	{
		icon: Globe,
		name: 'Ad platforms',
		systems: 'Google, Meta, DV360, The Trade Desk',
		desc: 'Impression-level energy estimates with publisher renewable-energy overlays.'
	},
	{
		icon: Database,
		name: 'Martech stack',
		systems: 'Salesforce, HubSpot, Adobe, Braze',
		desc: 'SaaS usage and email volume converted to scope 3 digital services.'
	},
	{
		icon: Cloud,
		name: 'Agency portals',
		systems: 'Custom API, SFTP, manual upload',
		desc: 'Structured intake for production bids, travel, and subcontractor emissions.'
	}
]

/** Future Payload mapping: dataSourceGrid. */
export function DataSources() {
	return (
		<section
			id='data-sources'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Data sources
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Connect what you already run on.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Pre-built connectors and a flexible ingestion API mean your team
						spends less time wrangling spreadsheets and more time reducing
						emissions.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2'>
					{sources.map(s => (
						<article
							key={s.name}
							className='me-reveal rounded-sm border border-[var(--line)] p-6'
						>
							<s.icon
								className='h-5 w-5 [color:var(--blue)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{s.name}
							</h3>
							<p className='mt-1 text-xs [color:var(--blue)]'>{s.systems}</p>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								{s.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
