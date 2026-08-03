import { ArrowRight, Sparkles } from 'lucide-react'

/** Future Payload mapping: heroAgency. */
export function Hero() {
	return (
		<section className='relative px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div>
						<span className='oa-reveal mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1.5 font-medium text-[10px] uppercase tracking-[0.2em] backdrop-blur-xl [color:var(--mute)]'>
							<Sparkles className='h-3 w-3 [color:var(--cyan)]' />
							Agency carbon workspace
						</span>
						<h1 className='oa-reveal font-[family-name:var(--font-display)] font-extrabold text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.04] tracking-[-0.03em]'>
							<span
								className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
								style={{ backgroundImage: 'var(--grad-text)' }}
							>
								Carbon clarity
							</span>{' '}
							for every client site
						</h1>
						<p className='oa-reveal mt-5 max-w-md text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							Orbit Aero gives digital agencies a glass-clear view of client
							emissions — portfolio dashboards, branded reports, and embeddable
							badges from one frosted workspace.
						</p>
						<div className='oa-reveal mt-8 flex flex-col gap-3 sm:flex-row'>
							<a
								href='#get-started'
								className='group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-medium text-sm transition-colors [background:var(--blue)] [color:var(--cloud)] hover:[background:color-mix(in_oklch,var(--blue)_88%,var(--ink))]'
							>
								Onboard your agency
								<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
							</a>
							<a
								href='#portfolio'
								className='inline-flex min-h-12 items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-6 font-medium text-sm backdrop-blur-xl transition-colors hover:bg-white/90'
							>
								View sample portfolio
							</a>
						</div>
						<dl className='oa-reveal mt-10 grid grid-cols-3 gap-4 border-[var(--line)] border-t pt-8'>
							{(
								[
									['Client sites', '142'],
									['Avg grade', 'B+'],
									['Reports sent', '890']
								] as const
							).map(([label, val]) => (
								<div key={label}>
									<dt className='text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
										{label}
									</dt>
									<dd className='mt-1 font-[family-name:var(--font-display)] font-bold text-2xl tabular-nums tracking-tight'>
										{val}
									</dd>
								</div>
							))}
						</dl>
					</div>

					<div className='oa-reveal overflow-hidden rounded-2xl border border-[var(--line)] bg-white/70 shadow-[0_24px_64px_-24px_color-mix(in_oklch,var(--blue)_25%,transparent)] backdrop-blur-xl'>
						<div className='flex items-center justify-between border-[var(--line)] border-b px-5 py-3.5'>
							<span className='font-medium text-xs [color:var(--mute)]'>
								Studio overview
							</span>
							<span className='rounded-full border border-[color-mix(in_oklch,var(--cyan)_35%,transparent)] bg-white/60 px-2.5 py-0.5 font-medium text-[10px] [color:var(--blue)]'>
								Live
							</span>
						</div>
						<div className='grid grid-cols-2 gap-px [background:var(--line)]'>
							{(
								[
									['Active clients', '18'],
									['Sites tracked', '142'],
									['Under budget', '94%'],
									['Widget installs', '67']
								] as const
							).map(([label, val]) => (
								<div
									key={label}
									className='bg-white/75 px-4 py-4 backdrop-blur-xl sm:px-5'
								>
									<p className='text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
										{label}
									</p>
									<p className='mt-1 font-[family-name:var(--font-display)] font-bold text-xl tabular-nums'>
										{val}
									</p>
								</div>
							))}
						</div>
						<div className='flex h-24 items-end gap-1.5 border-[var(--line)] border-t px-5 pt-4 pb-4'>
							{(
								[
									['Jan', 38],
									['Feb', 42],
									['Mar', 40],
									['Apr', 36],
									['May', 34],
									['Jun', 30],
									['Jul', 28],
									['Aug', 26],
									['Sep', 24],
									['Oct', 22],
									['Nov', 20],
									['Dec', 18]
								] as const
							).map(([month, h], i) => (
								<div
									key={month}
									className='flex flex-1 flex-col items-center gap-1'
								>
									<div
										className='w-full rounded-t-md [background:linear-gradient(180deg,var(--cyan),var(--blue))]'
										style={{ height: `${h + 24}%`, opacity: 0.35 + i * 0.05 }}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
