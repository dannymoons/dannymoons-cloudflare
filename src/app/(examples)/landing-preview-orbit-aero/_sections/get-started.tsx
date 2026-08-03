import { ArrowRight } from 'lucide-react'

/** Future Payload mapping: agencyOnboardingForm. */
export function GetStarted() {
	return (
		<section
			id='get-started'
			className='border-[var(--line)] border-t px-5 py-24 sm:px-8 sm:py-32'
		>
			<div className='oa-reveal mx-auto max-w-xl rounded-2xl border border-[var(--line)] bg-white/70 p-6 shadow-[0_24px_64px_-24px_color-mix(in_oklch,var(--blue)_22%,transparent)] backdrop-blur-xl sm:p-10'>
				<h2 className='text-center font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em]'>
					Onboard your{' '}
					<span
						className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
						style={{ backgroundImage: 'var(--grad-text)' }}
					>
						agency workspace
					</span>
				</h2>
				<p className='mx-auto mt-3 max-w-sm text-center text-sm [color:var(--mute)]'>
					14-day free trial on Studio. Import your first five client sites and
					generate branded reports — no credit card required.
				</p>

				<form className='mt-8 space-y-4' action='#get-started' method='get'>
					<div>
						<label
							htmlFor='aero-agency'
							className='mb-1.5 block text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Agency name
						</label>
						<input
							id='aero-agency'
							name='agency'
							type='text'
							required
							placeholder='Studio Meridian'
							className='min-h-12 w-full rounded-xl border border-[var(--line)] bg-white/60 px-4 text-sm outline-none backdrop-blur-xl transition-colors [color:var(--ink)] focus:border-[color-mix(in_oklch,var(--blue)_40%,transparent)]'
						/>
					</div>
					<div>
						<label
							htmlFor='aero-email'
							className='mb-1.5 block text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Work email
						</label>
						<input
							id='aero-email'
							name='email'
							type='email'
							required
							placeholder='you@youragency.com'
							className='min-h-12 w-full rounded-xl border border-[var(--line)] bg-white/60 px-4 text-sm outline-none backdrop-blur-xl transition-colors [color:var(--ink)] focus:border-[color-mix(in_oklch,var(--blue)_40%,transparent)]'
						/>
					</div>
					<div className='grid gap-4 sm:grid-cols-2'>
						<div>
							<label
								htmlFor='aero-sites'
								className='mb-1.5 block text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'
							>
								Client sites
							</label>
							<select
								id='aero-sites'
								name='sites'
								className='min-h-12 w-full rounded-xl border border-[var(--line)] bg-white/60 px-4 text-sm outline-none backdrop-blur-xl [color:var(--ink)]'
								defaultValue='6-15'
							>
								<option value='1-5'>1 – 5</option>
								<option value='6-15'>6 – 15</option>
								<option value='16-50'>16 – 50</option>
								<option value='50+'>50+</option>
							</select>
						</div>
						<div>
							<label
								htmlFor='aero-team'
								className='mb-1.5 block text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'
							>
								Team size
							</label>
							<select
								id='aero-team'
								name='team'
								className='min-h-12 w-full rounded-xl border border-[var(--line)] bg-white/60 px-4 text-sm outline-none backdrop-blur-xl [color:var(--ink)]'
								defaultValue='2-5'
							>
								<option value='solo'>Just me</option>
								<option value='2-5'>2 – 5</option>
								<option value='6-15'>6 – 15</option>
								<option value='15+'>15+</option>
							</select>
						</div>
					</div>
					<div>
						<label
							htmlFor='aero-domain'
							className='mb-1.5 block text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							First client domain
						</label>
						<input
							id='aero-domain'
							name='domain'
							type='text'
							required
							placeholder='client.example.com'
							className='min-h-12 w-full rounded-xl border border-[var(--line)] bg-white/60 px-4 text-sm outline-none backdrop-blur-xl transition-colors [color:var(--ink)] focus:border-[color-mix(in_oklch,var(--blue)_40%,transparent)]'
						/>
					</div>
					<button
						type='submit'
						className='group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl font-[family-name:var(--font-display)] font-semibold text-sm transition-colors [background:var(--blue)] [color:var(--cloud)] hover:[background:color-mix(in_oklch,var(--blue)_88%,var(--ink))]'
					>
						Create workspace
						<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
					</button>
				</form>

				<p className='mt-4 text-center text-[10px] [color:var(--mute)]'>
					By signing up you agree to moonsio&rsquo;s terms and privacy policy.
				</p>
			</div>
		</section>
	)
}
