import { Bluetooth, Mic, Sparkles, Waves } from 'lucide-react'

const items = [
	{
		icon: Waves,
		t: 'Adaptive ANC',
		d: 'Reads your environment 200× a second and adjusts.'
	},
	{
		icon: Mic,
		t: 'Voice clarity',
		d: 'Six mics isolate your voice from the world.'
	},
	{
		icon: Bluetooth,
		t: 'Multipoint',
		d: 'Connected to your laptop and phone at once.'
	},
	{
		icon: Sparkles,
		t: 'On-device AI',
		d: 'Live translation and transcription, privately.'
	}
]

/** Future Payload mapping: highlightGrid. */
export function Highlights() {
	return (
		<section className='mx-auto max-w-5xl px-6 py-24 sm:py-32'>
			<div className='grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2'>
				{items.map(it => {
					const Icon = it.icon
					return (
						<div key={it.t} className='apl-reveal flex gap-5'>
							<span className='grid h-12 w-12 shrink-0 place-items-center rounded-2xl [background:color-mix(in_oklch,var(--accent)_14%,transparent)] [color:var(--accent)]'>
								<Icon className='h-6 w-6' />
							</span>
							<div>
								<h3 className='font-semibold text-xl tracking-tight'>{it.t}</h3>
								<p className='mt-1.5 text-[var(--mute)] leading-relaxed'>
									{it.d}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
