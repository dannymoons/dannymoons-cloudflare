import { FileDown, Image, RefreshCw, Zap } from 'lucide-react'

/** Future Payload mapping: quickActions (block). */
const ACTIONS = [
	{
		label: 'Run page audit',
		desc: 'Scan all URLs for weight',
		icon: RefreshCw
	},
	{
		label: 'Compress images',
		desc: 'Batch optimize flagged assets',
		icon: Image
	},
	{
		label: 'Export report',
		desc: 'PDF or CSV for stakeholders',
		icon: FileDown
	},
	{ label: 'Enable lazy load', desc: 'Apply to heavy product pages', icon: Zap }
]

export function QuickActions() {
	return (
		<section className='border border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Quick actions
			</h2>
			<div className='grid gap-2 sm:grid-cols-2'>
				{ACTIONS.map(({ label, desc, icon: Icon }) => (
					<button
						key={label}
						type='button'
						className='flex items-start gap-3 rounded-lg border border-[var(--line)] p-3 text-left transition-colors hover:border-[color-mix(in_oklch,var(--olive)_30%,var(--line))] hover:[background:var(--surface)]'
					>
						<span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg [background:color-mix(in_oklch,var(--olive)_15%,transparent)]'>
							<Icon className='h-4 w-4 [color:var(--olive)]' aria-hidden />
						</span>
						<span>
							<span className='block font-medium text-xs'>{label}</span>
							<span className='text-[11px] [color:var(--mute)]'>{desc}</span>
						</span>
					</button>
				))}
			</div>
		</section>
	)
}
