import type { Metadata } from 'next'
import type { CSSProperties } from 'react'

import { HeroCompact } from '@/components/sections/hero/hero-compact'
import { HeroCover } from '@/components/sections/hero/hero-cover'
import { HeroSplitMedia } from '@/components/sections/hero/hero-split-media'
import { HeroStatementText } from '@/components/sections/hero/hero-statement-text'
import { IconBoxesSection } from '@/components/sections/icon-boxes-section'
import { FeatureBoxesSection } from '@/components/sections/feature-boxes-section'
import { UspSection } from '@/components/sections/usp-section'
import { StepsSection } from '@/components/sections/steps-section'
import { StatsSection } from '@/components/sections/stats-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { TeamSection } from '@/components/sections/team-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { LogoCloudSection } from '@/components/sections/logo-cloud-section'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { ArchiveSection } from '@/components/sections/archive-section'
import { CardsOpenSection } from '@/components/sections/cards-open-section'
import { CardsOverlaySection } from '@/components/sections/cards-overlay-section'
import { ImageFeaturesSection } from '@/components/sections/image-features-section'
import { PureContentSection } from '@/components/sections/pure-content-section'
import { TextImageSection } from '@/components/sections/text-image-section'
import { Container } from '@/components/layout/container'

export const metadata: Metadata = {
	title: 'Sectie-preview — Payload Starter',
	description:
		'Statische voorbeeldcontent voor alle landingssecties vóór koppeling met Payload-blocks.'
}

/** Zelfde design tokens als `landing-preview-emerald` voor consistente kleuren met die variant. */
const emeraldTheme = {
	'--background': '#ffffff',
	'--foreground': 'oklch(0.22 0.04 180)',
	'--surface': 'oklch(0.96 0.018 175)',
	'--elevated': 'oklch(1 0 0)',
	'--muted': 'oklch(0.94 0.020 175)',
	'--muted-foreground': 'oklch(0.46 0.04 180)',
	'--primary': 'oklch(0.54 0.09 170)',
	'--primary-foreground': 'oklch(0.99 0.005 175)',
	'--primary-light': 'oklch(0.82 0.06 170)',
	'--primary-dark': 'oklch(0.36 0.08 170)',
	'--secondary': 'oklch(0.86 0.06 245)',
	'--secondary-foreground': 'oklch(0.32 0.08 245)',
	'--secondary-light': 'oklch(0.94 0.03 245)',
	'--secondary-dark': 'oklch(0.58 0.11 245)',
	'--card': 'oklch(1 0 0)',
	'--card-foreground': 'oklch(0.22 0.04 180)',
	'--popover': 'oklch(1 0 0)',
	'--popover-foreground': 'oklch(0.22 0.04 180)',
	'--accent': 'oklch(0.93 0.04 175)',
	'--accent-foreground': 'oklch(0.30 0.06 180)',
	'--border': 'oklch(0.88 0.022 175)',
	'--input': 'oklch(0.88 0.022 175)',
	'--ring': 'oklch(0.54 0.09 170)',
	'--radius': '0.6rem'
} as CSSProperties

const IMG = 'https://picsum.photos/seed/payload-starter/900/700'
const LOGO = 'https://placehold.co/140x44/e2e8f0/475569/png?text=Logo'

