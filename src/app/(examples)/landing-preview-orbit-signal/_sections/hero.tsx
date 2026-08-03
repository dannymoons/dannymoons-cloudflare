import { ArrowRight } from 'lucide-react'

/** Future Payload mapping: heroTerminal (carbon API). */
export function Hero() {
	return (
		<section className='relative border-[var(--line)] border-b px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 max-w-3xl opacity-40'
				style={{
					background:
						'radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklch, var(--violet) 50%, transparent), transparent)'
				}}
			/>

			<div className='mx-auto max-w-5xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div>
						<p className='osg-reveal font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.28em] [color:var(--mute)]'>
							Developer carbon API · v1.0
						</p>

						<h1 className='osg-reveal mt-6 font-[family-name:var(--font-display)] font-semibold text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-[-0.02em]'>
							Carbon per page,{' '}
							<span
								className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
								style={{ backgroundImage: 'var(--grad-text)' }}
							>
								one API call away
							</span>
						</h1>

						<p className='osg-reveal mt-5 max-w-md text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							Orbit Signal measures g CO₂ per page view across your sites — REST
							API, CLI, webhooks, and real-time event streams for engineering
							teams.
						</p>

						<div className='osg-reveal mt-8 flex flex-col gap-3 sm:flex-row'>
							<a
								href='#docs'
								className='group inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[color-mix(in_oklch,var(--lime)_50%,transparent)] px-6 font-medium text-sm transition-opacity [background:var(--lime)] [color:var(--void)] hover:opacity-90'
							>
								Get API key
								<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
							</a>
							<a
								href='#api'
								className='inline-flex min-h-12 items-center justify-center rounded border border-[var(--line)] px-6 font-medium text-sm transition-colors hover:border-[color-mix(in_oklch,var(--violet)_40%,var(--line))] hover:[color:var(--violet)]'
							>
								Read API docs
							</a>
						</div>
					</div>

					<div className='osg-reveal overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
						<div className='flex items-center gap-2 border-[var(--line)] border-b px-4 py-2.5'>
							<span className='h-2 w-2 rounded-full [background:oklch(0.55_0.15_25)]' />
							<span className='h-2 w-2 rounded-full [background:oklch(0.7_0.12_85)]' />
							<span className='h-2 w-2 rounded-full [background:oklch(0.65_0.12_145)]' />
							<span className='ml-2 font-[family-name:var(--font-body)] text-[10px] uppercase tracking-widest [color:var(--mute)]'>
								orbit signal — api
							</span>
						</div>
						<pre className='overflow-x-auto p-4 font-[family-name:var(--font-body)] text-xs leading-relaxed sm:p-6 sm:text-sm'>
							<span className='[color:var(--mute)]'>$ </span>
							<span className='[color:var(--text)]'>
								curl -H &quot;Authorization: Bearer $KEY&quot; \
							</span>
							{'\n'}
							<span className='pl-4 [color:var(--text)]'>
								https://api.orbit.moonsio.com/v1/sites/acme/pages
							</span>
							{'\n\n'}
							<span className='[color:var(--violet)]'>{'{'}</span>
							{'\n'}
							<span className='pl-4 [color:var(--mute)]'>
								&quot;site&quot;:{' '}
							</span>
							<span className='[color:var(--lime)]'>&quot;acme.com&quot;</span>
							<span className='[color:var(--mute)]'>,</span>
							{'\n'}
							<span className='pl-4 [color:var(--mute)]'>
								&quot;avg_co2_grams&quot;:{' '}
							</span>
							<span className='[color:var(--text)]'>0.34</span>
							<span className='[color:var(--mute)]'>,</span>
							{'\n'}
							<span className='pl-4 [color:var(--mute)]'>
								&quot;pages_tracked&quot;:{' '}
							</span>
							<span className='[color:var(--text)]'>1,284</span>
							{'\n'}
							<span className='[color:var(--violet)]'>{'}'}</span>
							{'\n'}
							<span className='[color:var(--lime)]'>signal@api</span>
							<span className='[color:var(--text)]'> $ </span>
							<span className='osg-blink inline-block h-[1em] w-[0.55em] align-middle [background:var(--lime)]' />
						</pre>
					</div>
				</div>
			</div>
		</section>
	)
}
