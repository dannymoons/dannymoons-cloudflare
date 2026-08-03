import { ArrowUpRight } from 'lucide-react'

/** Future Payload mapping: contactCta (cinematic). */
export function Contact() {
	return (
		<section
			id='contact'
			className='relative overflow-hidden px-5 py-32 sm:px-8 sm:py-48'
		>
			<div
				aria-hidden
				className='ob-glow pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-[120px]'
				style={{
					background:
						'radial-gradient(circle, oklch(0.82 0.16 70 / 0.4), transparent 65%)'
				}}
			/>
			<div className='ob-reveal text-center'>
				<span className='font-[family-name:var(--font-mono)] text-[var(--mute)] text-xs uppercase tracking-[0.3em]'>
					Let&rsquo;s build a world
				</span>
				<a
					href='mailto:hello@obsidian.studio'
					className='group mt-8 flex flex-wrap items-center justify-center gap-3 font-extrabold text-[clamp(2rem,9vw,7rem)] leading-[0.9] tracking-[-0.03em] transition-colors hover:[color:var(--amber)]'
				>
					hello@obsidian.studio
					<ArrowUpRight className='h-[0.9em] w-[0.9em]' />
				</a>
			</div>
		</section>
	)
}
