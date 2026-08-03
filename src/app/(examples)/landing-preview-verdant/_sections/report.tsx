import { Download } from 'lucide-react'

/** Future Payload mapping: resourceCta. */
export function Report() {
	return (
		<section className='px-5 py-20 sm:px-8'>
			<div className='vd-reveal mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl p-10 text-white [background:var(--moss)] sm:flex-row sm:items-center'>
				<div>
					<h2 className='font-[family-name:var(--font-display)] text-3xl'>
						2026 Transition Index
					</h2>
					<p className='mt-3 max-w-md opacity-90'>
						Our annual benchmark of how 500 global brands are actually
						performing on climate — not just promising.
					</p>
				</div>
				<a
					href='#contact'
					className='inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 [color:var(--moss)]'
				>
					<Download className='h-5 w-5' /> Download report
				</a>
			</div>
		</section>
	)
}
