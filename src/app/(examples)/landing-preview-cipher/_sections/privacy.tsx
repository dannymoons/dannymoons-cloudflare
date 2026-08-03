const highlights = [
	{
		title: 'No phone number',
		body: 'Identity is a public key. Verify contacts via QR code or safety number — never upload your address book.'
	},
	{
		title: 'Zero message retention',
		body: 'Relays delete ciphertext after delivery. Undelivered messages expire in 30 days, encrypted, then purged.'
	},
	{
		title: 'No analytics',
		body: 'No trackers, no crash reporting with PII, no "improvement" telemetry. Optional anonymous crash dumps are opt-in.'
	},
	{
		title: 'Open source',
		body: 'Client apps and protocol spec are public. Reproducible builds published for every release tag.'
	},
	{
		title: 'GDPR by architecture',
		body: 'We cannot export what we do not store. Data subject requests return an empty set — by design.'
	},
	{
		title: 'Warrant canary',
		body: 'Monthly signed statement. If we receive a gag order, the canary stops updating.'
	}
]

/** Future Payload mapping: privacyHighlights. */
export function Privacy() {
	return (
		<section id='privacy' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='cf-reveal max-w-xl'>
					<span className='font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Privacy
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
						Policy highlights
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						The short version. Full legal text available — but these six points
						are what matter.
					</p>
				</div>

				<div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{highlights.map(h => (
						<article
							key={h.title}
							className='cf-reveal border border-[var(--line)] p-5 [background:var(--panel)]'
						>
							<h3 className='font-[family-name:var(--font-display)] text-sm [color:var(--green)]'>
								{h.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{h.body}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
