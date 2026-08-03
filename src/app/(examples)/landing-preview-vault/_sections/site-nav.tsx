/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='va-rise sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur [background:color-mix(in_oklch,var(--bg)_80%,transparent)]'>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8'>
				<a href='#top' className='flex items-center gap-2 font-bold text-lg'>
					<span className='grid h-8 w-8 place-items-center rounded-lg font-bold text-[oklch(0.16_0.03_265)] [background:var(--mint)]'>
						V
					</span>
					Vault
				</a>
				<nav className='hidden gap-7 text-sm [color:var(--mute)] md:flex'>
					<a href='#features' className='hover:[color:var(--text)]'>
						Features
					</a>
					<a href='#how' className='hover:[color:var(--text)]'>
						How it works
					</a>
					<a href='#security' className='hover:[color:var(--text)]'>
						Security
					</a>
				</nav>
				<div className='flex items-center gap-3'>
					<a
						href='#top'
						className='hidden text-sm [color:var(--mute)] sm:block hover:[color:var(--text)]'
					>
						Log in
					</a>
					<a
						href='#download'
						className='rounded-full px-4 py-2 font-semibold text-[oklch(0.16_0.03_265)] text-sm [background:var(--mint)]'
					>
						Get the app
					</a>
				</div>
			</div>
		</header>
	)
}
