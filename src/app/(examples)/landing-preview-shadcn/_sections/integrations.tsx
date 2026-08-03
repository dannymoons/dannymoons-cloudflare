import {
	GitBranch,
	Hash,
	PenTool,
	Globe,
	Mail,
	Calendar,
	Database,
	Webhook
} from 'lucide-react'

const apps = [
	{ icon: GitBranch, name: 'GitHub' },
	{ icon: Hash, name: 'Slack' },
	{ icon: PenTool, name: 'Figma' },
	{ icon: Globe, name: 'Browser' },
	{ icon: Mail, name: 'Email' },
	{ icon: Calendar, name: 'Calendar' },
	{ icon: Database, name: 'Postgres' },
	{ icon: Webhook, name: 'Webhooks' }
]

/** Future Payload mapping: integrationGrid. */
export function Integrations() {
	return (
		<section className='border-border border-y bg-muted/30'>
			<div className='mx-auto max-w-6xl px-gutter py-section'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='font-semibold text-3xl tracking-tight sm:text-4xl'>
						Connects to your stack
					</h2>
					<p className='mt-4 text-muted-foreground leading-relaxed'>
						Over 80 native integrations and a full REST + webhooks API.
					</p>
				</div>
				<div className='mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4'>
					{apps.map(a => {
						const Icon = a.icon
						return (
							<div
								key={a.name}
								className='flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:bg-muted'
							>
								<Icon className='h-5 w-5 text-foreground' />
								<span className='font-medium text-sm'>{a.name}</span>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
