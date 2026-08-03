const integrations = [
	{
		name: 'WordPress',
		desc: 'Plugin + REST sync',
		initial: 'W'
	},
	{
		name: 'Shopify',
		desc: 'Theme & checkout tracking',
		initial: 'S'
	},
	{
		name: 'Vercel',
		desc: 'Deploy hooks & edge data',
		initial: '▲'
	},
	{
		name: 'Netlify',
		desc: 'Build-time + RUM beacon',
		initial: 'N'
	}
]

/** Future Payload mapping: integrationLogos. */
export function Integrations() {
	return (
		<section
			id='integrations'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_8%,var(--parchment))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl text-center'>
				<span className='ohd-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--olive)]'>
					Integrations
				</span>
				<h2 className='ohd-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
					Plugs into your stack
				</h2>
				<p className='ohd-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
					One-line snippets, official plugins, and deploy webhooks — live
					measurements in under ten minutes.
				</p>

				<div className='ohd-reveal mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4'>
					{integrations.map(item => (
						<div
							key={item.name}
							className='flex flex-col items-center border-2 border-[var(--stroke)] px-4 py-6 [background:var(--panel)]'
						>
							<span className='grid h-12 w-12 place-items-center border border-[var(--stroke)] font-[family-name:var(--font-display)] font-bold text-lg [background:var(--surface)] [color:var(--ink)]'>
								{item.initial}
							</span>
							<span className='mt-4 font-[family-name:var(--font-display)] font-medium text-sm [color:var(--ink)]'>
								{item.name}
							</span>
							<span className='mt-1 font-[family-name:var(--font-body)] text-[10px] [color:var(--mute)]'>
								{item.desc}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
