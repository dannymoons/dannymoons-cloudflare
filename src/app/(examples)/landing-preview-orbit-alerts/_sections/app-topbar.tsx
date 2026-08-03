import { Bell, ChevronDown, Search } from 'lucide-react'

/** Future Payload mapping: topbar (global). */
export function AppTopbar({ title, site }: { title: string; site: string }) {
	return (
		<header className='sticky top-0 z-20 flex flex-wrap items-center gap-3 border-[var(--line)] border-b px-4 py-3 backdrop-blur-sm [background:color-mix(in_oklch,var(--panel)_85%,transparent)] sm:px-6'>
			<div className='min-w-0 flex-1'>
				<h1 className='font-[family-name:var(--font-display)] font-semibold text-base tracking-tight sm:text-lg'>
					{title}
				</h1>
				<p className='truncate text-[11px] [color:var(--mute)]'>{site}</p>
			</div>
			<div className='relative hidden min-w-[200px] flex-1 sm:block sm:max-w-xs'>
				<Search
					className='pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 [color:var(--mute)]'
					aria-hidden
				/>
				<input
					type='search'
					placeholder='Search rules…'
					className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent pr-3 pl-9 text-xs outline-none focus:border-[color-mix(in_oklch,var(--orbit)_40%,var(--line))]'
					aria-label='Search alert rules'
				/>
			</div>
			<div className='flex items-center gap-2'>
				<button
					type='button'
					className='relative flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] [color:var(--mute)] hover:[background:var(--surface)] hover:[color:var(--text)]'
					aria-label='Notifications (2 unread)'
				>
					<Bell className='h-4 w-4' />
					<span className='absolute top-1.5 right-1.5 h-2 w-2 rounded-full [background:var(--danger)]' />
				</button>
				<button
					type='button'
					className='flex items-center gap-2 rounded-lg border border-[var(--line)] py-1 pr-2 pl-1 hover:[background:var(--surface)]'
					aria-label='Account menu'
				>
					<span className='flex h-7 w-7 items-center justify-center rounded-md font-[family-name:var(--font-display)] font-semibold text-[10px] [background:var(--surface)]'>
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
