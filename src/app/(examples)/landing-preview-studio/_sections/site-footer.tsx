/** Future Payload mapping: siteFooter (minimal). */
export function SiteFooter() {
	return (
		<footer className='flex flex-col items-center justify-between gap-4 border-[var(--line)] border-t px-6 py-8 text-[var(--ink-soft)] text-xs sm:flex-row sm:px-10'>
			<span>© {new Date().getFullYear()} Meridian Studio</span>
			<span className='uppercase tracking-widest'>Lisboa · Utrecht</span>
			<span>Concept preview</span>
		</footer>
	)
}
