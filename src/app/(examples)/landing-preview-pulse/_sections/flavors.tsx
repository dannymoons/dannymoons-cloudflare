import { Flame, Snowflake, Zap } from 'lucide-react'

const flavors = [
	{
		name: 'TOXIC LIME',
		kcal: '0',
		mg: '200',
		bg: 'var(--acid)',
		fg: 'var(--void)',
		icon: Zap
	},
	{
		name: 'BLOOD ORANGE',
		kcal: '5',
		mg: '180',
		bg: 'var(--magenta)',
		fg: 'var(--paper)',
		icon: Flame
	},
	{
		name: 'ARCTIC BLAST',
		kcal: '0',
		mg: '220',
		bg: 'var(--cyan)',
		fg: 'var(--void)',
		icon: Snowflake
	}
]

/** Future Payload mapping: productGrid. */
export function Flavors() {
	return (
		<section
			id='flavors'
			className='grid grid-cols-1 gap-4 px-5 sm:px-8 md:grid-cols-3'
		>
			{flavors.map((f, i) => {
				const Icon = f.icon
				return (
					<div
						key={f.name}
						className='vc-pop group relative flex min-h-[420px] flex-col justify-between overflow-hidden border-4 border-[var(--void)] p-6 transition-transform duration-300 hover:-translate-y-2'
						style={{
							background: f.bg,
							color: f.fg,
							animationDelay: `${i * 0.1}s`
						}}
					>
						<div className='flex items-center justify-between'>
							<Icon className='h-10 w-10' />
							<span className='font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest'>
								No.{i + 1}
							</span>
						</div>
						<div
							aria-hidden
							className='pointer-events-none absolute top-1/2 -right-6 select-none font-[family-name:var(--font-display)] text-[10rem] leading-none opacity-10'
						>
							{i + 1}
						</div>
						<div>
							<h3 className='font-[family-name:var(--font-display)] text-4xl leading-none'>
								{f.name}
							</h3>
							<div className='mt-4 flex gap-6 font-[family-name:var(--font-mono)] text-sm'>
								<span>{f.kcal} KCAL</span>
								<span>{f.mg}MG</span>
							</div>
							<span className='mt-5 inline-block border-2 border-current px-4 py-1.5 font-[family-name:var(--font-display)] text-lg transition-colors duration-200 group-hover:[background:var(--void)] group-hover:[color:var(--acid)]'>
								GRAB IT
							</span>
						</div>
					</div>
				)
			})}
		</section>
	)
}
