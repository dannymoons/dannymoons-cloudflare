const spec = [
	{ field: 'Key agreement', value: 'X25519 + ML-KEM-768 (hybrid PQ)' },
	{ field: 'Message cipher', value: 'AES-256-GCM' },
	{ field: 'Ratchet', value: 'Double Ratchet (Signal-derived)' },
	{ field: 'Identity', value: 'Ed25519 long-term + rotating signed prekeys' },
	{ field: 'Group protocol', value: 'Sender Keys v2 with epoch rotation' },
	{ field: 'Attachment', value: 'XSalsa20-Poly1305 per chunk' },
	{ field: 'Transport', value: 'WebSocket over TLS 1.3, binary frames' },
	{ field: 'Version', value: 'Cipher Protocol 2.1 (2025-03)' }
]

/** Future Payload mapping: protocolSpec (technical). */
export function Protocol() {
	return (
		<section id='protocol' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-4xl'>
				<div className='cf-reveal'>
					<span className='font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Protocol
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
						Cipher Protocol 2.1
					</h2>
					<p className='mt-4 max-w-lg text-sm [color:var(--mute)]'>
						Full specification published under CC BY 4.0. Reference
						implementations in Rust and TypeScript.
					</p>
				</div>

				<div className='cf-reveal mt-10 overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
					<div className='border-[var(--line)] border-b px-4 py-2 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--mute)]'>
						spec.yaml — excerpt
					</div>
					<dl className='divide-y divide-[var(--line)]'>
						{spec.map(row => (
							<div
								key={row.field}
								className='grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4'
							>
								<dt className='font-[family-name:var(--font-display)] text-xs [color:var(--green)]'>
									{row.field}
								</dt>
								<dd className='font-[family-name:var(--font-display)] text-xs [color:var(--text)]'>
									{row.value}
								</dd>
							</div>
						))}
					</dl>
				</div>

				<a
					href='#developers'
					className='cf-reveal mt-8 inline-flex min-h-12 items-center font-[family-name:var(--font-display)] text-xs uppercase tracking-widest transition-colors [color:var(--green)] hover:opacity-80'
				>
					View full spec on GitHub →
				</a>
			</div>
		</section>
	)
}
