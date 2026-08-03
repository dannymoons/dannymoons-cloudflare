/** Future Payload mapping: splitInvitation. */
export function FittingRoom() {
	return (
		<section className='border-[var(--line)] border-t'>
			<div className='mx-auto grid max-w-6xl lg:grid-cols-2'>
				<div className='ml-reveal flex flex-col justify-center px-5 py-20 sm:px-8 sm:py-28 lg:px-12'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						By appointment only
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] leading-[1.08]'>
						The private fitting room
					</h2>
					<p className='mt-6 max-w-sm leading-relaxed [color:var(--mute)]'>
						An hour reserved for you alone — mirrors draped in silk, champagne
						on ice, and a head seamstress who knows your silhouette by heart.
					</p>
					<ul className='mt-8 space-y-3 text-sm [color:var(--mute)]'>
						<li>· Complimentary alterations within the season</li>
						<li>· Archive pieces from past collections</li>
						<li>· Bespoke embroidery consultation</li>
					</ul>
					<a
						href='#appointment'
						className='mt-10 inline-flex min-h-12 w-fit items-center border border-[var(--gold)] px-8 text-xs uppercase tracking-[0.2em] transition-colors hover:[background:var(--gold)] hover:[color:var(--noir)]'
					>
						Request a fitting
					</a>
				</div>
				<div className='relative ml-reveal min-h-[320px] lg:min-h-full'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/maison-fitting/900/1100'
						alt='Private fitting room with natural light'
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div
						aria-hidden
						className='absolute inset-0 [background:linear-gradient(to_right,transparent_40%,var(--noir)_95%)] lg:[background:linear-gradient(to_left,var(--noir)_0%,transparent_35%)]'
					/>
				</div>
			</div>
		</section>
	)
}
