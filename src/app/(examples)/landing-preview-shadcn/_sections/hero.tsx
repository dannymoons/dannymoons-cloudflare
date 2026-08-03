import {
	ArrowRight,
	Circle,
	CircleDot,
	CircleCheck,
	Sparkles
} from 'lucide-react'

const issues = [
	{
		icon: CircleDot,
		title: 'Auth token refresh fails on retry',
		tag: 'Bug',
		who: 'AM',
		state: 'text-warning'
	},
	{
		icon: Circle,
		title: 'Add keyboard shortcuts to command bar',
		tag: 'Feature',
		who: 'KL',
		state: 'text-muted-foreground'
	},
	{
		icon: CircleCheck,
		title: 'Migrate billing to usage-based',
		tag: 'Done',
		who: 'TV',
		state: 'text-success'
	},
	{
		icon: Circle,
		title: 'Empty state for archived projects',
		tag: 'Design',
		who: 'JP',
		state: 'text-muted-foreground'
	}
]

/** Future Payload mapping: heroCentered. */
export function Hero() {
	return (
		<section className='relative overflow-hidden border-border border-b'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 -z-10 opacity-60'
				style={{
					backgroundImage:
						'radial-gradient(var(--border) 1px, transparent 1px)',
					backgroundSize: '22px 22px',
					maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 75%)'
				}}
			/>
			<div className='mx-auto max-w-3xl px-gutter pt-20 pb-10 text-center sm:pt-28'>
				<span className='inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-medium text-muted-foreground text-xs'>
					<Sparkles className='h-3.5 w-3.5 text-primary' />
					Trace 2.0 — now with AI triage
				</span>
				<h1 className='mt-6 text-balance font-semibold text-4xl tracking-tight sm:text-6xl'>
					Issue tracking that keeps up with you
				</h1>
				<p className='mx-auto mt-5 max-w-xl text-balance text-lg text-muted-foreground leading-relaxed'>
					The streamlined tracker for modern software teams. Plan, triage and
					ship — all at the speed of thought, none of the bloat.
				</p>
				<div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
					<a
						href='#cta'
						className='group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-dark'
					>
						Start for free
						<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
					</a>
					<a
						href='#features'
						className='inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 font-medium transition-colors hover:bg-muted'
					>
						Book a demo
					</a>
				</div>
				<p className='mt-4 text-muted-foreground text-xs'>
					Free for up to 10 users · No credit card required
				</p>
			</div>

			{/* Product preview window */}
			<div className='mx-auto max-w-5xl px-gutter pb-16'>
				<div className='overflow-hidden rounded-xl border border-border bg-card shadow-xl'>
					<div className='flex items-center gap-2 border-border border-b px-4 py-3'>
						<span className='h-2.5 w-2.5 rounded-full bg-muted-foreground/40' />
						<span className='h-2.5 w-2.5 rounded-full bg-muted-foreground/40' />
						<span className='h-2.5 w-2.5 rounded-full bg-muted-foreground/40' />
						<span className='ml-3 text-muted-foreground text-xs'>
							trace.app / engineering
						</span>
					</div>
					<div className='grid grid-cols-[180px_1fr] max-sm:grid-cols-1'>
						<aside className='hidden flex-col gap-1 border-border border-r p-3 text-sm sm:flex'>
							{['Inbox', 'My issues', 'Active', 'Backlog', 'Projects'].map(
								(s, i) => (
									<span
										key={s}
										className={`rounded-md px-3 py-1.5 ${
											i === 2
												? 'bg-muted font-medium text-foreground'
												: 'text-muted-foreground'
										}`}
									>
										{s}
									</span>
								)
							)}
						</aside>
						<div className='divide-y divide-border'>
							{issues.map(it => {
								const Icon = it.icon
								return (
									<div
										key={it.title}
										className='flex items-center gap-3 px-4 py-3'
									>
										<Icon className={`h-4 w-4 shrink-0 ${it.state}`} />
										<span className='flex-1 truncate text-sm'>{it.title}</span>
										<span className='hidden rounded border border-border px-2 py-0.5 text-muted-foreground text-xs sm:inline'>
											{it.tag}
										</span>
										<span className='grid h-6 w-6 place-items-center rounded-full bg-muted text-[10px] text-muted-foreground'>
											{it.who}
										</span>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
