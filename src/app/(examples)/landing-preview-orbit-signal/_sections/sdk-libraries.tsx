/** Future Payload mapping: sdkLibraries (language badges). */
const sdks = [
	{
		name: 'Node.js',
		package: '@moonsio/orbit-node',
		install: 'npm i @moonsio/orbit-node',
		color: 'var(--lime)'
	},
	{
		name: 'Python',
		package: 'moonsio-orbit',
		install: 'pip install moonsio-orbit',
		color: 'var(--violet)'
	},
	{
		name: 'Go',
		package: 'github.com/moonsio/orbit-go',
		install: 'go get github.com/moonsio/orbit-go',
		color: 'oklch(0.72 0.14 200)'
	},
	{
		name: 'Ruby',
		package: 'orbit-signal',
		install: 'gem install orbit-signal',
		color: 'oklch(0.65 0.18 25)'
	}
] as const

/** Future Payload mapping: sdkLibraries (language badges). */
export function SdkLibraries() {
	return (
		<section
			id='sdks'
			className='border-[var(--line)] border-y px-5 py-20 [background:var(--panel)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-10 text-center'>
					<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						SDKs
					</span>
					<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Official client libraries
					</h2>
					<p className='osg-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Type-safe wrappers for the REST API. Same auth, pagination, and
						webhook helpers across all languages.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{sdks.map(sdk => (
						<article
							key={sdk.name}
							className='osg-reveal rounded border border-[var(--line)] p-5 transition-colors [background:var(--void)] hover:border-[color-mix(in_oklch,var(--lime)_25%,var(--line))]'
						>
							<div className='flex items-center gap-3'>
								<span
									className='grid h-10 w-10 place-items-center rounded border font-[family-name:var(--font-display)] font-semibold text-xs'
									style={{
										color: sdk.color,
										borderColor: `color-mix(in oklch, ${sdk.color} 35%, transparent)`,
										background: `color-mix(in oklch, ${sdk.color} 8%, var(--void))`
									}}
								>
									{sdk.name.slice(0, 2).toUpperCase()}
								</span>
								<div>
									<h3 className='font-[family-name:var(--font-display)] font-semibold text-base'>
										{sdk.name}
									</h3>
									<p className='font-[family-name:var(--font-body)] text-xs [color:var(--mute)]'>
										{sdk.package}
									</p>
								</div>
							</div>
							<code className='mt-4 block overflow-x-auto rounded border border-[var(--line)] px-3 py-2 font-[family-name:var(--font-body)] text-[11px] [background:var(--panel)] [color:var(--lime)]'>
								{sdk.install}
							</code>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
