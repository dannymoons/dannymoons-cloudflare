import { SectionHeading } from './section-heading'

const faqs = [
	{
		q: 'Do you take on residential projects?',
		a: 'Yes — private houses and apartments are at the heart of our practice, alongside cultural and adaptive-reuse work.'
	},
	{
		q: 'Where do you work?',
		a: 'From our studios in Lisbon and Utrecht, on projects across Europe and occasionally further afield.'
	},
	{
		q: 'How many projects do you take per year?',
		a: 'A deliberately small number — usually six to eight — so each receives our full attention from sketch to site.'
	},
	{
		q: 'Do you offer interior-only commissions?',
		a: 'We do, often as a continuation of the architecture, but also as standalone interior and joinery work.'
	}
]

/** Future Payload mapping: faqList. */
export function Faq() {
	return (
		<section className='px-6 pt-24 sm:px-10 sm:pt-32'>
			<SectionHeading eyebrow='Questions' title='Before you write.' />
			<div className='mx-auto max-w-3xl'>
				{faqs.map(f => (
					<details
						key={f.q}
						className='mrd-reveal group border-[var(--line)] border-t py-6 last:border-b'
					>
						<summary className='flex cursor-pointer list-none items-center justify-between gap-6 font-[family-name:var(--font-display)] text-xl tracking-tight'>
							{f.q}
							<span className='text-2xl text-[var(--clay)] transition-transform duration-300 group-open:rotate-45'>
								+
							</span>
						</summary>
						<p className='mt-4 max-w-2xl text-[var(--ink-soft)] leading-relaxed'>
							{f.a}
						</p>
					</details>
				))}
			</div>
		</section>
	)
}
