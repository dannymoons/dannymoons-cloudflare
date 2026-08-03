import { ArrowDown, Play } from 'lucide-react'

/** Future Payload mapping: heroCinematic. */
export function Hero() {
	return (
		<section className='relative flex min-h-[92dvh] flex-col justify-end overflow-hidden px-5 pt-28 pb-14 sm:px-8'>
			<div
				aria-hidden
				className='pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-[100px]'
				style={{
					background:
						'radial-gradient(circle, color-mix(in oklch, var(--violet) 45%, transparent), transparent 70%)'
				}}
			/>

			<p className='lu-reveal mb-8 max-w-sm text-sm leading-relaxed [color:var(--mute)]'>
				Iridescent experiential brand studio — we fuse spatial design, XR and
				narrative into worlds audiences step inside.
			</p>

			<h1 className='lu-reveal font-[family-name:var(--font-display)] font-extrabold text-[clamp(2.75rem,11vw,9rem)] leading-[0.9] tracking-[-0.04em]'>
				We build worlds
				<br />
				<span
					className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
					style={{
						backgroundImage:
							'linear-gradient(120deg, var(--violet), var(--cyan), var(--violet))'
					}}
				>
					people walk into.
				</span>
			</h1>

			<div className='lu-reveal mt-12 flex flex-col items-start gap-6 border-[var(--line)] border-t pt-8 sm:flex-row sm:items-center sm:justify-between'>
				<a
					href='#work'
					className='group inline-flex items-center gap-3 text-sm uppercase tracking-widest'
				>
					<span className='grid h-14 w-14 place-items-center rounded-full border border-[var(--line)] transition-all duration-300 [background:linear-gradient(135deg,var(--violet),var(--cyan))] [color:var(--void)] group-hover:shadow-[0_0_40px_-8px_var(--violet)]'>
						<Play className='h-5 w-5 fill-current' />
					</span>
					Watch showreel
				</a>
				<div className='flex items-center gap-2 text-xs uppercase tracking-widest [color:var(--mute)]'>
					Scroll to explore <ArrowDown className='h-4 w-4' />
				</div>
			</div>
		</section>
	)
}
