/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl tracking-[0.1em] [color:var(--ash)]'>
						CINDER
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Artisan ceramics studio · Uji, Kyoto
					</p>
					<p className='mt-2 text-sm [color:var(--mute)]'>
						<a
							href='mailto:studio@cinder.jp'
							className='transition-colors hover:[color:var(--ember)]'
						>
							studio@cinder.jp
						</a>
						{' · '}
						<a
							href='tel:+81751234567'
							className='transition-colors hover:[color:var(--ember)]'
						>
							+81 75 123 4567
						</a>
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-5 gap-y-2 text-sm [color:var(--mute)]'>
					<a
						href='#collection'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Collection
					</a>
					<a
						href='#workshops'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Workshops
					</a>
					<a
						href='#visit'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Visit
					</a>
					<a
						href='#shop'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Shop
					</a>
					<a
						href='#contact'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Contact
					</a>
				</nav>
				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Cinder Studio — Concept preview
				</p>
			</div>
		</footer>
	)
}
