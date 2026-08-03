/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative flex min-h-dvh flex-col justify-end overflow-hidden px-5 pt-28 pb-16 sm:px-8 sm:pb-24'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 opacity-40'
			>
				{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
				<img
					src='https://picsum.photos/seed/maison-hero/1600/2000'
					alt=''
					className='h-full w-full object-cover'
				/>
				<div className='absolute inset-0 [background:linear-gradient(to_top,var(--noir)_0%,transparent_55%)]' />
			</div>
			<div className='relative mx-auto w-full max-w-6xl'>
				<p className='mb-6 text-xs uppercase tracking-[0.32em] [color:var(--gold)]'>
					Haute couture · Paris
				</p>
				<h1 className='font-[family-name:var(--font-display)] text-[clamp(3rem,12vw,8rem)] leading-[0.92] tracking-[-0.02em]'>
					MAISON
					<br />
					<span
						className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent italic [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
						style={{
							backgroundImage:
								'linear-gradient(120deg, var(--gold), var(--cream), var(--gold))'
						}}
					>
						LÉRINS
					</span>
				</h1>
				<div aria-hidden className='mt-8 h-px w-24 [background:var(--gold)]' />
				<p className='mt-8 max-w-sm text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
					Hand-finished silhouettes for those who measure time in fabric, not
					seasons.
				</p>
			</div>
		</section>
	)
}
