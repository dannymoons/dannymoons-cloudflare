const features = [
	{
		cmd: 'cipher msg',
		title: 'Disappearing messages',
		desc: 'Timer-based deletion on all devices. No server-side recovery.'
	},
	{
		cmd: 'cipher voice',
		title: 'Encrypted calls',
		desc: 'SRTP with DTLS key exchange. No call logs on relay.'
	},
	{
		cmd: 'cipher file',
		title: 'Sealed attachments',
		desc: 'Chunked upload with per-file keys. 2 GB max, client-side only.'
	},
	{
		cmd: 'cipher group',
		title: 'Private groups',
		desc: 'Sender Keys rotation. Admin cannot read history.'
	},
	{
		cmd: 'cipher relay',
		title: 'Onion routing',
		desc: 'Optional multi-hop relays hide sender IP from recipients.'
	},
	{
		cmd: 'cipher lock',
		title: 'Screen lock',
		desc: 'Biometric gate + duress PIN wipes local vault.'
	}
]

/** Future Payload mapping: featureGrid (CLI-style). */
export function Features() {
	return (
		<section id='features' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='cf-reveal max-w-xl'>
					<h2 className='font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
						Built for people who read the README
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Every feature defaults to the most private configuration. Opt-out,
						never opt-in.
					</p>
				</div>

				<div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{features.map(f => (
						<article
							key={f.title}
							className='cf-reveal rounded border border-[var(--line)] p-5 [background:var(--panel)]'
						>
							<code className='font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--green)]'>
								{f.cmd}
							</code>
							<h3 className='mt-3 font-[family-name:var(--font-display)] text-sm [color:var(--text)]'>
								{f.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{f.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
