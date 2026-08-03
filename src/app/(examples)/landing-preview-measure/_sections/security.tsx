import { Key, Lock, ShieldCheck, UserCheck } from 'lucide-react'

const features = [
	{
		icon: ShieldCheck,
		title: 'SOC 2 Type II',
		desc: 'Annual third-party audits with continuous control monitoring.'
	},
	{
		icon: Lock,
		title: 'Encryption at rest & in transit',
		desc: 'AES-256 storage, TLS 1.3 in transit, customer-managed keys on Enterprise.'
	},
	{
		icon: UserCheck,
		title: 'Role-based access',
		desc: 'Granular permissions for CMO, agency, auditor, and read-only stakeholder roles.'
	},
	{
		icon: Key,
		title: 'SSO & SCIM',
		desc: 'Okta, Azure AD, and Google Workspace with automated user provisioning.'
	}
]

/** Future Payload mapping: securityFeatures. */
export function Security() {
	return (
		<section id='security' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Security &amp; compliance
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Enterprise-grade from day one.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Your emissions data is as sensitive as your financials. Measure is
						built to the standards your InfoSec team expects.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
					{features.map(f => (
						<article
							key={f.title}
							className='me-reveal rounded-sm border border-[var(--line)] p-6'
						>
							<f.icon
								className='h-5 w-5 [color:var(--blue)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-lg [color:var(--ink)]'>
								{f.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{f.desc}
							</p>
						</article>
					))}
				</div>

				<div className='me-reveal mt-10 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
					<span className='rounded-sm border border-[var(--line)] px-3 py-1.5'>
						GDPR
					</span>
					<span className='rounded-sm border border-[var(--line)] px-3 py-1.5'>
						ISO 27001
					</span>
					<span className='rounded-sm border border-[var(--line)] px-3 py-1.5'>
						GHG Protocol
					</span>
					<span className='rounded-sm border border-[var(--line)] px-3 py-1.5'>
						CSRD aligned
					</span>
				</div>
			</div>
		</section>
	)
}
