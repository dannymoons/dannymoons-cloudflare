/** Future Payload mapping: developerApi (SDK docs). */
export function Developers() {
	return (
		<section id='developers' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>
					<div className='cf-reveal'>
						<span className='font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
							Developers
						</span>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
							Build on Cipher
						</h2>
						<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							REST and WebSocket APIs for bots, bridges, and self-hosted relays.
							All endpoints require client-side encryption — the server never
							sees plaintext.
						</p>
						<ul className='mt-6 space-y-2 text-sm [color:var(--mute)]'>
							<li>· TypeScript & Rust SDKs (MIT)</li>
							<li>· Webhook events for delivery receipts</li>
							<li>· Rate limit: 120 req/min per key</li>
						</ul>
						<a
							href='#download'
							className='mt-8 inline-flex min-h-12 items-center border border-[color-mix(in_oklch,var(--green)_40%,var(--line))] px-5 font-[family-name:var(--font-display)] text-xs uppercase tracking-widest transition-colors [color:var(--green)] hover:[background:color-mix(in_oklch,var(--green)_8%,transparent)]'
						>
							Get API key
						</a>
					</div>

					<div className='cf-reveal overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
						<div className='border-[var(--line)] border-b px-4 py-2 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--mute)]'>
							example.ts
						</div>
						<pre className='overflow-x-auto p-4 font-[family-name:var(--font-display)] text-[11px] leading-relaxed sm:p-5 sm:text-xs'>
							<span className='[color:var(--mute)]'>
								{'import { Cipher } from '}
							</span>
							<span className='[color:var(--green)]'>{'@cipher/sdk'}</span>
							<span className='[color:var(--mute)]'>
								{'\n\nconst client = await Cipher.init({\n  '}
							</span>
							<span className='[color:var(--text)]'>identity</span>
							<span className='[color:var(--mute)]'>
								{': process.env.CIPHER_KEY,\n  '}
							</span>
							<span className='[color:var(--text)]'>relay</span>
							<span className='[color:var(--mute)]'>{': '}</span>
							<span className='[color:var(--green)]'>
								{'"https://relay.cipher.app"'}
							</span>
							<span className='[color:var(--mute)]'>
								{'\n})\n\nawait client.send({\n  '}
							</span>
							<span className='[color:var(--text)]'>to</span>
							<span className='[color:var(--mute)]'>{': '}</span>
							<span className='[color:var(--green)]'>{'"cf_8f2a...9c1d"'}</span>
							<span className='[color:var(--mute)]'>{',\n  '}</span>
							<span className='[color:var(--text)]'>body</span>
							<span className='[color:var(--mute)]'>{': '}</span>
							<span className='[color:var(--green)]'>
								{'"Meeting at 14:00"'}
							</span>
							<span className='[color:var(--mute)]'>{',\n  '}</span>
							<span className='[color:var(--text)]'>ttl</span>
							<span className='[color:var(--mute)]'>{': '}</span>
							<span className='[color:var(--green)]'>3600</span>
							<span className='[color:var(--mute)]'>{'\n})'}</span>
						</pre>
					</div>
				</div>
			</div>
		</section>
	)
}
