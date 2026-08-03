import { ArrowLeft, ArrowRight } from 'lucide-react'

/** Future Payload mapping: docsPager + feedback. */
export function DocFooter() {
	return (
		<div className='mx-auto mt-16 max-w-2xl'>
			<div className='flex items-center justify-between gap-3 border-border border-t pt-6 text-muted-foreground text-xs'>
				<span>Was this page helpful?</span>
				<div className='flex gap-2'>
					<button
						type='button'
						className='rounded-lg border border-border px-3 py-1.5 hover:bg-muted hover:text-foreground'
					>
						Yes
					</button>
					<button
						type='button'
						className='rounded-lg border border-border px-3 py-1.5 hover:bg-muted hover:text-foreground'
					>
						No
					</button>
				</div>
			</div>

			<div className='mt-6 grid grid-cols-2 gap-3'>
				<a
					href='#top'
					className='group flex flex-col rounded-xl border border-border p-4 transition-colors hover:border-primary/50'
				>
					<span className='flex items-center gap-1 text-muted-foreground text-xs'>
						<ArrowLeft className='h-3 w-3' /> Previous
					</span>
					<span className='mt-1 font-medium text-foreground'>Overview</span>
				</a>
				<a
					href='#installation'
					className='group flex flex-col items-end rounded-xl border border-border p-4 text-right transition-colors hover:border-primary/50'
				>
					<span className='flex items-center gap-1 text-muted-foreground text-xs'>
						Next <ArrowRight className='h-3 w-3' />
					</span>
					<span className='mt-1 font-medium text-foreground'>Installation</span>
				</a>
			</div>
		</div>
	)
}
