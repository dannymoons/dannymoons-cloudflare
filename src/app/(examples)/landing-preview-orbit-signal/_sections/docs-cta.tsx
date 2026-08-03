import { ArrowRight, BookOpen, Key } from 'lucide-react'

/** Future Payload mapping: docsCta (docs link + API key form). */
export function DocsCta() {
	return (
		<section
			id='docs'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--panel)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-start'>
					<div>
						<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							Documentation
						</span>
						<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Read the docs
						</h2>
						<p className='osg-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							Quickstart guides, OpenAPI spec, CLI reference, and webhook
							verification examples — everything you need to ship carbon
							monitoring in an afternoon.
						</p>
						<a
							href='#api'
							className='osg-reveal group mt-8 inline-flex min-h-12 items-center gap-2 rounded border border-[var(--line)] px-5 font-medium text-sm transition-colors hover:border-[color-mix(in_oklch,var(--violet)_40%,var(--line))] hover:[color:var(--violet)]'
						>
							<BookOpen className='h-4 w-4' />
							Open documentation
							<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
						</a>
					</div>

					<div className='osg-reveal rounded border border-[var(--line)] p-6 [background:var(--void)] sm:p-8'>
						<div className='flex items-center gap-3'>
							<span className='grid h-10 w-10 place-items-center rounded border border-[color-mix(in_oklch,var(--lime)_35%,var(--line))] [background:color-mix(in_oklch,var(--lime)_8%,var(--void))] [color:var(--lime)]'>
								<Key className='h-5 w-5' />
							</span>
							<div>
								<h3 className='font-[family-name:var(--font-display)] font-semibold text-base'>
									Get your API key
								</h3>
								<p className='font-[family-name:var(--font-body)] text-xs [color:var(--mute)]'>
									Free tier · no credit card
								</p>
							</div>
						</div>

						<form className='mt-6 space-y-4' action='#' method='post'>
							<div>
								<label
									htmlFor='osg-email'
									className='mb-1.5 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'
								>
									Work email
								</label>
								<input
									id='osg-email'
									name='email'
									type='email'
									required
									autoComplete='email'
									placeholder='you@company.com'
									className='min-h-12 w-full rounded border border-[var(--line)] bg-transparent px-4 font-[family-name:var(--font-body)] text-sm [color:var(--text)] focus:border-[color-mix(in_oklch,var(--lime)_50%,var(--line))] focus:outline-none placeholder:[color:var(--mute)]'
								/>
							</div>
							<div>
								<label
									htmlFor='osg-project'
									className='mb-1.5 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'
								>
									Project name
								</label>
								<input
									id='osg-project'
									name='project'
									type='text'
									required
									placeholder='my-carbon-project'
									className='min-h-12 w-full rounded border border-[var(--line)] bg-transparent px-4 font-[family-name:var(--font-body)] text-sm [color:var(--text)] focus:border-[color-mix(in_oklch,var(--lime)_50%,var(--line))] focus:outline-none placeholder:[color:var(--mute)]'
								/>
							</div>
							<button
								type='submit'
								className='group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded border border-[color-mix(in_oklch,var(--lime)_50%,transparent)] font-medium text-sm transition-opacity [background:var(--lime)] [color:var(--void)] hover:opacity-90'
							>
								Generate API key
								<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
