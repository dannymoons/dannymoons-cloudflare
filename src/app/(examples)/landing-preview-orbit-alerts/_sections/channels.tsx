'use client'

import { Hash, Mail, MessageSquare, Webhook } from 'lucide-react'
import { useState } from 'react'

/** Future Payload mapping: channels (block). */
const CHANNELS = [
	{
		id: 'email',
		label: 'Email',
		icon: Mail,
		enabled: true,
		target: 'team@acme.com'
	},
	{
		id: 'slack',
		label: 'Slack',
		icon: Hash,
		enabled: true,
		target: '#sustainability'
	},
	{
		id: 'webhook',
		label: 'Webhook',
		icon: Webhook,
		enabled: true,
		target: 'hooks.acme.com/orbit'
	},
	{
		id: 'sms',
		label: 'SMS',
		icon: MessageSquare,
		enabled: false,
		target: 'Not configured'
	}
]

export function Channels() {
	const [channels, setChannels] = useState(CHANNELS)

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Notification channels
			</h2>
			<ul className='grid gap-3 sm:grid-cols-2'>
				{channels.map(ch => {
					const Icon = ch.icon
					return (
						<li
							key={ch.id}
							className='flex items-start gap-3 rounded-xl border border-[var(--line)] p-3 [background:var(--surface)]'
						>
							<span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg [background:color-mix(in_oklch,var(--orbit)_12%,transparent)]'>
								<Icon className='h-4 w-4 [color:var(--orbit)]' />
							</span>
							<div className='min-w-0 flex-1'>
								<div className='flex items-center justify-between gap-2'>
									<span className='font-medium text-xs'>{ch.label}</span>
									<button
										type='button'
										role='switch'
										aria-checked={ch.enabled}
										onClick={() =>
											setChannels(prev =>
												prev.map(c =>
													c.id === ch.id ? { ...c, enabled: !c.enabled } : c
												)
											)
										}
										className={`relative h-5 w-9 shrink-0 rounded-full ${
											ch.enabled
												? '[background:var(--orbit)]'
												: '[background:var(--panel)]'
										}`}
									>
										<span
											className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
												ch.enabled ? 'left-4' : 'left-0.5'
											}`}
										/>
									</button>
								</div>
								<p className='mt-1 truncate text-[11px] [color:var(--mute)]'>
									{ch.target}
								</p>
							</div>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
