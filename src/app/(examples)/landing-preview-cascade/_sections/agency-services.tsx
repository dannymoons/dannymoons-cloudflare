import { Camera, Megaphone, Package, Palette, Truck, Video } from 'lucide-react'

const services = [
	{
		icon: Palette,
		title: 'Brand & design production',
		desc: 'Print, packaging, and POS with substrate provenance and ink chemistry data.'
	},
	{
		icon: Video,
		title: 'Content & film',
		desc: 'Location carbon, crew travel, and equipment energy mapped per shoot day.'
	},
	{
		icon: Megaphone,
		title: 'Experiential & events',
		desc: 'Build materials, freight legs, and waste diversion rates for every activation.'
	},
	{
		icon: Camera,
		title: 'Digital & social',
		desc: 'Server energy, asset storage, and platform impression-level estimates.'
	},
	{
		icon: Package,
		title: 'Merchandise & fulfilment',
		desc: 'Supplier audits, labour standards, and last-mile logistics transparency.'
	},
	{
		icon: Truck,
		title: 'Media & OOH',
		desc: 'Inventory renewable energy mix and end-of-life material recovery paths.'
	}
]

/** Future Payload mapping: serviceGrid. */
export function AgencyServices() {
	return (
		<section
			id='agency-services'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ca-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
						Agency services
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Coverage across every production discipline.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Whether you&apos;re a full-service network or a specialist shop,
						Cascade maps the supply chain touchpoints your clients care about.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{services.map(s => (
						<article
							key={s.title}
							className='ca-reveal rounded-sm border border-[var(--line)] p-6 transition-colors hover:border-[color-mix(in_oklch,var(--pine)_35%,transparent)]'
						>
							<s.icon
								className='h-5 w-5 [color:var(--pine)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{s.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{s.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
