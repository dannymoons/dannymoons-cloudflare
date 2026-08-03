import { Bell, ChevronDown, Search, Terminal } from 'lucide-react'

/** Future Payload mapping: topbar (global). */
export function AppTopbar({ title, site }: { title: string; site: string }) {
	return (
		<header className='sticky top-0 z-20 flex flex-wrap items-center gap-3 border-[var(--line)] border-b px-4 py-3 backdrop-blur-sm [background:color-mix(in_oklch,var(--panel)_88%,transparent)] sm:px-6'>
			<div className='flex min-w-0 items-center gap-2 lg:hidden'>
				<Terminal
					className='h-4 w-4 shrink-0 [color:var(--lime)]'
					aria-hidden
				/>
				<span className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Signal
				</span>
			</div>
			<div className='hidden min-w-0 flex-1 lg:block'>
				<h1 className='font-[family-name:var(--font-display)] font-semibold text-base tracking-tight sm:text-lg'>
					{title}
				</h1>
				<p className='truncate font-[family-name:var(--font-body)] text-[11px] [color:var(--mute)]'>
					{site}
				</p>
			</div>
			<div className='relative min-w-0 flex-1 sm:max-w-sm lg:flex-none'>
				<Search
					className='pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 [color:var(--mute)]'
					aria-hidden
				/>
				<input
					type='search'
					placeholder='Search endpoints, events…'
					className='h-9 w-full rounded border border-[var(--line)] bg-transparent pr-3 pl-9 font-[family-name:var(--font-body)] text-[11px] outline-none focus:border-[color-mix(in_oklch,var(--lime)_40%,var(--line))] placeholder:[color:var(--mute)]'
					aria-label='Search endpoints and events'
				/>
			</div>
			<p className='hidden truncate font-[family-name:var(--font-body)] text-[11px] [color:var(--mute)] sm:block lg:hidden'>
				{site}
			</p>
			<div className='flex items-center gap-2'>
				<button
					type='button'
					className='relative flex h-9 w-9 items-center justify-center rounded border border-[var(--line)] [color:var(--mute)] hover:[color:var(--lime)]'
					aria-label='Notifications (3 unread)'
				>
					<Bell className='h-4 w-4' />
					<span className='absolute top-1.5 right-1.5 h-2 w-2 rounded-full [background:var(--danger)]' />
				</button>
				<button
					type='button'
					className='flex items-center gap-2 rounded border border-[var(--line)] py-1 pr-2 pl-1 hover:border-[color-mix(in_oklch,var(--violet)_35%,var(--line))]'
					aria-label='Account menu'
				>
					<span className='flex h-7 w-7 items-center justify-center rounded font-[family-name:var(--font-body)] text-[10px] [background:color-mix(in_oklch,var(--violet)_18%,transparent)] [color:var(--violet)]'>
						DK
					</span>
					<ChevronDown
						className='hidden h-3.5 w-3.5 [color:var(--mute)] sm:block'
						aria-hidden
					/>
				</button>
			</div>
		</header>
	)
}
