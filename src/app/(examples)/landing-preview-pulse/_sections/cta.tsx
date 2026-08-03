import { Bolt } from 'lucide-react'

/** Future Payload mapping: ctaPoster. */
export function Cta() {
	return (
		<section
			id='get'
			className='relative overflow-hidden border-[var(--magenta)] border-y-4 px-5 py-20 text-center [background:var(--magenta)] [color:var(--paper)] sm:px-8'
		>
			<h2 className='vc-pop font-[family-name:var(--font-display)] text-[clamp(3rem,12vw,9rem)] leading-[0.85]'>
				GET <span className='[color:var(--acid)]'>CHARGED.</span>
			</h2>
			<a
				href='#get'
				className='vc-pop mt-8 inline-flex items-center gap-2 border-4 border-[var(--void)] px-8 py-4 font-[family-name:var(--font-display)] text-3xl transition-transform duration-200 [background:var(--void)] [color:var(--acid)] hover:rotate-1 hover:scale-105'
			>
				SHOP THE PACK <Bolt className='h-7 w-7' />
			</a>
		</section>
	)
}
