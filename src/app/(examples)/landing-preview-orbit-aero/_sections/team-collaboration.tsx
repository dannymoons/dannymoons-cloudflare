import { Code2, Eye, Users } from 'lucide-react'

const roles = [
	{
		icon: Users,
		role: 'Strategist',
		access: 'Full workspace',
		desc: 'Manage client portfolios, set carbon budgets, approve reports, and configure widget embeds for delivery teams.',
		permissions: [
			'All client sites',
			'Report scheduling',
			'Grade thresholds',
			'Team invites'
		]
	},
	{
		icon: Code2,
		role: 'Developer',
		access: 'Technical view',
		desc: 'Page-level breakdowns, API keys, webhook setup, and badge snippet generation — without billing or client comms.',
		permissions: [
			'Page diagnostics',
			'API & webhooks',
			'Widget snippets',
			'Budget alerts'
		]
	},
	{
		icon: Eye,
		role: 'Client viewer',
		access: 'Read-only portal',
		desc: 'Branded client portal with grades, trends, and downloadable reports — no access to other agency clients or settings.',
		permissions: [
			'Own site data',
			'PDF downloads',
			'Grade history',
			'Widget preview'
		]
	}
]

/** Future Payload mapping: teamCollaborationRoles. */
export function TeamCollaboration() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-12 max-w-2xl'>
					<span className='oa-reveal mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						Team collaboration
					</span>
					<h2 className='oa-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Roles for every seat at the table
					</h2>
					<p className='oa-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
						Strategists own the portfolio, developers tune performance, and
						clients get a read-only portal — granular permissions without
						spreadsheet chaos.
					</p>
				</div>

				<div className='grid gap-4 md:grid-cols-3'>
					{roles.map(r => (
						<article
							key={r.role}
							className='oa-reveal flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white/70 p-6 backdrop-blur-xl'
						>
							<span className='grid h-11 w-11 place-items-center rounded-xl border border-[color-mix(in_oklch,var(--blue)_25%,transparent)] bg-white/80 [color:var(--blue)]'>
								<r.icon className='h-5 w-5' />
							</span>
							<h3 className='mt-5 font-[family-name:var(--font-display)] font-bold text-xl'>
								{r.role}
							</h3>
							<p className='mt-1 font-medium text-xs uppercase tracking-widest [color:var(--cyan)]'>
								{r.access}
							</p>
							<p className='mt-3 flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								{r.desc}
							</p>
							<ul className='mt-6 space-y-2 border-[var(--line)] border-t pt-5'>
								{r.permissions.map(p => (
									<li
										key={p}
										className='flex items-center gap-2 text-xs [color:var(--mute)]'
									>
										<span className='h-1 w-1 shrink-0 rounded-full [background:var(--cyan)]' />
										{p}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
