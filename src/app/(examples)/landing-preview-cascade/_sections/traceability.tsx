import { FileCheck, MapPin, QrCode, Search } from 'lucide-react'

const capabilities = [
	{
		icon: QrCode,
		title: 'Batch-level QR codes',
		desc: 'Every production run gets a scannable trace ID linking to material certs and vendor audits.'
	},
	{
		icon: MapPin,
		title: 'Geographic provenance',
		desc: 'Map raw material origins, freight routes, and processing facilities on interactive timelines.'
	},
	{
		icon: FileCheck,
		title: 'Document vault',
		desc: 'FSC, GRS, SA8000, and custom client requirements stored with expiry alerts.'
	},
	{
		icon: Search,
		title: 'Instant lookup',
		desc: 'Search any SKU, job number, or vendor to pull full chain-of-custody in seconds.'
	}
]

/** Future Payload mapping: traceabilityFeatures. */
export function Traceability() {
	return (
		<section id='traceability' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ca-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
						Traceability
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						From forest to final asset — documented.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						When a client asks &ldquo;where did this come from?&rdquo; you
						answer with evidence, not estimates.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2'>
					{capabilities.map(c => (
						<article
							key={c.title}
							className='ca-reveal rounded-sm border border-[var(--line)] p-6'
						>
							<c.icon
								className='h-5 w-5 [color:var(--pine)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{c.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{c.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
