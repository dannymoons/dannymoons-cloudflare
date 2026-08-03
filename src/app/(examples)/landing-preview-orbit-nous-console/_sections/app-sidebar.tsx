import {
	AlertTriangle,
	BarChart3,
	FlaskConical,
	Globe,
	LayoutDashboard,
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
		href: '/landing-preview-orbit-nous-console',
		icon: LayoutDashboard
	},
	{
		key: 'analytics',
		label: 'Analytics',
		href: '/landing-preview-orbit-analytics',
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
		<aside className='sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-[var(--line)] border-r [background:var(--card)] lg:flex'>
			<div className='flex items-center gap-2.5 border-[var(--line)] border-b px-4 py-4'>
				<span className='flex h-8 w-8 items-center justify-center rounded-lg [background:color-mix(in_oklch,var(--olive)_12%,var(--card))] [color:var(--olive)]'>
					<FlaskConical className='h-4 w-4' aria-hidden />
				</span>
				<div className='min-w-0'>
					<span className='block font-[family-name:var(--font-display)] font-semibold text-sm tracking-tight'>
						Orbit Research
					</span>
					<span className='block truncate text-[10px] [color:var(--mute)]'>
						Carbon lab
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
							className={`flex min-h-10 items-center gap-2.5 rounded-lg px-3 text-xs transition-colors ${
								isActive
									? 'border border-[color-mix(in_oklch,var(--olive)_20%,transparent)] [background:color-mix(in_oklch,var(--sage)_14%,var(--card))] [color:var(--olive)]'
									: '[color:var(--mute)] hover:[background:color-mix(in_oklch,var(--sage)_8%,var(--card))] hover:[color:var(--ink)]'
							}`}
							aria-current={isActive ? 'page' : undefined}
						>
							<Icon className='h-4 w-4 shrink-0' aria-hidden />
							{label}
						</Link>
					)
				})}
			</nav>
			<div className='border-[var(--line)] border-t p-3'>
				<Link
					href='#'
					className='flex min-h-10 items-center gap-2.5 rounded-lg px-3 text-xs [color:var(--mute)] hover:[background:color-mix(in_oklch,var(--sage)_8%,var(--card))] hover:[color:var(--ink)]'
				>
					<Settings className='h-4 w-4 shrink-0' aria-hidden />
					Settings
				</Link>
			</div>
		</aside>
	)
}
