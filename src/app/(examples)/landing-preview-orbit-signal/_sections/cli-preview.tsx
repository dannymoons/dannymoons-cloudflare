/** Future Payload mapping: cliDemo (terminal output). */
export function CliPreview() {
	return (
		<section id='cli' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start'>
					<div>
						<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							CLI
						</span>
						<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Scan from your terminal
						</h2>
						<p className='osg-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							Install the orbit CLI and scan any domain in seconds. Pipe results
							into CI pipelines or export as JSON for your own dashboards.
						</p>
						<ul className='osg-reveal mt-6 space-y-2 font-[family-name:var(--font-body)] text-sm [color:var(--mute)]'>
							<li>
								<span className='[color:var(--lime)]'>→</span> npm i -g
								@moonsio/orbit-cli
							</li>
							<li>
								<span className='[color:var(--lime)]'>→</span> orbit auth login
							</li>
							<li>
								<span className='[color:var(--lime)]'>→</span> orbit scan
								&lt;domain&gt; --pages all
							</li>
						</ul>
					</div>

					<div className='osg-reveal overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
						<div className='flex items-center gap-2 border-[var(--line)] border-b px-4 py-2.5'>
							<span className='h-2 w-2 rounded-full [background:oklch(0.55_0.15_25)]' />
							<span className='h-2 w-2 rounded-full [background:oklch(0.7_0.12_85)]' />
							<span className='h-2 w-2 rounded-full [background:oklch(0.65_0.12_145)]' />
							<span className='ml-2 font-[family-name:var(--font-body)] text-[10px] uppercase tracking-widest [color:var(--mute)]'>
								zsh — orbit scan
							</span>
						</div>
						<pre className='overflow-x-auto p-4 font-[family-name:var(--font-body)] text-xs leading-relaxed sm:p-6 sm:text-sm'>
							<span className='[color:var(--lime)]'>signal@dev</span>
							<span className='[color:var(--text)]'> ~ % </span>
							<span className='[color:var(--text)]'>
								orbit scan acme.com --pages all
							</span>
							{'\n\n'}
							<span className='[color:var(--mute)]'>▸ Authenticating… ok</span>
							{'\n'}
							<span className='[color:var(--mute)]'>
								▸ Crawling acme.com (depth 3)…
							</span>
							{'\n'}
							<span className='[color:var(--mute)]'>
								▸ Found 847 pages · measuring carbon…
							</span>
							{'\n\n'}
							<span className='[color:var(--violet)]'>PATH</span>
							<span className='[color:var(--mute)]'> · CO₂ · ASSETS</span>
							{'\n'}
							<span className='[color:var(--text)]'>/ </span>
							<span className='[color:var(--mute)]'>· </span>
							<span className='[color:var(--lime)]'>0.38g </span>
							<span className='[color:var(--mute)]'>· 12 assets</span>
							{'\n'}
							<span className='[color:var(--text)]'>/pricing </span>
							<span className='[color:var(--mute)]'>· </span>
							<span className='[color:var(--lime)]'>0.41g </span>
							<span className='[color:var(--mute)]'>· 18 assets</span>
							{'\n'}
							<span className='[color:var(--text)]'>/docs/api </span>
							<span className='[color:var(--mute)]'>· </span>
							<span className='[color:var(--lime)]'>0.29g </span>
							<span className='[color:var(--mute)]'>· 8 assets</span>
							{'\n\n'}
							<span className='[color:var(--mute)]'>
								✓ Scan complete · avg{' '}
							</span>
							<span className='[color:var(--lime)]'>0.34g CO₂</span>
							<span className='[color:var(--mute)]'> / visit</span>
							{'\n'}
							<span className='[color:var(--lime)]'>signal@dev</span>
							<span className='[color:var(--text)]'> ~ % </span>
							<span className='osg-blink inline-block h-[1em] w-[0.55em] align-middle [background:var(--lime)]' />
						</pre>
					</div>
				</div>
			</div>
		</section>
	)
}
