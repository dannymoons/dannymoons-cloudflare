import { Bell, ChevronDown, Search } from 'lucide-react'

/** Future Payload mapping: topbar (global). */
export function AppTopbar({ title, site }: { title: string; site: string }) {
	return (
		<header className='sticky top-0 z-20 flex flex-wrap items-center gap-3 border-[var(--stroke)] border-b-2 px-4 py-3 [background:var(--parchment)] sm:px-6'>
			<div className='min-w-0 flex-1'>
				<p className='font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] [color:var(--olive)]'>
					Carbon console
				</p>
				<h1 className='font-[family-name:var(--font-display)] font-semibold text-base tracking-tight sm:text-lg'>
					{title}
				</h1>
				<p className='truncate font-[family-name:var(--font-mono)] text-[11px] [color:var(--mute)]'>
					{site}
				</p>
			</div>
			<div className='relative hidden min-w-[200px] flex-1 sm:block sm:max-w-xs'>
				<Search
					className='pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 [color:var(--mute)]'
					aria-hidden
				/>
				<input
					type='search'
					placeholder='Search pages, paths…'
					className='h-10 w-full border-2 border-[var(--stroke)] pr-3 pl-9 font-[family-name:var(--font-mono)] text-xs outline-none [background:var(--panel)] focus:border-[var(--stroke-strong)] focus:shadow-[3px_3px_0_var(--shadow)]'
					aria-label='Search dashboard'
				/>
			</div>
			<div className='flex items-center gap-2'>
				<button
					type='button'
					className='relative flex h-10 w-10 items-center justify-center border-2 border-[var(--stroke)] [background:var(--panel)] [color:var(--mute)] hover:border-[var(--stroke-strong)] hover:shadow-[3px_3px_0_var(--shadow)] hover:[color:var(--ink)]'
					aria-label='Notifications (2 unread)'
				>
					<Bell className='h-4 w-4' />
					<span className='absolute top-1.5 right-1.5 h-2 w-2 [background:var(--danger)]' />
				</button>
				<button
					type='button'
					className='flex items-center gap-2 border-2 border-[var(--stroke)] py-1 pr-2 pl-1 [background:var(--panel)] hover:border-[var(--stroke-strong)] hover:shadow-[3px_3px_0_var(--shadow)]'
					aria-label='Account menu'
				>
					<span className='flex h-7 w-7 items-center justify-center border border-[var(--stroke-strong)] font-[family-name:var(--font-display)] font-semibold text-[10px] [background:color-mix(in_oklch,var(--olive)_20%,var(--panel))] [color:var(--sage)]'>
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
