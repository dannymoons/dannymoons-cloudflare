const brands = ['Vercel', 'Linear', 'Supabase', 'Raycast', 'Resend', 'Cal.com']

/** Future Payload mapping: logoStrip. */
export function Logos() {
	return (
		<section className='border-border border-b'>
			<div className='mx-auto max-w-6xl px-gutter py-10'>
				<p className='text-center text-muted-foreground text-sm'>
					Trusted by fast-moving teams
				</p>
				<div className='mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
					{brands.map(b => (
						<span
							key={b}
							className='font-semibold text-lg text-muted-foreground/80'
						>
							{b}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}
