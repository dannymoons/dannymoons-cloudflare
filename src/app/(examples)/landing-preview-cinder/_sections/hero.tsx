/** Future Payload mapping: heroSplit. */
export function Hero() {
	return (
		<section className='relative overflow-hidden'>
			<div className='grid min-h-[85dvh] grid-cols-1 lg:grid-cols-2'>
				<div className='flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:py-28'>
					<div className='ci-reveal mx-auto w-full max-w-xl lg:mx-0'>
						<p className='font-medium text-sm tracking-[0.2em] [color:var(--ember)]'>
							Artisan ceramics · Kyoto atelier
						</p>
						<h1 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2.25rem,7vw,4rem)] leading-[1.12] [color:var(--ash)]'>
							Clay shaped by{' '}
							<span
								className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
								style={{
									backgroundImage:
										'linear-gradient(120deg, var(--ember), var(--clay), var(--ash))'
								}}
							>
								fire and patience
							</span>
						</h1>
						<p className='mt-6 text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
							Wabi-sabi vessels thrown by hand, fired in our noborigama kiln.
							Imperfect edges, ash glazes, and the quiet beauty of things made
							slowly — not a restaurant, but a studio where clay becomes
							heirloom.
						</p>
						<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
							<a
								href='#collection'
								className='inline-flex min-h-12 items-center justify-center rounded-sm px-6 font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--paper)] hover:opacity-90'
							>
								View collection
							</a>
							<a
								href='#workshops'
								className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-6 font-medium text-sm transition-colors [color:var(--ash)] hover:border-[var(--ember)] hover:[color:var(--ember)]'
							>
								Join a workshop
							</a>
						</div>
					</div>
				</div>

				<div className='relative min-h-[50dvh] lg:min-h-0'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/cinder-hero/1200/1400'
						alt='Hand-thrown stoneware vessels drying on wooden shelves at Cinder studio'
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div
						aria-hidden
						className='absolute inset-0 lg:hidden'
						style={{
							background:
								'linear-gradient(to top, var(--paper) 0%, transparent 35%)'
						}}
					/>
					<div
						aria-hidden
						className='absolute inset-0 hidden lg:block'
						style={{
							background:
								'linear-gradient(to right, var(--paper) 0%, transparent 28%),' +
								'linear-gradient(to top, oklch(0.42 0.03 55 / 0.12) 0%, transparent 40%)'
						}}
					/>
					<div className='ci-reveal absolute right-5 bottom-6 left-5 rounded-sm border border-[var(--line)] p-4 backdrop-blur-sm [background:color-mix(in_oklch,var(--paper)_90%,transparent)] sm:right-8 sm:bottom-8 sm:left-auto sm:max-w-xs lg:right-10 lg:bottom-10'>
						<p className='font-[family-name:var(--font-display)] text-lg [color:var(--ash)]'>
							Next firing · 12 March
						</p>
						<p className='mt-1 text-sm [color:var(--mute)]'>
							Noborigama climb to 1280°C over 18 hours. Ash settles on every
							rim.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
