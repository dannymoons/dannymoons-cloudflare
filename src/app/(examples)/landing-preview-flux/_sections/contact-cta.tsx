import { ArrowUpRight } from 'lucide-react'

/** Future Payload mapping: contactCta (expressive). */
export function ContactCta() {
	return (
		<section
			id='contact'
			className='border-[var(--ink)] border-t-2 px-5 py-24 text-center [background:var(--magenta)] [color:var(--ink)] sm:px-8 sm:py-36'
		>
			<p className='font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest'>
				Got something wild in mind?
			</p>
			<a
				href='mailto:hello@flux.studio'
				className='mt-6 inline-flex items-center gap-3 font-extrabold text-[clamp(2.25rem,9vw,7rem)] leading-[0.9] tracking-[-0.03em] underline-offset-8 hover:underline'
			>
				hello@flux.studio
				<ArrowUpRight className='h-[1em] w-[1em]' />
			</a>
			<div className='mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-[family-name:var(--font-mono)] text-sm uppercase'>
				<span>Amsterdam</span>
				<span>·</span>
				<span>Instagram</span>
				<span>·</span>
				<span>Behance</span>
				<span>·</span>
				<span>+31 6 00 00 00 00</span>
			</div>
		</section>
	)
}
