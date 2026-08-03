import { ArrowRight } from 'lucide-react'

/** Future Payload mapping: trialCtaForm. */
export function TrialCta() {
	return (
		<section id='trial' className='px-5 py-24 sm:px-8 sm:py-32'>
			<div className='ob-reveal mx-auto max-w-xl rounded-3xl border border-[color-mix(in_oklch,var(--orbit)_25%,var(--line))] p-6 shadow-[0_0_60px_-20px_var(--orbit)] [background:color-mix(in_oklch,var(--panel)_85%,transparent)] sm:p-10'>
				<h2 className='text-center font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em]'>
					Start your{' '}
					<span
						className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
						style={{
							backgroundImage:
								'linear-gradient(120deg, var(--orbit), var(--mint))'
						}}
					>
						free trial
					</span>
				</h2>
				<p className='mx-auto mt-3 max-w-sm text-center text-sm [color:var(--mute)]'>
					Track up to 50 pages free for 14 days. No credit card required.
				</p>

				<form className='mt-8 space-y-4' action='#trial' method='get'>
					<div>
						<label
							htmlFor='orbit-email'
							className='mb-1.5 block text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Work email
						</label>
						<input
							id='orbit-email'
							name='email'
							type='email'
							required
							placeholder='you@company.com'
							className='min-h-12 w-full rounded-xl border border-[var(--line)] bg-transparent px-4 text-sm outline-none transition-colors [color:var(--text)] focus:border-[color-mix(in_oklch,var(--orbit)_40%,transparent)]'
						/>
					</div>
					<div>
						<label
							htmlFor='orbit-domain'
							className='mb-1.5 block text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Primary domain
						</label>
						<input
							id='orbit-domain'
							name='domain'
							type='text'
							required
							placeholder='acme.com'
							className='min-h-12 w-full rounded-xl border border-[var(--line)] bg-transparent px-4 text-sm outline-none transition-colors [color:var(--text)] focus:border-[color-mix(in_oklch,var(--orbit)_40%,transparent)]'
						/>
					</div>
					<button
						type='submit'
						className='group flex min-h-12 w-full items-center justify-center gap-2 rounded-full font-[family-name:var(--font-display)] font-medium text-sm shadow-[0_0_32px_-10px_var(--orbit)] transition-shadow [background:linear-gradient(120deg,var(--orbit),var(--mint))] [color:var(--void)] hover:shadow-[0_0_40px_-8px_var(--orbit)]'
					>
						Start free trial
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
