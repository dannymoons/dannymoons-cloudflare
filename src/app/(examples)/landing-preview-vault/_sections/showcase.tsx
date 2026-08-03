import { Phone } from './phone'

const stats = [
	{ v: '€0', l: 'Monthly fee' },
	{ v: '30+', l: 'Currencies' },
	{ v: '<10s', l: 'Avg. transfer' }
]

/** Future Payload mapping: appShowcase (bento). */
export function Showcase() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto grid max-w-6xl gap-4 lg:grid-cols-3'>
				<div
					className='va-reveal relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--line)] p-8 lg:col-span-2'
					style={{
						background:
							'linear-gradient(135deg, color-mix(in oklch, var(--mint) 18%, var(--panel)), var(--panel))'
					}}
				>
					<div className='max-w-md'>
						<h3 className='font-[family-name:var(--font-display)] font-bold text-3xl tracking-tight'>
							Your whole financial life, on one screen.
						</h3>
						<p className='mt-3 text-[var(--mute)]'>
							Track balances, budgets and subscriptions in real time. Vault
							learns your habits and nudges you before you overspend.
						</p>
					</div>
					<div className='mt-8 flex gap-8'>
						{stats.map(s => (
							<div key={s.l}>
								<div className='font-[family-name:var(--font-display)] font-bold text-3xl [color:var(--mint)]'>
									{s.v}
								</div>
								<div className='text-[var(--mute)] text-xs uppercase tracking-wide'>
									{s.l}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='va-reveal flex items-center justify-center overflow-hidden rounded-3xl border border-[var(--line)] p-8 [background:var(--panel)]'>
					<Phone className='scale-90' />
				</div>
			</div>
		</section>
	)
}
