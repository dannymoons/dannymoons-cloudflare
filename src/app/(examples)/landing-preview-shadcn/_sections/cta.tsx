import { ArrowRight } from 'lucide-react'

/** Future Payload mapping: ctaCard. */
export function Cta() {
	return (
		<section id='cta' className='mx-auto max-w-6xl px-gutter py-section'>
			<div className='relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center sm:py-20'>
				<div
					aria-hidden
					className='pointer-events-none absolute inset-0 -z-10 opacity-50'
					style={{
						backgroundImage:
							'radial-gradient(var(--border) 1px, transparent 1px)',
						backgroundSize: '22px 22px',
						maskImage:
							'radial-gradient(circle at 50% 50%, black, transparent 70%)'
					}}
				/>
				<h2 className='mx-auto max-w-xl text-balance font-semibold text-3xl tracking-tight sm:text-4xl'>
					Ship faster, starting today
				</h2>
				<p className='mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed'>
					Join 12,000+ teams who track and ship their work on Trace.
				</p>
				<div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
					<a
						href='#cta'
						className='group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-dark'
					>
						Start for free
						<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
					</a>
					<a
						href='#cta'
						className='inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 font-medium transition-colors hover:bg-muted'
					>
						Talk to sales
					</a>
				</div>
			</div>
		</section>
	)
}
