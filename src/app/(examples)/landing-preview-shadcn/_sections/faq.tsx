const faqs = [
	{
		q: 'Can I import from Jira or Linear?',
		a: 'Yes — one-click importers bring over issues, comments, labels and attachments with history intact.'
	},
	{
		q: 'Is there a free plan?',
		a: 'Free forever for teams up to 10 members, with unlimited issues and two projects.'
	},
	{
		q: 'How does AI triage work?',
		a: 'Incoming issues are auto-labelled, deduped against existing ones and routed to the right owner. You stay in control of every suggestion.'
	},
	{
		q: 'Do you offer SSO?',
		a: 'SAML and SCIM provisioning are available on the Enterprise plan, alongside audit logs and a custom SLA.'
	},
	{
		q: 'Where is my data hosted?',
		a: 'In the EU or US region of your choice, encrypted at rest and in transit, with daily backups.'
	}
]

/** Future Payload mapping: faqList. */
export function Faq() {
	return (
		<section className='mx-auto max-w-3xl px-gutter py-section'>
			<div className='text-center'>
				<h2 className='font-semibold text-3xl tracking-tight sm:text-4xl'>
					Frequently asked questions
				</h2>
			</div>
			<div className='mt-10'>
				{faqs.map(f => (
					<details key={f.q} className='group border-border border-b py-5'>
						<summary className='flex cursor-pointer list-none items-center justify-between gap-6 font-medium'>
							{f.q}
							<span className='text-muted-foreground text-xl transition-transform duration-300 group-open:rotate-45'>
								+
							</span>
						</summary>
						<p className='mt-3 text-muted-foreground leading-relaxed'>{f.a}</p>
					</details>
				))}
			</div>
		</section>
	)
}
