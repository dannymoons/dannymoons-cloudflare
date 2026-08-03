/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-lg [color:var(--green)]'>
						CIPHER
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Encrypted messaging for people who read the threat model.
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--mute)]'>
					<a
						href='#encryption'
						className='transition-colors hover:[color:var(--green)]'
					>
						Encryption
					</a>
					<a
						href='#protocol'
						className='transition-colors hover:[color:var(--green)]'
					>
						Protocol
					</a>
					<a
						href='#audits'
						className='transition-colors hover:[color:var(--green)]'
					>
						Audits
					</a>
					<a
						href='#developers'
						className='transition-colors hover:[color:var(--green)]'
					>
						API
					</a>
					<a
						href='#privacy'
						className='transition-colors hover:[color:var(--green)]'
					>
						Privacy
					</a>
					<a
						href='#download'
						className='transition-colors hover:[color:var(--green)]'
					>
						Download
					</a>
				</nav>
				<p className='font-[family-name:var(--font-display)] text-[10px] [color:var(--mute)]'>
					© {new Date().getFullYear()} Cipher — Concept preview
				</p>
			</div>
		</footer>
	)
}
