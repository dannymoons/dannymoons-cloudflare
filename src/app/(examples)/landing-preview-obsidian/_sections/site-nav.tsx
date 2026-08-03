/** Future Payload mapping: siteHeader (cinematic). */
export function SiteNav() {
	return (
		<header className='ob-rise fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-5 py-5 mix-blend-difference sm:px-8'>
			<a href='#top' className='font-bold text-white text-xl tracking-tight'>
				OBSIDIAN<span className='[color:var(--amber)]'>°</span>
			</a>
			<nav className='hidden gap-8 font-[family-name:var(--font-mono)] text-white text-xs uppercase tracking-widest md:flex'>
				<a href='#work'>Work</a>
				<a href='#studio'>Studio</a>
				<a href='#awards'>Awards</a>
			</nav>
			<a
				href='#contact'
				className='font-[family-name:var(--font-mono)] text-white text-xs uppercase tracking-widest'
			>
				Get in touch
			</a>
		</header>
	)
}
