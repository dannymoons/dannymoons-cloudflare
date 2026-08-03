/** Future Payload mapping: webhooks (payload example). */
export function Webhooks() {
	return (
		<section id='webhooks' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start'>
					<div>
						<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							Webhooks
						</span>
						<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Push carbon alerts
						</h2>
						<p className='osg-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							Register a webhook URL and receive signed POST payloads when pages
							exceed carbon budgets, new assets spike emissions, or scans
							complete.
						</p>
						<ul className='osg-reveal mt-6 space-y-2 font-[family-name:var(--font-body)] text-sm [color:var(--mute)]'>
							<li>
								<span className='[color:var(--violet)]'>→</span> HMAC-SHA256
								signature verification
							</li>
							<li>
								<span className='[color:var(--violet)]'>→</span> Automatic
								retries with exponential backoff
							</li>
							<li>
								<span className='[color:var(--violet)]'>→</span> Event filtering
								by type and threshold
							</li>
						</ul>
					</div>

					<div className='osg-reveal overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
						<div className='flex items-center gap-2 border-[var(--line)] border-b px-4 py-2.5'>
							<span className='h-2 w-2 rounded-full [background:oklch(0.55_0.15_25)]' />
							<span className='h-2 w-2 rounded-full [background:oklch(0.7_0.12_85)]' />
							<span className='h-2 w-2 rounded-full [background:oklch(0.65_0.12_145)]' />
							<span className='ml-2 font-[family-name:var(--font-body)] text-[10px] uppercase tracking-widest [color:var(--mute)]'>
								POST webhook payload
							</span>
						</div>
						<pre className='overflow-x-auto p-4 font-[family-name:var(--font-body)] text-xs leading-relaxed sm:p-6'>
							<code>{`{
  "id": "evt_8f2k9m1n",
  "type": "carbon.budget.exceeded",
  "created": "2025-12-08T14:32:01Z",
  "site": "acme.com",
  "data": {
    "path": "/pricing",
    "co2_grams": 0.52,
    "budget_grams": 0.45,
    "overage_pct": 15.6,
    "trigger": "page_view"
  },
  "signature": "sha256=4a7f..."
}`}</code>
						</pre>
					</div>
				</div>
			</div>
		</section>
	)
}
