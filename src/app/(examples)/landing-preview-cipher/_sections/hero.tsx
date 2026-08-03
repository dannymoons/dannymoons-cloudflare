/** Future Payload mapping: heroTerminal (privacy messenger prompt). */
export function Hero() {
	return (
		<section className='relative px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-x-0 top-0 mx-auto h-48 max-w-2xl opacity-30'
				style={{
					background:
						'radial-gradient(ellipse 80% 60% at 50% 0%, var(--green), transparent)'
				}}
			/>

			<div className='mx-auto max-w-3xl'>
				<p className='cf-reveal font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.28em] [color:var(--mute)]'>
					Privacy-first messenger · v2.4.1
				</p>

				<h1 className='cf-reveal mt-6 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] leading-tight [color:var(--text)]'>
					Messages that never leave your device unreadable.
				</h1>

				<div className='cf-reveal mt-10 overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
					<div className='flex items-center gap-2 border-[var(--line)] border-b px-4 py-2.5'>
						<span className='h-2 w-2 rounded-full [background:var(--green)]' />
						<span className='h-2 w-2 rounded-full [background:var(--mute)]' />
						<span className='h-2 w-2 rounded-full [background:var(--mute)]' />
						<span className='ml-2 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--mute)]'>
							cipher — session init
						</span>
					</div>
					<pre className='overflow-x-auto p-4 font-[family-name:var(--font-display)] text-xs leading-relaxed sm:p-6 sm:text-sm'>
						<span className='[color:var(--mute)]'>$ </span>
						<span className='[color:var(--text)]'>cipher connect --e2e</span>
						{'\n'}
						<span className='[color:var(--mute)]'>{'> '}handshake: </span>
						<span className='[color:var(--green)]'>X25519 + Kyber-768</span>
						{'\n'}
						<span className='[color:var(--mute)]'>{'> '}identity: </span>
						<span className='[color:var(--text)]'>
							verified · no phone required
						</span>
						{'\n'}
						<span className='[color:var(--mute)]'>{'> '}metadata: </span>
						<span className='[color:var(--green)]'>sealed</span>
						{'\n'}
						<span className='[color:var(--mute)]'>{'> '}relay: </span>
						<span className='[color:var(--text)]'>zero-knowledge routing</span>
						{'\n'}
						<span className='[color:var(--mute)]'>{'> '}status: </span>
						<span className='[color:var(--green)]'>ready</span>
						{'\n'}
						<span className='[color:var(--green)]'>cipher@local</span>
						<span className='[color:var(--text)]'> $ </span>
						<span className='cf-blink inline-block h-[1em] w-[0.55em] align-middle [background:var(--green)]' />
					</pre>
				</div>

				<p className='cf-reveal mt-6 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
					End-to-end encrypted chat, voice, and files. No ads, no data mining,
					no phone number — just keys you control.
				</p>

				<div className='cf-reveal mt-8 flex flex-col gap-3 sm:flex-row'>
					<a
						href='#download'
						className='inline-flex min-h-12 items-center justify-center px-6 font-[family-name:var(--font-display)] text-xs uppercase tracking-widest transition-opacity [background:var(--green)] [color:var(--void)] hover:opacity-90'
					>
						Get Cipher
					</a>
					<a
						href='#encryption'
						className='inline-flex min-h-12 items-center justify-center border border-[var(--line)] px-6 font-[family-name:var(--font-display)] text-xs uppercase tracking-widest transition-colors hover:border-[color-mix(in_oklch,var(--green)_40%,var(--line))] hover:[color:var(--green)]'
					>
						Read the spec
					</a>
				</div>
			</div>
		</section>
	)
}
