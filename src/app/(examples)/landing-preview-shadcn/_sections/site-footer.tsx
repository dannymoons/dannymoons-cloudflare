import { Box } from 'lucide-react'

const columns = [
	{
		title: 'Product',
		links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap']
	},
	{
		title: 'Company',
		links: ['About', 'Blog', 'Careers', 'Customers', 'Contact']
	},
	{
		title: 'Resources',
		links: ['Docs', 'API', 'Status', 'Community', 'Security']
	},
	{ title: 'Legal', links: ['Privacy', 'Terms', 'DPA', 'Cookies'] }
]

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-border border-t bg-muted/20'>
			<div className='mx-auto max-w-6xl px-gutter py-section-sm'>
				<div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5'>
					<div className='col-span-2 sm:col-span-3 lg:col-span-1'>
						<a
							href='#top'
							className='flex items-center gap-2 font-semibold tracking-tight'
						>
							<span className='grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground'>
								<Box className='h-4 w-4' />
							</span>
							Trace
						</a>
						<p className='mt-3 max-w-xs text-muted-foreground text-sm leading-relaxed'>
							Issue tracking that keeps up with modern software teams.
						</p>
					</div>
					{columns.map(col => (
						<div key={col.title}>
							<h4 className='font-medium text-sm'>{col.title}</h4>
							<ul className='mt-3 flex flex-col gap-2'>
								{col.links.map(l => (
									<li key={l}>
										<a
											href='#top'
											className='text-muted-foreground text-sm transition-colors hover:text-foreground'
										>
											{l}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className='mt-10 flex flex-col items-center justify-between gap-3 border-border border-t pt-6 text-muted-foreground text-sm sm:flex-row'>
					<span>© {new Date().getFullYear()} Trace Labs, Inc.</span>
					<span>Concept preview</span>
				</div>
			</div>
		</footer>
	)
}
