import { ArrowRight } from 'lucide-react'

/** Future Payload mapping: trialSignupForm. */
export function Trial() {
	return (
		<section
			id='trial'
			className='border-[var(--line)] border-t px-5 py-24 [background:color-mix(in_oklch,var(--sage)_10%,var(--parchment))] sm:px-8 sm:py-32'
		>
			<div className='on-reveal mx-auto max-w-xl rounded-xl border border-[var(--line)] p-6 [background:var(--parchment)] sm:p-10'>
				<h2 className='text-center font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em]'>
					Join the{' '}
					<span
						className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
						style={{ backgroundImage: 'var(--grad-text)' }}
					>
						research cohort
					</span>
				</h2>
				<p className='mx-auto mt-3 max-w-sm text-center text-sm [color:var(--mute)]'>
					Free for .edu domains. Track up to 200 pages and publish with
					reproducible methodology — no credit card required.
				</p>

				<form className='mt-8 space-y-4' action='#trial' method='get'>
					<div>
						<label
							htmlFor='nous-email'
							className='mb-1.5 block text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Institutional email
						</label>
						<input
							id='nous-email'
							name='email'
							type='email'
							required
							placeholder='you@university.edu'
							className='min-h-12 w-full rounded-md border border-[var(--line)] bg-transparent px-4 text-sm outline-none transition-colors [color:var(--ink)] focus:border-[color-mix(in_oklch,var(--olive)_40%,transparent)]'
						/>
					</div>
					<div>
						<label
							htmlFor='nous-lab'
							className='mb-1.5 block text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Lab / research site
						</label>
						<input
							id='nous-lab'
							name='domain'
							type='text'
							required
							placeholder='lab.orbit.research'
							className='min-h-12 w-full rounded-md border border-[var(--line)] bg-transparent px-4 text-sm outline-none transition-colors [color:var(--ink)] focus:border-[color-mix(in_oklch,var(--olive)_40%,transparent)]'
						/>
					</div>
					<div>
						<label
							htmlFor='nous-affiliation'
							className='mb-1.5 block text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Affiliation
						</label>
						<input
							id='nous-affiliation'
							name='affiliation'
							type='text'
							placeholder='Department of Sustainable AI'
							className='min-h-12 w-full rounded-md border border-[var(--line)] bg-transparent px-4 text-sm outline-none transition-colors [color:var(--ink)] focus:border-[color-mix(in_oklch,var(--olive)_40%,transparent)]'
						/>
					</div>
					<button
						type='submit'
						className='group flex min-h-12 w-full items-center justify-center gap-2 rounded-md font-[family-name:var(--font-display)] text-sm transition-colors [background:var(--olive)] [color:var(--parchment)] hover:[background:color-mix(in_oklch,var(--olive)_90%,var(--ink))]'
					>
						Request access
						<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
					</button>
				</form>

				<p className='mt-4 text-center text-[10px] [color:var(--mute)]'>
					By applying you agree to moonsio&rsquo;s research terms and data
					policy.
				</p>
			</div>
		</section>
	)
}
