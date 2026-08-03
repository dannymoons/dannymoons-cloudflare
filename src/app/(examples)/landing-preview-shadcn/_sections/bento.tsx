import { Bot, KanbanSquare, LineChart } from 'lucide-react'

const board = [
	{ col: 'Todo', cards: ['t-a', 't-b', 't-c'] },
	{ col: 'In progress', cards: ['p-a', 'p-b'] },
	{ col: 'Done', cards: ['d-a'] }
]

/** Future Payload mapping: featureBento. */
export function Bento() {
	return (
		<section className='border-border border-y bg-muted/30'>
			<div className='mx-auto max-w-6xl px-gutter py-section'>
				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
					{/* Large */}
					<div className='flex flex-col justify-between rounded-xl border border-border bg-card p-7 lg:col-span-2'>
						<div>
							<span className='grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary'>
								<KanbanSquare className='h-5 w-5' />
							</span>
							<h3 className='mt-4 font-semibold text-xl'>
								A board for every workflow
							</h3>
							<p className='mt-2 max-w-md text-muted-foreground text-sm leading-relaxed'>
								Switch between list, board and timeline without losing context.
								Drag, group and filter — it stays fast at 10,000 issues.
							</p>
						</div>
						<div className='mt-6 grid grid-cols-3 gap-3'>
							{board.map(column => (
								<div
									key={column.col}
									className='rounded-lg border border-border bg-background p-3'
								>
									<div className='mb-2 text-muted-foreground text-xs'>
										{column.col}
									</div>
									{column.cards.map(card => (
										<div
											key={card}
											className='mb-2 h-8 rounded-md border border-border bg-card'
										/>
									))}
								</div>
							))}
						</div>
					</div>
					{/* Tall stack */}
					<div className='flex flex-col gap-4'>
						<div className='flex-1 rounded-xl border border-border bg-card p-7'>
							<span className='grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary'>
								<Bot className='h-5 w-5' />
							</span>
							<h3 className='mt-4 font-semibold text-lg'>
								AI that does the busywork
							</h3>
							<p className='mt-2 text-muted-foreground text-sm leading-relaxed'>
								Summarize threads, draft replies and suggest the next action.
							</p>
						</div>
						<div className='flex-1 rounded-xl border border-border bg-card p-7'>
							<span className='grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary'>
								<LineChart className='h-5 w-5' />
							</span>
							<h3 className='mt-4 font-semibold text-lg'>Insights, built in</h3>
							<p className='mt-2 text-muted-foreground text-sm leading-relaxed'>
								Velocity, burndown and SLA dashboards out of the box.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
