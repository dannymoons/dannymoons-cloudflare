const threats = [
	{
		actor: 'Network adversary',
		mitigation: 'E2E encryption, cert pinning, onion relays',
		status: 'mitigated'
	},
	{
		actor: 'Compromised relay',
		mitigation: 'Zero-knowledge routing, no message content access',
		status: 'mitigated'
	},
	{
		actor: 'Device seizure',
		mitigation: 'Encrypted vault, duress PIN, auto-wipe after N failures',
		status: 'mitigated'
	},
	{
		actor: 'Contact discovery',
		mitigation: 'No address book upload. QR / safety numbers only.',
		status: 'eliminated'
	},
	{
		actor: 'Legal subpoena',
		mitigation: 'No message retention. Warrant canary published monthly.',
		status: 'limited'
	}
]

/** Future Payload mapping: threatModelTable. */
export function ThreatModel() {
	return (
		<section
			id='threat-model'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--panel)_40%,var(--void))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='cf-reveal max-w-xl'>
					<span className='font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Threat model
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
						What we assume attackers will try
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Transparent about limits. We design for nation-state passive
						surveillance and negligent relay operators — not magic.
					</p>
				</div>

				<div className='cf-reveal mt-10 overflow-x-auto'>
					<table className='w-full min-w-[28rem] border-collapse text-left text-sm'>
						<thead>
							<tr className='border-[var(--line)] border-b font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--mute)]'>
								<th className='py-3 pr-4'>Threat actor</th>
								<th className='py-3 pr-4'>Mitigation</th>
								<th className='py-3'>Status</th>
							</tr>
						</thead>
						<tbody>
							{threats.map(t => (
								<tr key={t.actor} className='border-[var(--line)] border-b'>
									<td className='py-4 pr-4 font-[family-name:var(--font-display)] text-xs [color:var(--text)]'>
										{t.actor}
									</td>
									<td className='py-4 pr-4 [color:var(--mute)]'>
										{t.mitigation}
									</td>
									<td className='py-4'>
										<span
											className={`font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest ${
												t.status === 'mitigated'
													? '[color:var(--green)]'
													: t.status === 'eliminated'
														? '[color:var(--green)]'
														: '[color:var(--mute)]'
											}`}
										>
											{t.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}
