import { ArrowDown, Play } from 'lucide-react'

/** Future Payload mapping: heroCinematic. */
export function Hero() {
	return (
		<section className='relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pt-32 pb-12 sm:px-8'>
			<div
				aria-hidden
				className='ob-glow pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full blur-[120px]'
				style={{
					background:
						'radial-gradient(circle, oklch(0.82 0.16 70 / 0.5), transparent 65%)'
				}}
			/>

			<div className='ob-rise mb-auto pt-10'>
				<p className='max-w-xs font-[family-name:var(--font-mono)] text-[var(--mute)] text-xs uppercase leading-relaxed tracking-widest'>
					(A design & 3D studio crafting cinematic brand worlds since 2015)
				</p>
			</div>

			<h1 className='ob-rise font-extrabold text-[clamp(3rem,13vw,12rem)] leading-[0.82] tracking-[-0.04em]'>
				We build
				<br />
				worlds that <span className='italic [color:var(--amber)]'>move.</span>
			</h1>

			<div className='ob-rise mt-10 flex flex-col items-start gap-6 border-[var(--line)] border-t pt-8 sm:flex-row sm:items-center sm:justify-between'>
				<a
					href='#work'
					className='group inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest'
				>
					<span className='grid h-14 w-14 place-items-center rounded-full border border-[var(--line)] transition-colors group-hover:[background:var(--amber)] group-hover:[color:var(--ink)]'>
						<Play className='h-5 w-5 fill-current' />
					</span>
					Watch showreel
				</a>
				<div className='flex items-center gap-2 font-[family-name:var(--font-mono)] text-[var(--mute)] text-xs uppercase tracking-widest'>
					Scroll to explore <ArrowDown className='h-4 w-4' />
				</div>
			</div>
		</section>
	)
}
