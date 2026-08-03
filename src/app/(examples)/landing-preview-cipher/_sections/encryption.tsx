/** Future Payload mapping: encryptionDiagram (E2E flow). */
export function Encryption() {
	return (
		<section
			id='encryption'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--panel)_50%,var(--void))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='cf-reveal max-w-xl'>
					<span className='font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Encryption
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
						End-to-end, by default
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
						Only your devices hold the keys. Relay servers see ciphertext blobs
						— never plaintext, contacts, or conversation graphs.
					</p>
				</div>

				<div className='cf-reveal mt-12 overflow-x-auto rounded border border-[var(--line)] p-6 [background:var(--panel)] sm:p-8'>
					<div className='flex min-w-[28rem] flex-col items-center gap-4 font-[family-name:var(--font-display)] text-xs sm:min-w-0 sm:flex-row sm:justify-between sm:gap-6'>
						<div className='w-full rounded border border-[color-mix(in_oklch,var(--green)_25%,var(--line))] p-4 text-center sm:w-auto sm:min-w-[9rem]'>
							<p className='uppercase tracking-widest [color:var(--green)]'>
								Device A
							</p>
							<p className='mt-2 [color:var(--mute)]'>identity key</p>
							<p className='mt-1 [color:var(--text)]'>encrypt()</p>
						</div>

						<div className='flex flex-col items-center gap-1 [color:var(--mute)]'>
							<span className='hidden sm:block'>────►</span>
							<span className='sm:hidden'>│</span>
							<span className='text-[10px] uppercase tracking-widest'>
								ciphertext
							</span>
							<span className='hidden sm:block'>────►</span>
							<span className='sm:hidden'>│</span>
						</div>

						<div className='w-full rounded border border-[var(--line)] border-dashed p-4 text-center sm:w-auto sm:min-w-[9rem]'>
							<p className='uppercase tracking-widest [color:var(--mute)]'>
								Relay
							</p>
							<p className='mt-2 [color:var(--mute)]'>opaque blob</p>
							<p className='mt-1 text-[10px] [color:var(--mute)]'>
								no keys stored
							</p>
						</div>

						<div className='flex flex-col items-center gap-1 [color:var(--mute)]'>
							<span className='hidden sm:block'>────►</span>
							<span className='sm:hidden'>│</span>
							<span className='text-[10px] uppercase tracking-widest'>
								deliver
							</span>
							<span className='hidden sm:block'>────►</span>
							<span className='sm:hidden'>│</span>
						</div>

						<div className='w-full rounded border border-[color-mix(in_oklch,var(--green)_25%,var(--line))] p-4 text-center sm:w-auto sm:min-w-[9rem]'>
							<p className='uppercase tracking-widest [color:var(--green)]'>
								Device B
							</p>
							<p className='mt-2 [color:var(--mute)]'>session key</p>
							<p className='mt-1 [color:var(--text)]'>decrypt()</p>
						</div>
					</div>

					<ul className='mt-8 grid gap-3 border-[var(--line)] border-t pt-6 text-sm sm:grid-cols-3'>
						<li>
							<span className='font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--green)]'>
								At rest
							</span>
							<p className='mt-1 [color:var(--mute)]'>
								SQLCipher + secure enclave
							</p>
						</li>
						<li>
							<span className='font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--green)]'>
								In transit
							</span>
							<p className='mt-1 [color:var(--mute)]'>
								TLS 1.3 + certificate pinning
							</p>
						</li>
						<li>
							<span className='font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--green)]'>
								Forward secrecy
							</span>
							<p className='mt-1 [color:var(--mute)]'>
								Double Ratchet per session
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
