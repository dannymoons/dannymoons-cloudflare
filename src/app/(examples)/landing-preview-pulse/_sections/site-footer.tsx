/** Future Payload mapping: siteFooter (bold). */
export function SiteFooter() {
	return (
		<footer className='flex flex-col items-center justify-between gap-3 px-5 py-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest sm:flex-row sm:px-8'>
			<span className='[color:var(--acid)]'>VOLTCORE™</span>
			<span>
				© {new Date().getFullYear()} — Drink responsibly, chaos respectfully
			</span>
			<span>Concept preview</span>
		</footer>
	)
}
