import { ArrowUpRight } from 'lucide-react'

/** Future Payload mapping: contactCta. */
export function Contact() {
	return (
		<section
			id='contact'
			className='relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-36'
		>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 -z-10 opacity-30 [background:radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--violet)_50%,transparent),transparent_70%)]'
			/>
			<p className='lu-reveal text-xs uppercase tracking-[0.3em] [color:var(--mute)]'>
				Ready to build something unforgettable?
			</p>
			<h2 className='lu-reveal mt-6 font-[family-name:var(--font-display)] font-extrabold text-[clamp(2.5rem,9vw,6rem)] leading-[0.95] tracking-[-0.03em]'>
				Start a project
			</h2>
			<a
				href='mailto:hello@lumen.studio'
				className='lu-reveal [-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] mt-8 inline-flex items-center gap-3 bg-clip-text font-[family-name:var(--font-display)] font-bold text-[clamp(1.5rem,5vw,3rem)] text-transparent text-transparent tracking-tight underline-offset-8 [-webkit-text-fill-color:transparent] [background-size:200%_auto] hover:underline motion-safe:[animation:bg-clip-text'
				style={{
					backgroundImage:
						'linear-gradient(120deg, var(--violet), var(--cyan), var(--violet))'
				}}
			>
				hello@lumen.studio
				<ArrowUpRight className='h-[0.8em] w-[0.8em] [color:var(--cyan)]' />
			</a>
			<div className='lu-reveal mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm uppercase tracking-widest [color:var(--mute)]'>
				<span>London</span>
				<span>·</span>
				<span>Tokyo</span>
				<span>·</span>
				<span>Instagram</span>
				<span>·</span>
				<span>+44 20 0000 0000</span>
			</div>
		</section>
	)
}