export default function SectionsPreviewPage() {
	return (
		<div
			style={emeraldTheme}
			className='min-h-screen bg-background text-foreground'
		>
			<div className='border-b bg-muted/40 py-6'>
				<Container>
					<p className='text-muted-foreground text-sm'>
						<strong className='text-foreground'>Sectie-preview</strong> — dummy
						data. Blocks in{' '}
						<code className='rounded bg-muted px-1 py-0.5 text-xs'>
							src/blocks
						</code>{' '}
						renderen deze secties met echte CMS-velden.
					</p>
				</Container>
			</div>

			<div id='hero-statement-text'>
				<HeroStatementText
					eyebrow='HeroStatementText'
					heading='Begrijp uw duizeligheid'
					content='Lees wat u kunt verwachten, hoe diagnostiek werkt, en wanneer u hulp zoekt.'
					primaryCta={{ label: 'Maak een afspraak', href: '#' }}
					secondaryCta={{ label: 'Lees meer', href: '#', variant: 'secondary' }}
					stats={[
						{ icon: 'users', value: '250+', label: 'Behandelingen per jaar' },
						{ icon: 'clock', value: '48u', label: 'Reactietijd gemiddeld' },
						{ icon: 'shield-check', value: 'NHG', label: 'Richtlijnconform' }
					]}
				/>
			</div>

			<div id='hero-split-media'>
				<HeroSplitMedia
					eyebrow='HeroSplitMedia'
					heading='Samenwerkingsverband'
					content='Eén doorverwijslijn voor patiënten met complexe vestibulaire klachten.'
					primaryCta={{ label: 'Neem contact op', href: '#' }}
					secondaryCta={{
						label: 'Download folder',
						href: '#',
						variant: 'secondary'
					}}
					image={IMG}
					imageAlt='Illustratieve foto balans en beweging'
					imagePosition='right'
				/>
			</div>

			<div id='hero-compact'>
				<HeroCompact
					eyebrow='HeroCompact'
					heading='BPPD: wat is dat?'
					content='Een korte uitleg over goedaardige prikkelingsdruizeligheid en behandeling.'
					breadcrumbs={[
						{ label: 'Home', href: '/' },
						{ label: 'Aandoeningen', href: '#' },
						{ label: 'BPPD' }
					]}
				/>
			</div>

			<div id='hero-cover-full-center'>
				<HeroCover
					eyebrow='HeroCover — full / center-center'
					height='lg'
					heading='Zorg dichtbij'
					subheading='Volledige breedte, tekst gecentreerd op de foto.'
					variant='full-bleed'
					contentPosition='center-center'
					image={IMG}
					imageAlt='Sfeerbeeld zorg en aandacht'
					primaryCta={{ label: 'Afspraak maken', href: '#' }}
					secondaryCta={{
						label: 'Meer informatie',
						href: '#',
						variant: 'secondary'
					}}
				/>
			</div>

			<div id='hero-cover-full-left-center'>
				<HeroCover
					eyebrow='HeroCover — full / left-center'
					height='lg'
					heading='Vestibulaire zorg'
					subheading='Tekst links, verticaal gecentreerd — geschikt voor langere introregels.'
					variant='full-bleed'
					contentPosition='left-center'
					image={IMG}
					imageAlt='Team in overleg'
					primaryCta={{ label: 'Contact', href: '#' }}
					secondaryCta={{ label: 'Folder', href: '#', variant: 'secondary' }}
				/>
			</div>

			<div id='hero-cover-full-left-bottom'>
				<HeroCover
					eyebrow='HeroCover — full / left-bottom'
					height='lg'
					heading='Samen naar balans'
					subheading='Tekst onderaan — vaak gebruikt met veel lucht boven de fold.'
					variant='full-bleed'
					contentPosition='left-bottom'
					image={IMG}
					imageAlt='Rustige omgeving'
					primaryCta={{ label: 'Start intake', href: '#' }}
					secondaryCta={{
						label: 'Bekijk aanpak',
						href: '#',
						variant: 'secondary'
					}}
				/>
			</div>

			<div id='hero-cover-container'>
				<HeroCover
					eyebrow='HeroCover — container / center-center'
					height='lg'
					heading='In het hart van de regio'
					subheading='Afgeronde “kaart” binnen de contentbreedte i.p.v. volledige viewportbreedte.'
					variant='container'
					contentPosition='center-center'
					image={IMG}
					imageAlt='Gebouw en omgeving'
					primaryCta={{ label: 'Routebeschrijving', href: '#' }}
					secondaryCta={{ label: 'Parkeren', href: '#', variant: 'secondary' }}
				/>
			</div>

			<IconBoxesSection
				eyebrow='Waarom wij'
				heading='Een gerichte aanpak'
				paragraph='We combineren anamnese, bedside tests en audiovestibulaire diagnostiek waar nodig.'
				items={[
					{
						icon: 'brain',
						heading: 'Vestibulair onderzoek',
						text: 'Differentiatie tussen perifeer en centraal met duidelijke uitleg.'
					},
					{
						icon: 'shield-check',
						heading: 'Evidence-based',
						text: 'Behandelpaden afgestemd op richtlijnen en actuele literatuur.'
					},
					{
						icon: 'message-circle',
						heading: 'Begrijpelijke communicatie',
						text: 'U gaat naar huis met heldere stappen en verwachtingen.'
					}
				]}
				background='surface'
			/>

			<FeatureBoxesSection
				eyebrow='Traject'
				heading='Van intake tot nabespreking'
				paragraph='Zo bouwen we uw dossier stap voor stap op.'
				cols={3}
				items={[
					{
						icon: 'clipboard',
						heading: 'Intake',
						subtitle: 'Stap 1',
						description:
							'Uitgebreide duizeligheidsanamnese en risico-inschatting.'
					},
					{
						icon: 'activity',
						heading: 'Onderzoek',
						subtitle: 'Stap 2',
						description:
							'Functionele tests gericht op het vestibulaire systeem.'
					},
					{
						icon: 'check-circle',
						heading: 'Plan',
						subtitle: 'Stap 3',
						description: 'Behandeling, oefentherapie of verdere verwijzing.'
					}
				]}
			/>

			<UspSection
				eyebrow='Waarom nu'
				heading='Sneller klare wijn'
				content='Minder pingpong tussen huisarts, KNO en fysio — meer focus op uw klacht.'
				benefits={[
					'Heldere verschill tussen spinning en licht hoofd.',
					'Concrete oefeningen waar dat zinvol is.',
					'Documentatie voor uw behandelaars.'
				]}
				stats={[
					{ value: '92%', label: 'Tevreden na eerste consult' },
					{ value: '15 min', label: 'Gemiddelde wachttijd telefoon' }
				]}
				tags={[{ label: 'Zorgverzekeraars' }, { label: 'Eerstelijns' }]}
				primaryCta={{ label: 'Plan een consult', href: '#' }}
				secondaryCta={{
					label: 'Stel een vraag',
					href: '#',
					variant: 'outline'
				}}
				background='elevated'
			/>

			<StepsSection
				eyebrow='Hoe het werkt'
				heading='Drie eenvoudige stappen'
				paragraph='Van aanmelding tot vervolg — u weet waar u aan toe bent.'
				steps={[
					{
						number: '01',
						title: 'Aanmelden',
						description:
							'Online of telefonisch; we plannen bij voorkeur binnen tien werkdagen.'
					},
					{
						number: '02',
						title: 'Onderzoek',
						description: 'Consult op locatie inclusief bedside tests.'
					},
					{
						number: '03',
						title: 'Vervolg',
						description:
							'Verslag naar verwijzer en afspraak fysio of controle waar nodig.'
					}
				]}
				background='default'
			/>

			<StatsSection
				eyebrow='Impact'
				heading='Waarden die tellen'
				variant='row'
				items={[
					{ icon: 'users', value: '1.200+', label: 'Patiënten geholpen' },
					{
						icon: 'calendar',
						value: '12 jr',
						label: 'Specialisatie vestibular'
					},
					{ icon: 'star', value: '4,9', label: 'Gemiddelde beoordeling' }
				]}
				background='surface'
			/>

			<StatsSection
				variant='grid'
				items={[
					{ value: '30%', label: 'Minder episode-herhalen' },
					{ value: '2×', label: 'Sneller BPPD herstel' },
					{ value: '100%', label: 'Eigen verslag naar huis' },
					{ value: '24/7', label: 'Noodprotocol beschikbaar' }
				]}
				background='transparent'
			/>

			<TestimonialsSection
				eyebrow='Ervaringen'
				heading='Wat patiënten zeggen'
				background='elevated'
				items={[
					{
						quote:
							'Eindelijk snapte iemand het verschil tussen mijn hoofdduizeligheid en draaiduizeligheid.',
						name: 'Mirjam V.',
						role: 'BPPD, hersteld na repositionering',
						stars: 5
					},
					{
						quote:
							'Het stappenplan met oefeningen gaf vertrouwen om weer naar buiten te gaan.',
						name: 'Rob de J.',
						role: 'Vestibulaire migraine',
						stars: 5
					},
					{
						quote: 'Professioneel én menselijk — geen jargon zonder uitleg.',
						name: 'Sanne K.',
						role: 'MDDS',
						stars: 4
					}
				]}
			/>

			<TeamSection
				eyebrow='Het team'
				heading='Vestibulaire zorg onder één dak'
				paragraph='Artsen en therapeuten die structureel samenwerken.'
				members={[
					{
						name: 'Dr. A. Meijer',
						role: 'KNO-arts, vestibulair',
						bio: 'Focus op BPPD en chronische duizeligheid.'
					},
					{
						name: 'L. van Dijk',
						role: 'Fysiotherapeut FFV',
						bio: 'Oefentherapie en habituatie volgens richtlijn.'
					},
					{
						name: 'M. Scholten',
						role: 'Audioloog',
						bio: 'VNG en calorische testen.'
					}
				]}
				cols={3}
			/>

			<PricingSection
				eyebrow='Tarieven'
				heading='Transparante pakketten'
				paragraph='Voorbeelden — controleer altijd uw polisvoorwaarden.'
				plans={[
					{
						name: 'Intake',
						price: '€ 120',
						billingPeriod: 'per consult',
						description: 'Eerste consult incl. anamnese',
						features: [
							'30–45 min',
							'Schriftelijk verslag',
							'Advies aan verwijzer'
						],
						ctaLabel: 'Kies intake',
						ctaHref: '#'
					},
					{
						name: 'Behandeling',
						price: '€ 85',
						billingPeriod: 'per sessie',
						description: 'Repositionering of oefentherapie',
						features: ['Individueel', 'Huiswerkplan', 'E-mail support'],
						ctaLabel: 'Plan sessie',
						ctaHref: '#',
						highlighted: true
					},
					{
						name: 'Second opinion',
						price: '€ 195',
						billingPeriod: 'eenmalig',
						description: 'Uitgebreide dossierbeoordeling',
						features: [
							'Vooraf dossierupload',
							'Video of fysiek',
							'Uitgebreid advies'
						],
						ctaLabel: 'Aanvragen',
						ctaHref: '#'
					}
				]}
				background='surface'
			/>

			<LogoCloudSection
				heading='Samenwerkingen en certificeringen'
				background='elevated'
				logos={[
					{ name: 'Partner ziekenhuis', logoSrc: LOGO },
					{ name: 'Fysiopraktijk', logoSrc: LOGO },
					{ name: 'Huisartsenkoepel', logoSrc: LOGO }
				]}
			/>

			<FaqSection
				eyebrow='FAQ'
				heading='Veelgestelde vragen'
				paragraph='Korte antwoorden — tijdens een consult gaan we dieper.'
				layout='two-col'
				background='transparent'
				items={[
					{
						question: 'Moet ik een verwijzing hebben?',
						answer:
							'Voor verzekerde zorg geldt een verwijzing van de huisarts of specialist tenzij anders vermeld bij uw label.'
					},
					{
						question: 'Hoe snel wordt ik geholpen?',
						answer:
							'Gemiddelde wachttijd is 10 werkdagen; spoed wordt in overleg ingepland.'
					},
					{
						question: 'Wat neem ik mee naar het consult?',
						answer:
							'Eventueel eerdere beeldmateriaal (MRI/CT), medicatieoverzicht, en uw ID.'
					},
					{
						question: 'Helpt repositionering altijd?',
						answer:
							'Alleen bij bevestigde BPPD; bij andere diagnoses stellen we een ander plan voor.'
					}
				]}
			/>

			<CtaSection
				eyebrow='Klaar voor de volgende stap'
				heading='Maak een afspraak of stel uw vraag'
				paragraph='Ons secretariaat bereikt u binnen twee werkdagen terug.'
				variant='card'
				background='primary'
				primaryCta={{ label: 'Bel ons', href: 'tel:+31200000000' }}
				secondaryCta={{
					label: 'Stuur een e-mail',
					href: 'mailto:hello@example.com'
				}}
			/>

			<ArchiveSection
				eyebrow='Nieuws'
				heading='Laatste artikelen'
				posts={[
					{
						category: 'Vestibulair',
						title: 'Wat is een VNG en wanneer is het zinvol?',
						excerpt:
							'Een korte gids voor patiënten die doorverwezen worden voor vestibulaire videografie.',
						readMinutes: 6,
						href: '#',
						featured: true
					},
					{
						category: 'Tips',
						title: '5 triggers van duizeligheid onder de helm',
						excerpt: 'Van vochttekort tot opstaan uit bed — hoe u ze herkent.',
						readMinutes: 4,
						href: '#'
					},
					{
						category: 'Behandeling',
						title: 'Oefeningen bij vestibulaire migraine',
						excerpt: 'Praktisch stappenplan met voorbeeld-frequentie.',
						readMinutes: 8,
						href: '#'
					}
				]}
				background='default'
			/>

			<CardsOpenSection
				eyebrow='Ons aanbod'
				title='Behandelingen en trajecten'
				cards={[
					{
						image: { url: 'https://picsum.photos/seed/card1/600/450', alt: 'BPPD behandeling' },
						title: 'BPPD repositionering',
						link: '#',
						linkLabel: 'Lees meer'
					},
					{
						image: { url: 'https://picsum.photos/seed/card2/600/450', alt: 'Vestibulaire migraine' },
						title: 'Vestibulaire migraine',
						link: '#',
						linkLabel: 'Lees meer'
					},
					{
						image: { url: 'https://picsum.photos/seed/card3/600/450', alt: 'Oefentherapie' },
						title: 'Vestibulaire revalidatie',
						link: '#',
						linkLabel: 'Lees meer'
					}
				]}
				primaryCta={{ label: 'Bekijk alles', href: '#' }}
				background='surface'
			/>

			<CardsOverlaySection
				eyebrow='Specialisaties'
				title='Aandoeningen die wij behandelen'
				cards={[
					{
						image: { url: 'https://picsum.photos/seed/ov1/600/800', alt: 'BPPD' },
						title: 'BPPD',
						link: '#',
						linkLabel: 'Meer over BPPD',
						details: [
							{ icon: 'clock', label: '1–2 sessies' },
							{ icon: 'check-circle', label: 'Hoge slagingskans' }
						]
					},
					{
						image: { url: 'https://picsum.photos/seed/ov2/600/800', alt: 'Ménière' },
						title: 'Ziekte van Ménière',
						link: '#',
						linkLabel: 'Meer over Ménière',
						details: [
							{ icon: 'activity', label: 'Langdurig traject' },
							{ icon: 'users', label: 'Multidisciplinair' }
						]
					},
					{
						image: { url: 'https://picsum.photos/seed/ov3/600/800', alt: 'MDDS' },
						title: 'MDDS & PPPD',
						link: '#',
						linkLabel: 'Meer over MDDS',
						details: [
							{ icon: 'brain', label: 'Centraal vestibulair' },
							{ icon: 'shield-check', label: 'Evidence-based' }
						]
					}
				]}
				primaryCta={{ label: 'Alle aandoeningen', href: '#' }}
				secondaryCta={{ label: 'Stel een vraag', href: '#', variant: 'secondary' }}
				background='default'
			/>

			<ImageFeaturesSection
				eyebrow='Onze aanpak'
				title='Diagnostiek met'
				image={{ url: IMG, alt: 'Vestibulaire diagnostiek' }}
				features={[
					{ icon: 'ear', title: 'Audiometrie', text: 'Gehoor- en gehoorzenuwfunctie in kaart.' },
					{ icon: 'eye', title: 'Videonystagmografie', text: 'Oogbewegingspatronen als vestibulaire spiegel.' },
					{ icon: 'activity', title: 'Calorics & VHIT', text: 'Kanaal- en sacculusfunctie objectief gemeten.' },
					{ icon: 'brain', title: 'Posturografie', text: 'Balans en compensatie kwantificeerd.' }
				]}
				primaryCta={{ label: 'Meer over diagnostiek', href: '#' }}
				secondaryCta={{ label: 'Verwijs een patiënt', href: '#', variant: 'secondary' }}
				background='surface'
			/>

			<PureContentSection
				eyebrow='Onze missie'
				title='Klare taal over duizeligheid'
				textAlign='center'
				containerWidth='narrow'
				primaryCta={{ label: 'Maak een afspraak', href: '#' }}
				secondaryCta={{ label: 'Lees ons verhaal', href: '#', variant: 'secondary' }}
				background='elevated'
			/>

			<PureContentSection
				eyebrow='Achtergrond afbeelding'
				title='Zorg die verder kijkt'
				textAlign='left'
				backgroundImage={{ url: IMG, alt: 'Achtergrond zorgomgeving' }}
				overlayOpacity={55}
				primaryCta={{ label: 'Neem contact op', href: '#' }}
				background='default'
			/>

			<TextImageSection
				eyebrow='Over ons'
				title='Vestibulaire expertise onder één dak'
				image={{ url: IMG, alt: 'Zorgteam in overleg' }}
				primaryCta={{ label: 'Ontmoet het team', href: '#' }}
				secondaryCta={{ label: 'Meer over ons', href: '#', variant: 'secondary' }}
				background='default'
			/>
		</div>
	)
}
