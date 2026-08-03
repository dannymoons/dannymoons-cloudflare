import {
	AlertTriangle,
	BarChart3,
	Globe,
	LayoutDashboard,
	Orbit,
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
		href: '/landing-preview-orbit-horizon-console',
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
		<aside className='sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-[var(--ink)] border-r-2 [background:var(--panel)] lg:flex'>
			<div className='flex items-center gap-2.5 border-[var(--ink)] border-b-2 px-4 py-4'>
				<span className='grid h-8 w-8 shrink-0 place-items-center border-2 border-[var(--ink)] [background:var(--ink)] [color:var(--parchment)]'>
					<Orbit className='h-4 w-4' aria-hidden />
				</span>
				<div className='min-w-0'>
					<span className='block font-[family-name:var(--font-display)] font-semibold text-sm tracking-tight'>
						Orbit Horizon
					</span>
					<span className='block truncate font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'>
						Carbon console
					</span>
				</div>
			</div>
			<nav className='flex-1 space-y-1 p-3' aria-label='Main navigation'>
				{NAV.map(({ key, label, href, icon: Icon }) => {
					const isActive = active === key
					return (
						<Link
							key={key}
							href={href}
							className={`flex min-h-11 items-center gap-2.5 border-2 px-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] transition-colors ${
								isActive
									? 'border-[var(--ink)] shadow-[3px_3px_0_var(--ink)] [background:var(--ink)] [color:var(--parchment)]'
									: 'border-transparent [color:var(--mute)] hover:border-[var(--ink)] hover:[background:var(--surface)] hover:[color:var(--ink)]'
							}`}
							aria-current={isActive ? 'page' : undefined}
						>
							<Icon className='h-4 w-4 shrink-0' aria-hidden />
							{label}
						</Link>
					)
				})}
			</nav>
			<div className='border-[var(--ink)] border-t-2 p-3'>
				<Link
					href='/landing-preview-orbit-horizon'
					className='flex min-h-11 items-center gap-2.5 border-2 border-transparent px-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] [color:var(--mute)] hover:border-[var(--ink)] hover:[color:var(--ink)]'
				>
					<Settings className='h-4 w-4 shrink-0' aria-hidden />
					Settings
				</Link>
			</div>
		</aside>
	)
}
