import { Apple, Play, Star } from 'lucide-react'
import { Phone } from './phone'

/** Future Payload mapping: heroApp. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 pt-16 pb-20 sm:px-8 sm:pt-24'>
			<div
				aria-hidden
				className='pointer-events-none absolute top-0 right-0 -z-10 h-[60vh] w-[60vh] rounded-full opacity-40 blur-[120px]'
				style={{
					background: 'radial-gradient(circle, var(--violet), transparent 65%)'
				}}
			/>
			<div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2'>
				<div>
					<span className='va-rise inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 text-xs [color:var(--mute)]'>
						<span className='h-1.5 w-1.5 rounded-full [background:var(--mint)]' />
						Now with instant savings pots
					</span>
					<h1 className='va-rise mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] tracking-[-0.03em]'>
						Money that moves with you.
					</h1>
					<p className='va-rise mt-6 max-w-md text-[var(--mute)] text-lg leading-relaxed'>
						Spend, save and send in 30+ currencies — all from one account that
						lives in your pocket. No hidden fees, no branches, no nonsense.
					</p>
					<div className='va-rise mt-8 flex flex-wrap gap-3'>
						<a
							href='#download'
							className='inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-[oklch(0.16_0.03_265)] [background:var(--text)]'
						>
							<Apple className='h-5 w-5' /> App Store
						</a>
						<a
							href='#download'
							className='inline-flex items-center gap-2 rounded-xl border border-[var(--line)] px-5 py-3 font-semibold'
						>
							<Play className='h-5 w-5' /> Google Play
						</a>
					</div>
					<div className='va-rise mt-6 flex items-center gap-3 text-sm [color:var(--mute)]'>
						<span className='flex gap-0.5 [color:var(--mint)]'>
							{[0, 1, 2, 3, 4].map(s => (
								<Star key={s} className='h-4 w-4 fill-current' />
							))}
						</span>
						4.9 · 200k+ ratings
					</div>
				</div>

				<div className='relative flex justify-center lg:justify-end'>
					<Phone className='va-float' />
				</div>
			</div>
		</section>
	)
}
