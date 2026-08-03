import { ArrowRight } from 'lucide-react'

/** Future Payload mapping: trialCtaForm. */
export function TrialCta() {
	return (
		<section id='trial' className='px-5 py-24 sm:px-8 sm:py-32'>
			<div className='oh-reveal mx-auto max-w-xl border-2 border-[var(--ink)] p-6 shadow-[8px_8px_0_oklch(0.22_0.03_145)] [background:color-mix(in_oklch,var(--sage)_8%,var(--panel))] sm:p-10'>
				<h2 className='text-center font-[family-name:var(--font-display)] font-semibold text-[clamp(1.9rem,4.5vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
					Start your{' '}
					<span className='italic [color:var(--olive)]'>free trial</span>
				</h2>
				<p className='mx-auto mt-3 max-w-sm text-center text-sm [color:var(--mute)]'>
					Track up to 50 pages free for 14 days. No credit card required.
				</p>

				<form className='mt-8 space-y-4' action='#trial' method='get'>
					<div>
						<label
							htmlFor='horizon-email'
							className='mb-1.5 block font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Work email
						</label>
						<input
							id='horizon-email'
							name='email'
							type='email'
							autoComplete='email'
							required
							placeholder='you@company.com'
							className='min-h-12 w-full border border-[var(--ink)] bg-transparent px-4 text-sm outline-none transition-colors [color:var(--ink)] focus:border-2 focus:border-[var(--olive)]'
						/>
					</div>
					<div>
						<label
							htmlFor='horizon-domain'
							className='mb-1.5 block font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Primary domain
						</label>
						<input
							id='horizon-domain'
							name='domain'
							type='text'
							autoComplete='url'
							required
							placeholder='acme.com'
							className='min-h-12 w-full border border-[var(--ink)] bg-transparent px-4 text-sm outline-none transition-colors [color:var(--ink)] focus:border-2 focus:border-[var(--olive)]'
						/>
					</div>
					<button
						type='submit'
						className='group flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 border-2 border-[var(--ink)] font-[family-name:var(--font-body)] font-semibold text-sm [background:var(--ink)] [color:var(--parchment)]'
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
