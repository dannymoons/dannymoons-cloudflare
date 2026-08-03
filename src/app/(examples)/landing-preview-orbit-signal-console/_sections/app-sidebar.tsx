import {
	AlertTriangle,
	BarChart3,
	Globe,
	LayoutDashboard,
	Radio,
	Settings
} from 'lucide-react'
import Link from 'next/link'

/** Future Payload mapping: navigation (global). */
type NavKey = 'overview' | 'analytics' | 'sites' | 'alerts'

const NAV: {
	key: NavKey
	label: string
	href: string
	icon: typeof LayoutDashboard
}[] = [
	{
		key: 'overview',
		label: 'Overview',
		href: '/landing-preview-orbit-signal-console',
		icon: LayoutDashboard
	},
	{
		key: 'analytics',
		label: 'Analytics',
		href: '/landing-preview-orbit-console',
		icon: BarChart3
	},
	{
		key: 'sites',
		label: 'Sites',
		href: '/landing-preview-orbit-sites',
		icon: Globe
	},
	{
		key: 'alerts',
		label: 'Alerts',
		href: '/landing-preview-orbit-alerts',
		icon: AlertTriangle
	}
]

export function AppSidebar({ active }: { active: NavKey }) {
	return (
		<aside className='sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-[var(--line)] border-r [background:var(--panel)] lg:flex'>
			<div className='flex items-center gap-2.5 border-[var(--line)] border-b px-4 py-4'>
				<span className='flex h-8 w-8 items-center justify-center rounded border border-[color-mix(in_oklch,var(--lime)_35%,var(--line))] [background:color-mix(in_oklch,var(--lime)_12%,transparent)]'>
					<Radio className='h-4 w-4 [color:var(--lime)]' aria-hidden />
				</span>
				<div className='min-w-0'>
					<span className='block font-[family-name:var(--font-display)] font-semibold text-sm tracking-tight'>
						Orbit Signal
					</span>
					<span className='block truncate font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.15em] [color:var(--mute)]'>
						API console
					</span>
				</div>
			</div>
			<nav className='flex-1 space-y-0.5 p-3' aria-label='Main navigation'>
				{NAV.map(({ key, label, href, icon: Icon }) => {
					const isActive = active === key
					return (
						<Link
							key={key}
							href={href}
							className={`flex min-h-10 items-center gap-2.5 rounded border px-3 font-[family-name:var(--font-body)] text-[11px] uppercase tracking-wider transition-colors ${
								isActive
									? 'border-[color-mix(in_oklch,var(--lime)_35%,var(--line))] [background:color-mix(in_oklch,var(--lime)_10%,transparent)] [color:var(--lime)]'
									: 'border-transparent [color:var(--mute)] hover:border-[var(--line)] hover:[background:color-mix(in_oklch,var(--violet)_8%,transparent)] hover:[color:var(--text)]'
							}`}
							aria-current={isActive ? 'page' : undefined}
						>
							<Icon className='h-3.5 w-3.5 shrink-0' aria-hidden />
							{label}
						</Link>
					)
				})}
			</nav>
			<div className='border-[var(--line)] border-t p-3'>
				<Link
					href='#'
					className='flex min-h-10 items-center gap-2.5 rounded border border-transparent px-3 font-[family-name:var(--font-body)] text-[11px] uppercase tracking-wider [color:var(--mute)] hover:border-[var(--line)] hover:[color:var(--text)]'
				>
					<Settings className='h-3.5 w-3.5 shrink-0' aria-hidden />
					Settings
				</Link>
			</div>
		</aside>
	)
}
