import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'

const tx = [
	{ name: 'Spotify', sub: 'Subscription', amt: '-€9.99', up: false },
	{ name: 'Salary', sub: 'Acme Inc.', amt: '+€3,200', up: true },
	{ name: 'Albert Heijn', sub: 'Groceries', amt: '-€42.10', up: false },
	{ name: 'Refund', sub: 'Bol.com', amt: '+€18.50', up: true }
]

/** Reusable app mockup. Future Payload mapping: image/upload. */
export function Phone({ className = '' }: { className?: string }) {
	return (
		<div
			className={`relative w-[260px] rounded-[2.5rem] border-[10px] border-[oklch(0.12_0.02_265)] p-4 shadow-2xl [background:var(--panel)] ${className}`}
		>
			<div className='mx-auto mb-4 h-1.5 w-16 rounded-full bg-[var(--line)]' />
			<div
				className='rounded-2xl p-4'
				style={{
					background: 'linear-gradient(135deg, var(--mint), var(--violet))'
				}}
			>
				<p className='font-medium text-[oklch(0.2_0.03_265)] text-xs'>
					Total balance
				</p>
				<p className='mt-1 font-[family-name:var(--font-display)] font-bold text-3xl text-[oklch(0.16_0.03_265)]'>
					€12,480.55
				</p>
				<p className='mt-2 text-[oklch(0.2_0.03_265)]/80 text-xs'>
					+2.4% this month
				</p>
			</div>

			<div className='mt-4 flex gap-2'>
				<div className='flex flex-1 flex-col items-center gap-1 rounded-xl py-3 [background:var(--panel-2)]'>
					<ArrowUpRight className='h-4 w-4 [color:var(--mint)]' />
					<span className='text-[0.7rem] [color:var(--mute)]'>Send</span>
				</div>
				<div className='flex flex-1 flex-col items-center gap-1 rounded-xl py-3 [background:var(--panel-2)]'>
					<ArrowDownLeft className='h-4 w-4 [color:var(--mint)]' />
					<span className='text-[0.7rem] [color:var(--mute)]'>Request</span>
				</div>
			</div>

			<div className='mt-4 space-y-3'>
				{tx.map(t => (
					<div key={t.name} className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<span className='h-8 w-8 rounded-full [background:var(--panel-2)]' />
							<span>
								<span className='block font-medium text-xs [color:var(--text)]'>
									{t.name}
								</span>
								<span className='block text-[0.65rem] [color:var(--mute)]'>
									{t.sub}
								</span>
							</span>
						</div>
						<span
							className={`font-medium text-xs ${t.up ? '[color:var(--mint)]' : '[color:var(--text)]'}`}
						>
							{t.amt}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
