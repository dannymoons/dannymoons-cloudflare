import type { CSSProperties } from 'react'
import { ArrowDownRight } from 'lucide-react'

const tags = ['Branding', 'Motion', 'Web', '3D', 'Art direction']

/** Future Payload mapping: heroExpressive. */
export function Hero() {
	return (
		<section className='relative px-5 pt-12 pb-20 sm:px-8 sm:pt-16'>
			{/* animated color blob */}
			<div
				aria-hidden
				className='flx-blob pointer-events-none absolute top-0 right-0 -z-10 h-[60vw] max-h-[520px] w-[60vw] max-w-[520px] rounded-full opacity-50 blur-3xl'
				style={{
					background:
						'radial-gradient(circle at 30% 30%, var(--magenta), transparent 60%), radial-gradient(circle at 70% 70%, var(--cobalt), transparent 60%)'
				}}
			/>

			{/* spinning sticker */}
			<div
				aria-hidden
				className='flx-spin absolute top-6 right-6 hidden h-28 w-28 place-items-center rounded-full [background:var(--lime)] [color:var(--ink)] sm:grid'
			>
				<span className='text-center font-[family-name:var(--font-mono)] text-[10px] uppercase leading-tight'>
					est · 2014 · flux · studio ·
				</span>
			</div>

			<h1 className='max-w-5xl font-extrabold text-[clamp(3rem,11vw,9rem)] leading-[0.85] tracking-[-0.03em]'>
				We make brands
				<br />
				that{' '}
				<span className='font-[family-name:var(--font-serif)] text-[var(--magenta)] italic'>
					refuse
				</span>{' '}
				to be
				<br />
				<span className='[-webkit-text-stroke:2px_var(--ink)] [color:transparent]'>
					ignored.
				</span>
			</h1>

			<div className='mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<p className='max-w-md font-[family-name:var(--font-serif)] text-2xl leading-snug'>
					A design & motion studio for the bold, the weird and the wonderfully
					specific.
				</p>
				<a
					href='#work'
					className='inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-semibold text-[var(--cream)] transition-transform duration-200 [background:var(--ink)] hover:scale-105'
				>
					See the work <ArrowDownRight className='h-5 w-5' />
				</a>
			</div>

			<div className='mt-12 flex flex-wrap gap-2'>
				{tags.map((t, i) => (
					<span
						key={t}
						className='flx-float rounded-full border-2 border-[var(--ink)] px-4 py-1.5 font-[family-name:var(--font-mono)] text-sm'
						style={
							{
								'--r': `${(i % 2 === 0 ? -1 : 1) * 2}deg`,
								animationDelay: `${i * 0.3}s`
							} as CSSProperties
						}
					>
						{t}
					</span>
				))}
			</div>
		</section>
	)
}
