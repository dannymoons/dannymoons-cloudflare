import { Asterisk } from 'lucide-react'

/** Future Payload mapping: siteFooter (playful). */
export function SiteFooter() {
	return (
		<footer className='flex flex-col items-center justify-between gap-4 px-5 py-8 font-[family-name:var(--font-mono)] text-xs uppercase sm:flex-row sm:px-8'>
			<span className='flex items-center gap-1'>
				<Asterisk className='h-4 w-4 [color:var(--magenta)]' />
				FLUX Studio
			</span>
			<span>© {new Date().getFullYear()} — made with too much coffee</span>
			<span>Concept preview</span>
		</footer>
	)
}
