/** Future Payload mapping: siteFooter (dark). */
export function SiteFooter() {
	return (
		<footer className='flex flex-col items-center justify-between gap-3 border-[var(--line)] border-t px-5 py-8 font-[family-name:var(--font-mono)] text-xs [color:var(--ink-soft)] sm:flex-row sm:px-8'>
			<span className='[color:var(--ink)]'>AETHER</span>
			<span>© {new Date().getFullYear()} Aether Compute — concept preview</span>
			<span className='uppercase tracking-widest'>Built for builders</span>
		</footer>
	)
}
