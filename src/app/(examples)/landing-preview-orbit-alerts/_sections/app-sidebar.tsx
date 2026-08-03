import {
	AlertTriangle,
	BarChart3,
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
		href: '/landing-preview-orbit-console',
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
		<aside className='sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-[var(--line)] border-r [background:var(--panel)] lg:flex'>
			<div className='flex items-center gap-2 border-[var(--line)] border-b px-4 py-4'>
				<span className='flex h-8 w-8 items-center justify-center rounded-lg font-[family-name:var(--font-display)] font-bold text-[oklch(0.12_0.02_265)] text-xs [background:var(--orbit)]'>
					O
				</span>
				<span className='font-[family-name:var(--font-display)] font-semibold tracking-tight'>
					Orbit
				</span>
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
									? '[background:color-mix(in_oklch,var(--orbit)_18%,transparent)] [color:var(--orbit)]'
									: '[color:var(--mute)] hover:[background:var(--surface)] hover:[color:var(--text)]'
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
					className='flex min-h-10 items-center gap-2.5 rounded-lg px-3 text-xs [color:var(--mute)] hover:[background:var(--surface)] hover:[color:var(--text)]'
				>
					<Settings className='h-4 w-4 shrink-0' aria-hidden />
					Settings
				</Link>
			</div>
		</aside>
	)
}
