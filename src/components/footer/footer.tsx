import Link from 'next/link'

import type { Footer as FooterType, Setting } from '@/payload-types'

import { FooterColumn } from '@/components/footer/footer-columns'
import { FooterLinks } from '@/components/footer/footer-links'
import {
	FooterCopyright,
	FooterCredits,
	FooterSocialLinks
} from '@/components/footer/footer-credits'
import { Wordmark } from '@/components/brand/wordmark'
import { CMSLink } from '@/components/content/cms-link'
import { Container } from '@/components/layout/container'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { localizePath, type Locale } from '@/utilities/locale'

export async function Footer({ locale }: { locale: Locale }) {
	const [footer, settings] = await Promise.all([
		getCachedGlobal('footer', locale, 1)() as Promise<FooterType>,
		getCachedGlobal('settings', locale, 1)() as Promise<Setting>
	])

	const siteName = settings?.siteName || 'Payload Starter'
	const columns = footer?.columns ?? []
	const socialLinks = footer?.socialLinks ?? []

	return (
		<footer className='border-border border-t bg-surface pt-16 pb-8'>
			<Container size='wide'>
				<div className='mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
					<div className='flex flex-col gap-4'>
						<Link href={localizePath('/', locale)} aria-label={siteName}>
							<Wordmark name={siteName} size='lg' />
						</Link>
						{footer?.description ? (
							<p className='max-w-xs text-muted-foreground text-sm leading-relaxed'>
								{footer.description}
							</p>
						) : null}
					</div>

					{columns.map((column, i) => (
						<FooterColumn key={column.id ?? i} title={column.label}>
							<FooterLinks>
								{(column.navItems ?? []).map((item, j) => (
									<li key={item.id ?? j} data-slot='footer-link'>
										<CMSLink
											{...item.link}
											locale={locale}
											appearance='inline'
											className='text-muted-foreground text-sm transition-colors hover:text-foreground'
										/>
									</li>
								))}
							</FooterLinks>
						</FooterColumn>
					))}
				</div>

				<FooterCredits className='border-border border-t'>
					<FooterCopyright companyName={siteName} className='text-muted-foreground' />
					{socialLinks.length > 0 ? (
						<FooterSocialLinks>
							{socialLinks.map((social, i) => (
								<a
									key={social.id ?? i}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='rounded-md border border-border px-3 py-1.5 text-muted-foreground text-xs transition-colors hover:text-foreground'
								>
									{social.label}
								</a>
							))}
						</FooterSocialLinks>
					) : null}
				</FooterCredits>
			</Container>
		</footer>
	)
}
