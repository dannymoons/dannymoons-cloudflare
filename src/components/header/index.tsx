import Link from 'next/link'

import type { Header as HeaderType, Media as MediaType, Setting } from '@/payload-types'

import { Header as HeaderShell } from '@/components/header/header'
import { Navbar, NavbarActions, NavbarBrand, NavbarContent } from '@/components/header/navbar'
import { Nav } from '@/components/header/nav'
import { MobileMenu } from '@/components/header/mobile-menu'
import { Logo } from '@/components/brand/logo'
import { Wordmark } from '@/components/brand/wordmark'
import { CMSLink } from '@/components/content/cms-link'
import { LocaleSwitcher } from '@/components/content/locale-switcher'
import { Container } from '@/components/layout/container'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { localizePath, type Locale } from '@/utilities/locale'

function Brand({
	logo,
	siteName,
	href
}: {
	logo?: HeaderType['logo']
	siteName: string
	href: string
}) {
	const media = typeof logo === 'object' && logo !== null ? (logo as MediaType) : null

	return (
		<Link href={href} className='flex items-center gap-2.5' aria-label={siteName}>
			{media?.url ? (
				<Logo src={media.url} alt={media.alt || siteName} size='sm' priority='high' />
			) : (
				<Wordmark name={siteName} size='lg' />
			)}
		</Link>
	)
}

export async function SiteHeader({ locale }: { locale: Locale }) {
	const [header, settings] = await Promise.all([
		getCachedGlobal('header', locale, 1)() as Promise<HeaderType>,
		getCachedGlobal('settings', locale, 1)() as Promise<Setting>
	])

	const siteName = settings?.siteName || 'Payload Starter'
	const navItems = header?.navItems ?? []
	const homeHref = localizePath('/', locale)
	const cta = header?.cta

	return (
		<HeaderShell border='glass'>
			<Container size='wide' padding='none'>
				<Navbar>
					<NavbarBrand>
						<Brand logo={header?.logo} siteName={siteName} href={homeHref} />
					</NavbarBrand>

					<NavbarContent className='justify-center'>
						<Nav aria-label='Primary'>
							{navItems.map((item, i) => (
								<CMSLink
									key={item.id ?? i}
									{...item.link}
									locale={locale}
									appearance='inline'
									className='px-3 py-1.5 font-medium text-foreground/70 text-sm transition-colors hover:text-foreground'
								/>
							))}
						</Nav>
					</NavbarContent>

					<NavbarActions>
						<LocaleSwitcher locale={locale} />
						{cta?.enabled && cta.link ? (
							<CMSLink
								{...cta.link}
								locale={locale}
								appearance={cta.link.appearance === 'outline' ? 'ghost' : 'primary'}
								size='sm'
								className='hidden sm:inline-flex'
							/>
						) : null}
						<MobileMenu>
							<Nav orientation='vertical'>
								{navItems.map((item, i) => (
									<CMSLink
										key={item.id ?? i}
										{...item.link}
										locale={locale}
										appearance='inline'
										className='px-3 py-2 font-medium text-foreground/80 text-sm transition-colors hover:text-foreground'
									/>
								))}
								{cta?.enabled && cta.link ? (
									<CMSLink
										{...cta.link}
										locale={locale}
										appearance='primary'
										size='sm'
										className='mt-2'
									/>
								) : null}
							</Nav>
						</MobileMenu>
					</NavbarActions>
				</Navbar>
			</Container>
		</HeaderShell>
	)
}
