/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:justify-between'>
				<span className='font-[family-name:var(--font-display)] text-2xl [color:var(--moss)]'>
					Verdant
				</span>
				<p className='text-sm [color:var(--mute)]'>
					© {new Date().getFullYear()} Verdant Agency — Concept preview
				</p>
			</div>
		</footer>
	)
}
