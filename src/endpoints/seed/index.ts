import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Payload } from 'payload'

const seedDir = path.dirname(fileURLToPath(import.meta.url))

/**
 * Bilingual (nl / en) seed for the Payload starter.
 *
 * Localized values are authored once using the `L()` / `rtL()` markers and a
 * single layout template. The template is rendered for each locale with
 * `pick()`, created in the default locale (nl) and then patched for `en`
 * (reusing the generated array-row ids via `withIds()` so per-locale values
 * stay aligned).
 */

type Locale = 'nl' | 'en'

type Localized<T> = { __l: true; nl: T; en: T }

const seedContext = { context: { disableRevalidate: true }, overrideAccess: true } as const

// --- localized value helpers ------------------------------------------------

const L = (nl: string, en: string): Localized<string> => ({ __l: true, nl, en })

const rt = (...paragraphs: string[]) => ({
	root: {
		type: 'root',
		format: '',
		indent: 0,
		version: 1,
		direction: 'ltr' as const,
		children: paragraphs.map(text => ({
			type: 'paragraph',
			format: '',
			indent: 0,
			version: 1,
			direction: 'ltr' as const,
			children: [
				{
					type: 'text',
					detail: 0,
					format: 0,
					mode: 'normal',
					style: '',
					text,
					version: 1
				}
			]
		}))
	}
})

const rtL = (nl: string[], en: string[]): Localized<unknown> => ({
	__l: true,
	nl: rt(...nl),
	en: rt(...en)
})

// --- richer lexical content builders ---------------------------------------
// Compose blog/wiki bodies from headings, paragraphs, lists, dividers and
// inline images. Each builder returns a single serialized Lexical node.

type LexNode = Record<string, unknown>

const txt = (text: string): LexNode => ({
	type: 'text',
	detail: 0,
	format: 0,
	mode: 'normal',
	style: '',
	text,
	version: 1
})

const p = (text: string): LexNode => ({
	type: 'paragraph',
	format: '',
	indent: 0,
	version: 1,
	direction: 'ltr' as const,
	children: [txt(text)]
})

const h = (tag: 'h2' | 'h3' | 'h4', text: string): LexNode => ({
	type: 'heading',
	tag,
	format: '',
	indent: 0,
	version: 1,
	direction: 'ltr' as const,
	children: [txt(text)]
})

const li = (text: string, value: number): LexNode => ({
	type: 'listitem',
	value,
	format: '',
	indent: 0,
	version: 1,
	direction: 'ltr' as const,
	children: [txt(text)]
})

const ul = (...items: string[]): LexNode => ({
	type: 'list',
	listType: 'bullet',
	tag: 'ul',
	start: 1,
	format: '',
	indent: 0,
	version: 1,
	direction: 'ltr' as const,
	children: items.map((item, i) => li(item, i + 1))
})

const ol = (...items: string[]): LexNode => ({
	type: 'list',
	listType: 'number',
	tag: 'ol',
	start: 1,
	format: '',
	indent: 0,
	version: 1,
	direction: 'ltr' as const,
	children: items.map((item, i) => li(item, i + 1))
})

const hr = (): LexNode => ({ type: 'horizontalrule', version: 1 })

const img = (id: string | number): LexNode => ({
	type: 'upload',
	relationTo: 'media',
	value: id,
	fields: null,
	format: '',
	version: 3
})

const doc = (...children: LexNode[]) => ({
	root: {
		type: 'root',
		format: '',
		indent: 0,
		version: 1,
		direction: 'ltr' as const,
		children
	}
})

/** Localized rich body: pass the node list per locale. */
const docL = (nl: LexNode[], en: LexNode[]): Localized<unknown> => ({
	__l: true,
	nl: doc(...nl),
	en: doc(...en)
})

function isLocalized(value: unknown): value is Localized<unknown> {
	return typeof value === 'object' && value !== null && (value as { __l?: unknown }).__l === true
}

function pick(value: any, locale: Locale): any {
	if (Array.isArray(value)) return value.map(item => pick(item, locale))
	if (value && typeof value === 'object') {
		if (isLocalized(value)) return value[locale]
		const out: Record<string, unknown> = {}
		for (const key of Object.keys(value)) out[key] = pick(value[key], locale)
		return out
	}
	return value
}

/** Copy auto-generated array-row ids from a created doc onto the en template. */
function withIds(src: any, tgt: any): any {
	if (Array.isArray(src) && Array.isArray(tgt)) return tgt.map((item, i) => withIds(src[i], item))
	if (src && tgt && typeof src === 'object' && typeof tgt === 'object' && !Array.isArray(tgt)) {
		const out: Record<string, unknown> = { ...tgt }
		if (src.id != null && tgt.id == null) out.id = src.id
		for (const key of Object.keys(tgt)) out[key] = withIds(src[key], tgt[key])
		return out
	}
	return tgt
}

// --- collections to wipe for a re-runnable seed -----------------------------

const COLLECTIONS_TO_RESET = [
	'pages',
	'posts',
	'wiki',
	'wiki-categories',
	'categories',
	'team-members',
	'testimonials',
	'forms',
	'form-submissions',
	'search',
	'redirects',
	'media'
] as const

export async function seed({ payload }: { payload: Payload }): Promise<void> {
	payload.logger.info('— Seeding database —')

	// Payload's create/update/etc. generics collapse to `never` when the slug is
	// a runtime value, so the dynamic calls below are cast to `any`.
	const create = payload.create.bind(payload) as any
	const update = payload.update.bind(payload) as any
	const updateGlobal = payload.updateGlobal.bind(payload) as any
	const remove = payload.delete.bind(payload) as any

	// 1. Reset content collections so the seed can be re-run safely.
	for (const collection of COLLECTIONS_TO_RESET) {
		try {
			await remove({ collection, where: { id: { exists: true } }, ...seedContext })
		} catch (error) {
			payload.logger.warn(`Could not reset "${collection}": ${(error as Error).message}`)
		}
	}

	const createBilingual = async (collection: string, tpl: Record<string, unknown>) => {
		const created = await create({
			collection,
			data: pick(tpl, 'nl'),
			locale: 'nl',
			...seedContext
		})
		await update({
			collection,
			id: created.id,
			data: withIds(created, pick(tpl, 'en')),
			locale: 'en',
			...seedContext
		})
		return created as { id: string | number }
	}

	const seedGlobal = async (slug: string, tpl: Record<string, unknown>) => {
		const created = await updateGlobal({
			slug,
			data: pick(tpl, 'nl'),
			locale: 'nl',
			...seedContext
		})
		await updateGlobal({
			slug,
			data: withIds(created, pick(tpl, 'en')),
			locale: 'en',
			...seedContext
		})
	}

	// 2. Ensure there is an admin user (used as post author).
	const existingUsers = await payload.find({ collection: 'users', limit: 1, ...seedContext })
	let adminId: string | number
	if (existingUsers.docs.length > 0) {
		adminId = existingUsers.docs[0].id
	} else {
		const admin = await payload.create({
			collection: 'users',
			data: { email: 'admin@example.com', password: 'changeme123' },
			...seedContext
		})
		adminId = admin.id
		payload.logger.info('Created admin user → admin@example.com / changeme123')
	}

	// 2b. Media — upload the showcase images bundled with the seed.
	const uploadMedia = async (file: string, alt: string) =>
		(await create({
			collection: 'media',
			filePath: path.join(seedDir, 'assets', file),
			data: { alt },
			...seedContext
		})) as { id: string | number }

	const gradientImg = (await uploadMedia('showcase-01-gradient.png', 'Abstract gradient mesh')).id
	const workspaceImg = (await uploadMedia('showcase-02-workspace.png', 'Modern creative workspace')).id
	const shapesImg = (await uploadMedia('showcase-03-shapes.png', 'Abstract geometric shapes')).id

	// 3. Categories.
	const categoryDefs: { tpl: Record<string, unknown> }[] = [
		{ tpl: { title: L('Product', 'Product'), slug: 'product' } },
		{ tpl: { title: L('Engineering', 'Engineering'), slug: 'engineering' } },
		{ tpl: { title: L('Bedrijf', 'Company'), slug: 'company' } }
	]
	const categoryIds: (string | number)[] = []
	for (const def of categoryDefs) categoryIds.push((await createBilingual('categories', def.tpl)).id)

	// 4. Team members.
	const teamDefs: Record<string, unknown>[] = [
		{
			name: L('Sofie de Vries', 'Sofie de Vries'),
			role: L('Oprichter & CEO', 'Founder & CEO'),
			bio: L(
				'Sofie leidt het team met een focus op heldere, mensgerichte producten.',
				'Sofie leads the team with a focus on clear, human-centred products.'
			)
		},
		{
			name: L('Daan Jansen', 'Daan Jansen'),
			role: L('Hoofd Ontwerp', 'Head of Design'),
			bio: L(
				'Daan vertaalt complexe vraagstukken naar eenvoudige interfaces.',
				'Daan turns complex problems into simple interfaces.'
			)
		},
		{
			name: L('Noor El Amrani', 'Noor El Amrani'),
			role: L('Lead Engineer', 'Lead Engineer'),
			bio: L(
				'Noor bouwt schaalbare systemen en bewaakt de techniek.',
				'Noor builds scalable systems and guards the engineering quality.'
			)
		}
	]
	const teamIds: (string | number)[] = []
	for (const tpl of teamDefs) teamIds.push((await createBilingual('team-members', tpl)).id)

	// 5. Testimonials.
	const testimonialDefs: Record<string, unknown>[] = [
		{
			name: L('Mark Visser', 'Mark Visser'),
			role: L('CTO, Northwind', 'CTO, Northwind'),
			quote: L(
				'In een paar weken stond ons platform live. De blokken maken het beheer kinderlijk eenvoudig.',
				'Our platform was live within weeks. The blocks make content management effortless.'
			),
			stars: 5
		},
		{
			name: L('Eva Smit', 'Eva Smit'),
			role: L('Marketing, Lumen', 'Marketing, Lumen'),
			quote: L(
				'Eindelijk kunnen we landingspagina’s zelf samenstellen zonder een developer.',
				'We can finally compose landing pages ourselves without a developer.'
			),
			stars: 5
		},
		{
			name: L('Tom Bakker', 'Tom Bakker'),
			role: L('Founder, Cedar', 'Founder, Cedar'),
			quote: L(
				'Meertalig, snel en flexibel. Precies wat we zochten in een starter.',
				'Multilingual, fast and flexible. Exactly what we wanted in a starter.'
			),
			stars: 5
		}
	]
	const testimonialIds: (string | number)[] = []
	for (const tpl of testimonialDefs)
		testimonialIds.push((await createBilingual('testimonials', tpl)).id)

	// 6. Blog posts.
	const postDefs: Record<string, unknown>[] = [
		{
			title: L('Bouwen met blokken', 'Building with blocks'),
			slug: L('bouwen-met-blokken', 'building-with-blocks'),
			_status: 'published',
			publishedAt: new Date().toISOString(),
			authors: [adminId],
			categories: [categoryIds[0]],
			heroImage: workspaceImg,
			content: docL(
				[
					p(
						'Blokken zijn de bouwstenen van elke pagina in deze starter. In plaats van vaste templates stel je een pagina samen uit losse, herbruikbare secties.'
					),
					h('h2', 'Wat zijn blokken?'),
					p(
						'Elk blok is een op zichzelf staand stukje ontwerp met een eigen configuratie. Redacteuren slepen blokken in de gewenste volgorde; de front-end rendert ze automatisch.'
					),
					ul(
						'Hero’s voor een krachtige opening',
						'Features en kaarten om je aanbod te tonen',
						'Statistieken, prijzen en testimonials voor vertrouwen',
						'CTA’s om bezoekers tot actie aan te zetten'
					),
					img(shapesImg),
					h('h2', 'Een pagina samenstellen'),
					p('Het opbouwen van een pagina verloopt in een paar stappen:'),
					ol(
						'Open de pagina in de admin en voeg een blok toe.',
						'Vul de velden in en kies eventueel een variant.',
						'Herhaal dit voor elk volgend blok.',
						'Publiceer en bekijk het resultaat in beide talen.'
					),
					p(
						'Omdat blokken herbruikbaar zijn, bouw je nieuwe pagina’s in minuten in plaats van dagen.'
					)
				],
				[
					p(
						'Blocks are the building bricks of every page in this starter. Instead of fixed templates, you compose a page from independent, reusable sections.'
					),
					h('h2', 'What are blocks?'),
					p(
						'Each block is a self-contained piece of design with its own configuration. Editors drag blocks into the desired order; the front-end renders them automatically.'
					),
					ul(
						'Heroes for a strong opening',
						'Features and cards to present your offering',
						'Stats, pricing and testimonials to build trust',
						'CTAs to drive visitors to action'
					),
					img(shapesImg),
					h('h2', 'Composing a page'),
					p('Building a page takes just a few steps:'),
					ol(
						'Open the page in the admin and add a block.',
						'Fill in the fields and optionally pick a variant.',
						'Repeat this for each following block.',
						'Publish and review the result in both languages.'
					),
					p(
						'Because blocks are reusable, you build new pages in minutes instead of days.'
					)
				]
			),
			meta: {
				title: L('Bouwen met blokken', 'Building with blocks'),
				description: L(
					'Leer hoe je pagina’s samenstelt met herbruikbare blokken.',
					'Learn how to compose pages with reusable blocks.'
				)
			}
		},
		{
			title: L('Meertalige content', 'Multilingual content'),
			slug: L('meertalige-content', 'multilingual-content'),
			_status: 'published',
			publishedAt: new Date().toISOString(),
			authors: [adminId],
			categories: [categoryIds[1]],
			heroImage: gradientImg,
			content: docL(
				[
					p(
						'Deze starter ondersteunt Nederlands en Engels uit de doos. Elke tekst, elk blok en elke slug bestaat in beide talen.'
					),
					h('h2', 'Eén template, twee talen'),
					p(
						'Content wordt per locale opgeslagen. Je beheert dezelfde pagina in het Nederlands en het Engels zonder de structuur te dupliceren.'
					),
					ul(
						'Gelokaliseerde velden voor titels en teksten',
						'Per taal een eigen, leesbare slug',
						'Automatische taalwissel via de URL'
					),
					h('h2', 'Vertaalde slugs'),
					p(
						'De Nederlandse pagina leeft op /nl/… en de Engelse op /en/…. Zoekmachines krijgen de juiste hreflang-verwijzingen mee.'
					),
					img(workspaceImg)
				],
				[
					p(
						'This starter supports Dutch and English out of the box. Every text, every block and every slug exists in both languages.'
					),
					h('h2', 'One template, two languages'),
					p(
						'Content is stored per locale. You manage the same page in Dutch and English without duplicating the structure.'
					),
					ul(
						'Localized fields for titles and copy',
						'A dedicated, readable slug per language',
						'Automatic language switching through the URL'
					),
					h('h2', 'Translated slugs'),
					p(
						'The Dutch page lives on /nl/… and the English one on /en/…. Search engines receive the correct hreflang references.'
					),
					img(workspaceImg)
				]
			),
			meta: {
				title: L('Meertalige content', 'Multilingual content'),
				description: L(
					'Beheer content in meerdere talen met één configuratie.',
					'Manage content in multiple languages with a single configuration.'
				)
			}
		},
		{
			title: L('Snel van start', 'Getting started fast'),
			slug: L('snel-van-start', 'getting-started-fast'),
			_status: 'published',
			publishedAt: new Date().toISOString(),
			authors: [adminId],
			categories: [categoryIds[2]],
			heroImage: shapesImg,
			content: docL(
				[
					p(
						'Je hebt de starter in enkele minuten draaiend. Hieronder vind je de snelste route naar een werkende omgeving.'
					),
					h('h2', 'Vereisten'),
					ul(
						'Node.js 20 of nieuwer',
						'pnpm als package manager',
						'Een MongoDB-database (lokaal of in de cloud)'
					),
					h('h2', 'In vijf stappen live'),
					ol(
						'Kloon de repository naar je machine.',
						'Kopieer .env.example naar .env en vul de waarden in.',
						'Draai pnpm install om de dependencies op te halen.',
						'Start de dev-server met pnpm dev.',
						'Draai pnpm seed voor demodata en log in op /admin.'
					),
					hr(),
					p(
						'Meer details vind je in de documentatie onder “Aan de slag”. Daar lees je alles over omgevingsvariabelen, de database en het seeden.'
					)
				],
				[
					p(
						'You can have the starter running in minutes. Below is the fastest route to a working environment.'
					),
					h('h2', 'Prerequisites'),
					ul(
						'Node.js 20 or newer',
						'pnpm as the package manager',
						'A MongoDB database (local or in the cloud)'
					),
					h('h2', 'Live in five steps'),
					ol(
						'Clone the repository to your machine.',
						'Copy .env.example to .env and fill in the values.',
						'Run pnpm install to fetch the dependencies.',
						'Start the dev server with pnpm dev.',
						'Run pnpm seed for demo data and sign in at /admin.'
					),
					hr(),
					p(
						'You will find more detail in the documentation under “Getting started”. It covers environment variables, the database and seeding.'
					)
				]
			),
			meta: {
				title: L('Snel van start', 'Getting started fast'),
				description: L(
					'Een korte handleiding om binnen enkele minuten live te zijn.',
					'A short guide to get live within minutes.'
				)
			}
		},
		{
			title: L('Ontwerpen met varianten', 'Designing with variants'),
			slug: L('ontwerpen-met-varianten', 'designing-with-variants'),
			_status: 'published',
			publishedAt: new Date().toISOString(),
			authors: [adminId],
			categories: [categoryIds[0]],
			heroImage: gradientImg,
			content: docL(
				[
					p(
						'Veel blokken hebben varianten: dezelfde inhoud, een ander uiterlijk. Zo houd je het aantal blokken klein en blijft het beheer overzichtelijk.'
					),
					h('h2', 'Waarom varianten?'),
					p(
						'Een variant is een keuzeveld in het blok. In plaats van een compleet nieuw blok te bouwen, voeg je een tweede ontwerp toe en kies je dat in de admin.'
					),
					ul(
						'Carousel: “cards” of een “peek”-weergave',
						'Hero: een afbeelding of een kleurrijke gradient',
						'Prijzen: losse kaarten of een getrapte lijst',
						'Statistieken: een raster of een grote getallen-band'
					),
					img(gradientImg),
					h('h2', 'Een variant kiezen'),
					p(
						'Open het blok, kies de gewenste variant en de front-end past zich direct aan. Het onderliggende contentmodel blijft hetzelfde, dus je verliest nooit data bij het wisselen.'
					)
				],
				[
					p(
						'Many blocks have variants: the same content, a different look. This keeps the number of blocks small and management clear.'
					),
					h('h2', 'Why variants?'),
					p(
						'A variant is a select field on the block. Instead of building a whole new block, you add a second design and pick it in the admin.'
					),
					ul(
						'Carousel: “cards” or a “peek” view',
						'Hero: an image or a colourful gradient',
						'Pricing: separate cards or a tiered list',
						'Stats: a grid or a big-number band'
					),
					img(gradientImg),
					h('h2', 'Choosing a variant'),
					p(
						'Open the block, pick the variant you want and the front-end adapts instantly. The underlying content model stays the same, so you never lose data when switching.'
					)
				]
			),
			meta: {
				title: L('Ontwerpen met varianten', 'Designing with variants'),
				description: L(
					'Hergebruik blokken met varianten in plaats van nieuwe blokken te bouwen.',
					'Reuse blocks with variants instead of building new ones.'
				)
			}
		}
	]
	for (const tpl of postDefs) await createBilingual('posts', tpl)

	// 7. Wiki categories + docs.
	const wikiCatDefs: { tpl: Record<string, unknown> }[] = [
		{ tpl: { title: L('Aan de slag', 'Getting started'), slug: 'getting-started', order: 1 } },
		{ tpl: { title: L('Concepten', 'Concepts'), slug: 'concepts', order: 2 } },
		{ tpl: { title: L('Handleidingen', 'Guides'), slug: 'guides', order: 3 } },
		{ tpl: { title: L('Referentie', 'Reference'), slug: 'reference', order: 4 } }
	]
	const wikiCatIds: (string | number)[] = []
	for (const def of wikiCatDefs) wikiCatIds.push((await createBilingual('wiki-categories', def.tpl)).id)
	const [catGettingStarted, catConcepts, catGuides, catReference] = wikiCatIds

	const wikiDefs: Record<string, unknown>[] = [
		// --- Getting started ---------------------------------------------------
		{
			title: L('Introductie', 'Introduction'),
			slug: L('introductie', 'introduction'),
			category: catGettingStarted,
			order: 0,
			_status: 'published',
			excerpt: L(
				'Waar deze starter voor bedoeld is en wat je ermee bouwt.',
				'What this starter is for and what you build with it.'
			),
			content: docL(
				[
					p(
						'Deze starter is een meertalige website-basis op Payload CMS en Next.js. Hij is bedoeld voor marketingsites, portfolio’s en bedrijfssites die redacteuren zelf willen beheren — zonder voor elke pagina een developer nodig te hebben.'
					),
					h('h2', 'Wat je krijgt'),
					ul(
						'Een blok-gebaseerde paginabouwer met tientallen kant-en-klare secties',
						'Volledige Nederlands/Engels-ondersteuning, inclusief vertaalde slugs',
						'Een blog, een wiki/docs-sectie en een contactformulier',
						'SEO-velden, sitemaps en social-previews per pagina',
						'Een seed-script dat de hele demo met één commando opbouwt'
					),
					h('h2', 'Voor wie'),
					p(
						'Developers gebruiken de blokken en collecties als fundament en breiden ze uit. Redacteuren stellen pagina’s samen in de admin op /admin. Deze documentatie helpt beide groepen op weg.'
					),
					p(
						'Begin bij “Installatie”, daarna “Omgevingsvariabelen” en “Lokaal draaien”. Wil je meteen demodata? Lees “Database seeden”.'
					)
				],
				[
					p(
						'This starter is a multilingual website foundation built on Payload CMS and Next.js. It is meant for marketing sites, portfolios and company sites that editors want to manage themselves — without needing a developer for every page.'
					),
					h('h2', 'What you get'),
					ul(
						'A block-based page builder with dozens of ready-made sections',
						'Full Dutch/English support, including translated slugs',
						'A blog, a wiki/docs section and a contact form',
						'SEO fields, sitemaps and social previews per page',
						'A seed script that builds the entire demo with a single command'
					),
					h('h2', 'Who it is for'),
					p(
						'Developers use the blocks and collections as a foundation and extend them. Editors compose pages in the admin at /admin. This documentation helps both groups get going.'
					),
					p(
						'Start with “Installation”, then “Environment variables” and “Running locally”. Want demo data right away? Read “Seeding the database”.'
					)
				]
			)
		},
		{
			title: L('Installatie', 'Installation'),
			slug: L('installatie', 'installation'),
			category: catGettingStarted,
			order: 1,
			_status: 'published',
			excerpt: L('Installeer en draai het project lokaal.', 'Install and run the project locally.'),
			content: docL(
				[
					p('Volg deze stappen om het project op je eigen machine te installeren.'),
					h('h2', 'Vereisten'),
					ul(
						'Node.js 20 of nieuwer (18.20+ werkt ook)',
						'pnpm 10 als package manager',
						'Toegang tot een MongoDB-database'
					),
					h('h2', 'Stappen'),
					ol(
						'Kloon de repository en ga naar de projectmap.',
						'Maak een .env-bestand aan op basis van .env.example.',
						'Draai pnpm install om alle dependencies op te halen.',
						'Genereer types met pnpm generate:types (eenmalig, en na elke schemawijziging).',
						'Start de dev-server met pnpm dev.'
					),
					p(
						'De site draait nu op http://localhost:3000 en de admin op http://localhost:3000/admin.'
					),
					h('h3', 'Problemen?'),
					p(
						'Krijg je een verbindingsfout, controleer dan DATABASE_URL. Ontbreken er types, draai dan opnieuw pnpm generate:types.'
					)
				],
				[
					p('Follow these steps to install the project on your own machine.'),
					h('h2', 'Prerequisites'),
					ul(
						'Node.js 20 or newer (18.20+ also works)',
						'pnpm 10 as the package manager',
						'Access to a MongoDB database'
					),
					h('h2', 'Steps'),
					ol(
						'Clone the repository and move into the project folder.',
						'Create a .env file based on .env.example.',
						'Run pnpm install to fetch all dependencies.',
						'Generate types with pnpm generate:types (once, and after every schema change).',
						'Start the dev server with pnpm dev.'
					),
					p(
						'The site now runs on http://localhost:3000 and the admin on http://localhost:3000/admin.'
					),
					h('h3', 'Trouble?'),
					p(
						'If you get a connection error, check DATABASE_URL. If types are missing, run pnpm generate:types again.'
					)
				]
			)
		},
		{
			title: L('Omgevingsvariabelen', 'Environment variables'),
			slug: L('omgevingsvariabelen', 'environment-variables'),
			category: catGettingStarted,
			order: 2,
			_status: 'published',
			excerpt: L(
				'De .env-waarden die het project nodig heeft.',
				'The .env values the project needs.'
			),
			content: docL(
				[
					p(
						'Configuratie verloopt via een .env-bestand in de hoofdmap. Kopieer .env.example en vul de volgende waarden in.'
					),
					h('h2', 'Verplichte variabelen'),
					ul(
						'DATABASE_URL — de connectiestring naar je MongoDB-database',
						'PAYLOAD_SECRET — een lange, willekeurige string voor het versleutelen van tokens',
						'NEXT_PUBLIC_SERVER_URL — de basis-URL van de site, zonder slash op het eind'
					),
					h('h2', 'Optionele variabelen'),
					ul(
						'CRON_SECRET — beveiligt geplande taken (cron jobs)',
						'PREVIEW_SECRET — valideert preview-verzoeken vanuit de admin'
					),
					h('h3', 'Tips'),
					p(
						'Commit nooit je .env naar git. Gebruik per omgeving (lokaal, staging, productie) een eigen set waarden en een unieke PAYLOAD_SECRET.'
					)
				],
				[
					p(
						'Configuration is handled through a .env file in the project root. Copy .env.example and fill in the following values.'
					),
					h('h2', 'Required variables'),
					ul(
						'DATABASE_URL — the connection string to your MongoDB database',
						'PAYLOAD_SECRET — a long, random string used to encrypt tokens',
						'NEXT_PUBLIC_SERVER_URL — the base URL of the site, without a trailing slash'
					),
					h('h2', 'Optional variables'),
					ul(
						'CRON_SECRET — secures scheduled tasks (cron jobs)',
						'PREVIEW_SECRET — validates preview requests from the admin'
					),
					h('h3', 'Tips'),
					p(
						'Never commit your .env to git. Use a separate set of values per environment (local, staging, production) and a unique PAYLOAD_SECRET.'
					)
				]
			)
		},
		{
			title: L('Lokaal draaien', 'Running locally'),
			slug: L('lokaal-draaien', 'running-locally'),
			category: catGettingStarted,
			order: 3,
			_status: 'published',
			excerpt: L(
				'De dev-server starten en de admin gebruiken.',
				'Start the dev server and use the admin.'
			),
			content: docL(
				[
					p('Met de dependencies geïnstalleerd en .env ingevuld kun je het project starten.'),
					h('h2', 'De dev-server'),
					p(
						'Draai pnpm dev. Next.js compileert de site en herlaadt automatisch bij wijzigingen. Open http://localhost:3000 voor de front-end.'
					),
					h('h2', 'De admin'),
					ol(
						'Ga naar http://localhost:3000/admin.',
						'Maak bij de eerste keer een admin-account aan, of gebruik het seed-account.',
						'Beheer pagina’s, posts, wiki-docs, media en de globale instellingen.'
					),
					p(
						'Heb je de seed gedraaid, dan log je in met admin@example.com en wachtwoord changeme123. Wijzig dit direct in een echte omgeving.'
					),
					h('h2', 'Taalwissel'),
					p(
						'De front-end leeft onder /nl en /en. Wissel van taal via de URL of de taalknop in de header.'
					)
				],
				[
					p('With dependencies installed and .env filled in, you can start the project.'),
					h('h2', 'The dev server'),
					p(
						'Run pnpm dev. Next.js compiles the site and reloads automatically on changes. Open http://localhost:3000 for the front-end.'
					),
					h('h2', 'The admin'),
					ol(
						'Go to http://localhost:3000/admin.',
						'On first run create an admin account, or use the seeded account.',
						'Manage pages, posts, wiki docs, media and the global settings.'
					),
					p(
						'If you ran the seed, sign in with admin@example.com and password changeme123. Change this immediately in a real environment.'
					),
					h('h2', 'Switching language'),
					p(
						'The front-end lives under /nl and /en. Switch language through the URL or the language button in the header.'
					)
				]
			)
		},
		{
			title: L('Database seeden', 'Seeding the database'),
			slug: L('database-seeden', 'seeding-the-database'),
			category: catGettingStarted,
			order: 4,
			_status: 'published',
			excerpt: L(
				'Vul de database met demodata in beide talen.',
				'Fill the database with demo data in both languages.'
			),
			content: docL(
				[
					p(
						'Het seed-script bouwt een complete demo: pagina’s, een blog, wiki-docs, media, een team, testimonials en een contactformulier — in het Nederlands én het Engels.'
					),
					h('h2', 'Draaien'),
					p('Draai pnpm seed. Het script staat in src/scripts/seed.ts en roept src/endpoints/seed aan.'),
					h('h2', 'Belangrijk'),
					ul(
						'De seed is herhaalbaar: bij elke run worden de content-collecties eerst leeggemaakt.',
						'Bestaande gebruikers blijven behouden; ontbreekt er een admin, dan wordt die aangemaakt.',
						'Media-bestanden komen uit src/endpoints/seed/assets.'
					),
					h('h2', 'Eigen content toevoegen'),
					ol(
						'Open src/endpoints/seed/index.ts.',
						'Gebruik de helpers L() voor teksten en docL() voor rijke content.',
						'Voeg je item toe aan de juiste lijst (bijv. postDefs of wikiDefs).',
						'Draai pnpm seed opnieuw.'
					)
				],
				[
					p(
						'The seed script builds a complete demo: pages, a blog, wiki docs, media, a team, testimonials and a contact form — in both Dutch and English.'
					),
					h('h2', 'Running'),
					p('Run pnpm seed. The script lives in src/scripts/seed.ts and calls src/endpoints/seed.'),
					h('h2', 'Good to know'),
					ul(
						'The seed is repeatable: each run first clears the content collections.',
						'Existing users are kept; if no admin exists, one is created.',
						'Media files come from src/endpoints/seed/assets.'
					),
					h('h2', 'Adding your own content'),
					ol(
						'Open src/endpoints/seed/index.ts.',
						'Use the L() helper for text and docL() for rich content.',
						'Add your item to the right list (e.g. postDefs or wikiDefs).',
						'Run pnpm seed again.'
					)
				]
			)
		},
		// --- Concepts ----------------------------------------------------------
		{
			title: L('Projectstructuur', 'Project structure'),
			slug: L('projectstructuur', 'project-structure'),
			category: catConcepts,
			order: 1,
			_status: 'published',
			excerpt: L('Een overzicht van de mappenstructuur.', 'An overview of the folder structure.'),
			content: docL(
				[
					p('De code leeft grotendeels in src. De belangrijkste mappen:'),
					ul(
						'src/app — de Next.js-routes voor zowel de front-end (frontend) als de Payload-admin',
						'src/blocks — de blokken: per blok een config.ts en een component.tsx',
						'src/collections — collecties zoals pages, posts, wiki, media en users',
						'src/globals — globale data zoals Header, Footer en Settings',
						'src/fields — herbruikbare velddefinities voor blokken en collecties',
						'src/components — React-componenten voor de front-end',
						'src/endpoints/seed — het seed-script en de bijbehorende afbeeldingen',
						'src/utilities — hulpfuncties, o.a. voor locale en metadata'
					),
					h('h2', 'Belangrijke bestanden'),
					ul(
						'src/payload.config.ts — de centrale Payload-configuratie',
						'src/blocks/render-blocks.tsx — koppelt blok-slugs aan hun React-component',
						'src/payload-types.ts — automatisch gegenereerde types (niet handmatig wijzigen)'
					)
				],
				[
					p('The code lives mostly in src. The most important folders:'),
					ul(
						'src/app — the Next.js routes for both the front-end (frontend) and the Payload admin',
						'src/blocks — the blocks: a config.ts and a component.tsx per block',
						'src/collections — collections such as pages, posts, wiki, media and users',
						'src/globals — global data such as Header, Footer and Settings',
						'src/fields — reusable field definitions for blocks and collections',
						'src/components — React components for the front-end',
						'src/endpoints/seed — the seed script and its images',
						'src/utilities — helper functions, e.g. for locale and metadata'
					),
					h('h2', 'Key files'),
					ul(
						'src/payload.config.ts — the central Payload configuration',
						'src/blocks/render-blocks.tsx — maps block slugs to their React component',
						'src/payload-types.ts — auto-generated types (do not edit by hand)'
					)
				]
			)
		},
		{
			title: L('Blokken & secties', 'Blocks & sections'),
			slug: L('blokken-en-secties', 'blocks-and-sections'),
			category: catConcepts,
			order: 2,
			_status: 'published',
			excerpt: L(
				'Hoe blokken de bron van waarheid zijn voor het ontwerp.',
				'How blocks are the single source of truth for the design.'
			),
			content: docL(
				[
					p(
						'Een pagina is een lijst van blokken. Elk blok heeft een configuratie (de velden in de admin) en een component (hoe het rendert).'
					),
					h('h2', 'Twee delen per blok'),
					ul(
						'config.ts — definieert de velden, het label en eventuele varianten',
						'component.tsx — leest de velden en rendert de sectie op de front-end'
					),
					h('h2', 'Varianten'),
					p(
						'Veel blokken hebben een variant-veld. Daarmee kies je een andere weergave zonder de inhoud te veranderen. Denk aan een carousel als “cards” of als “peek”, of een hero met afbeelding of gradient.'
					),
					h('h2', 'Renderen'),
					p(
						'src/blocks/render-blocks.tsx bepaalt welk component bij welke blok-slug hoort. Voeg je een blok toe, dan registreer je het hier én in de pages-collectie.'
					)
				],
				[
					p(
						'A page is a list of blocks. Each block has a configuration (the fields in the admin) and a component (how it renders).'
					),
					h('h2', 'Two parts per block'),
					ul(
						'config.ts — defines the fields, the label and any variants',
						'component.tsx — reads the fields and renders the section on the front-end'
					),
					h('h2', 'Variants'),
					p(
						'Many blocks have a variant field. It lets you pick a different presentation without changing the content. Think of a carousel as “cards” or as “peek”, or a hero with an image or a gradient.'
					),
					h('h2', 'Rendering'),
					p(
						'src/blocks/render-blocks.tsx decides which component belongs to which block slug. When you add a block, you register it here and in the pages collection.'
					)
				]
			)
		},
		{
			title: L('Collecties & globals', 'Collections & globals'),
			slug: L('collecties-en-globals', 'collections-and-globals'),
			category: catConcepts,
			order: 3,
			_status: 'published',
			excerpt: L(
				'Het verschil tussen collecties en globale data.',
				'The difference between collections and global data.'
			),
			content: docL(
				[
					p('Payload kent twee soorten content: collecties en globals.'),
					h('h2', 'Collecties'),
					p(
						'Collecties bevatten meerdere documenten van hetzelfde type. Voorbeelden in deze starter:'
					),
					ul(
						'pages — de pagina’s, opgebouwd uit blokken',
						'posts — blogartikelen met hero-afbeelding en rijke tekst',
						'wiki — de documentatie die je nu leest',
						'media — geüploade afbeeldingen en bestanden',
						'users — beheerders van de admin'
					),
					h('h2', 'Globals'),
					p('Globals zijn unieke datasets die maar één keer bestaan:'),
					ul(
						'Header — de navigatie bovenaan',
						'Footer — de links en tekst onderaan',
						'Settings — site-brede instellingen'
					),
					p('Collecties staan in src/collections, globals in src/globals.')
				],
				[
					p('Payload has two kinds of content: collections and globals.'),
					h('h2', 'Collections'),
					p('Collections hold multiple documents of the same type. Examples in this starter:'),
					ul(
						'pages — the pages, composed of blocks',
						'posts — blog articles with a hero image and rich text',
						'wiki — the documentation you are reading now',
						'media — uploaded images and files',
						'users — administrators of the admin'
					),
					h('h2', 'Globals'),
					p('Globals are unique datasets that exist only once:'),
					ul(
						'Header — the navigation at the top',
						'Footer — the links and text at the bottom',
						'Settings — site-wide settings'
					),
					p('Collections live in src/collections, globals in src/globals.')
				]
			)
		},
		{
			title: L('Meertaligheid', 'Localization'),
			slug: L('meertaligheid', 'localization'),
			category: catConcepts,
			order: 4,
			_status: 'published',
			excerpt: L(
				'Hoe Nederlands en Engels naast elkaar bestaan.',
				'How Dutch and English live side by side.'
			),
			content: docL(
				[
					p(
						'De starter is meertalig met Nederlands als standaardtaal en Engels als tweede taal. Gelokaliseerde velden slaan per taal een eigen waarde op.'
					),
					h('h2', 'Routes'),
					p(
						'Front-end-pagina’s leven onder /nl en /en. De taal staat in de URL, zodat elke taal zijn eigen, deelbare adres heeft.'
					),
					h('h2', 'Gelokaliseerde slugs'),
					p(
						'Ook slugs zijn vertaald: een pagina kan /nl/over-ons en /en/about-us hebben. Zo blijven URL’s leesbaar in elke taal.'
					),
					h('h2', 'Content beheren'),
					p(
						'In de admin wissel je rechtsboven van taal. Je bewerkt hetzelfde document, maar vult de velden per taal in.'
					)
				],
				[
					p(
						'The starter is multilingual with Dutch as the default language and English as the second. Localized fields store a separate value per language.'
					),
					h('h2', 'Routes'),
					p(
						'Front-end pages live under /nl and /en. The language is in the URL, so each language has its own shareable address.'
					),
					h('h2', 'Localized slugs'),
					p(
						'Slugs are translated too: a page can have /nl/over-ons and /en/about-us. This keeps URLs readable in every language.'
					),
					h('h2', 'Managing content'),
					p(
						'In the admin you switch language in the top right. You edit the same document but fill in the fields per language.'
					)
				]
			)
		},
		{
			title: L('SEO & metadata', 'SEO & metadata'),
			slug: L('seo-en-metadata', 'seo-and-metadata'),
			category: catConcepts,
			order: 5,
			_status: 'published',
			excerpt: L(
				'Titels, omschrijvingen, sitemaps en social previews.',
				'Titles, descriptions, sitemaps and social previews.'
			),
			content: docL(
				[
					p(
						'Pagina’s, posts en wiki-docs hebben een SEO-tab. Daar stel je de titel, omschrijving en social-afbeelding in per taal.'
					),
					h('h2', 'Per document'),
					ul(
						'Meta-titel en -omschrijving voor zoekmachines',
						'Een afbeelding voor previews op social media',
						'Een live preview van hoe het resultaat eruitziet'
					),
					h('h2', 'Automatisch'),
					ul(
						'Sitemaps worden gegenereerd voor pagina’s, posts en docs',
						'hreflang-verwijzingen koppelen de taalversies aan elkaar',
						'Ontbreekt een meta-waarde, dan valt het systeem terug op zinnige standaarden'
					)
				],
				[
					p(
						'Pages, posts and wiki docs have an SEO tab. There you set the title, description and social image per language.'
					),
					h('h2', 'Per document'),
					ul(
						'Meta title and description for search engines',
						'An image for previews on social media',
						'A live preview of how the result looks'
					),
					h('h2', 'Automatic'),
					ul(
						'Sitemaps are generated for pages, posts and docs',
						'hreflang references link the language versions together',
						'If a meta value is missing, the system falls back to sensible defaults'
					)
				]
			)
		},
		// --- Guides ------------------------------------------------------------
		{
			title: L('Een blok toevoegen', 'Add a new block'),
			slug: L('een-blok-toevoegen', 'add-a-new-block'),
			category: catGuides,
			order: 1,
			_status: 'published',
			excerpt: L(
				'Bouw een nieuw blok en maak het beschikbaar in de bouwer.',
				'Build a new block and make it available in the builder.'
			),
			content: docL(
				[
					p('Een nieuw blok toevoegen doe je in vijf stappen.'),
					ol(
						'Maak een map src/blocks/mijn-blok aan.',
						'Schrijf config.ts met de velden en een unieke slug.',
						'Schrijf component.tsx dat die velden rendert.',
						'Registreer het component in src/blocks/render-blocks.tsx.',
						'Voeg het blok toe aan de layout in src/collections/pages.'
					),
					h('h2', 'Daarna'),
					p(
						'Draai pnpm generate:types zodat de types kloppen. Het blok verschijnt nu in de paginabouwer en kun je ook in de seed gebruiken.'
					),
					h('h3', 'Tip'),
					p(
						'Kopieer een bestaand blok dat lijkt op wat je wilt en pas het aan. Hergebruik velden uit src/fields voor consistentie.'
					)
				],
				[
					p('Adding a new block takes five steps.'),
					ol(
						'Create a folder src/blocks/my-block.',
						'Write config.ts with the fields and a unique slug.',
						'Write component.tsx that renders those fields.',
						'Register the component in src/blocks/render-blocks.tsx.',
						'Add the block to the layout in src/collections/pages.'
					),
					h('h2', 'After that'),
					p(
						'Run pnpm generate:types so the types are correct. The block now appears in the page builder and you can also use it in the seed.'
					),
					h('h3', 'Tip'),
					p(
						'Copy an existing block that resembles what you want and adapt it. Reuse fields from src/fields for consistency.'
					)
				]
			)
		},
		{
			title: L('Een variant toevoegen', 'Add a block variant'),
			slug: L('een-variant-toevoegen', 'add-a-block-variant'),
			category: catGuides,
			order: 2,
			_status: 'published',
			excerpt: L(
				'Geef een bestaand blok een tweede weergave.',
				'Give an existing block a second presentation.'
			),
			content: docL(
				[
					p(
						'Wil je dezelfde inhoud anders tonen? Voeg dan een variant toe in plaats van een heel nieuw blok.'
					),
					ol(
						'Voeg in config.ts een select-veld “variant” toe met de mogelijke waarden.',
						'Lees variant uit in component.tsx.',
						'Vertak de weergave op basis van de gekozen variant.',
						'Draai pnpm generate:types.'
					),
					h('h2', 'Waarom'),
					ul(
						'Minder blokken om te onderhouden',
						'Het contentmodel blijft gelijk — wisselen kost geen data',
						'Redacteuren kiezen het uiterlijk met één klik'
					)
				],
				[
					p(
						'Want to show the same content differently? Add a variant instead of a whole new block.'
					),
					ol(
						'Add a select field “variant” in config.ts with the possible values.',
						'Read variant in component.tsx.',
						'Branch the rendering based on the chosen variant.',
						'Run pnpm generate:types.'
					),
					h('h2', 'Why'),
					ul(
						'Fewer blocks to maintain',
						'The content model stays the same — switching costs no data',
						'Editors pick the look with a single click'
					)
				]
			)
		},
		{
			title: L('Een collectie toevoegen', 'Add a collection'),
			slug: L('een-collectie-toevoegen', 'add-a-collection'),
			category: catGuides,
			order: 3,
			_status: 'published',
			excerpt: L(
				'Definieer een nieuw inhoudstype in Payload.',
				'Define a new content type in Payload.'
			),
			content: docL(
				[
					p('Een collectie is een herbruikbaar inhoudstype, zoals posts of team-members.'),
					ol(
						'Maak een bestand aan in src/collections, bijvoorbeeld Projects.ts.',
						'Exporteer een CollectionConfig met een slug, velden en access-regels.',
						'Importeer en registreer de collectie in src/payload.config.ts.',
						'Draai pnpm generate:types.'
					),
					h('h2', 'Veelgebruikte opties'),
					ul(
						'localized: true op velden die per taal verschillen',
						'admin.useAsTitle om te bepalen welk veld de titel is',
						'versions met drafts voor concepten en live preview',
						'hooks voor revalidatie na een wijziging'
					)
				],
				[
					p('A collection is a reusable content type, like posts or team-members.'),
					ol(
						'Create a file in src/collections, for example Projects.ts.',
						'Export a CollectionConfig with a slug, fields and access rules.',
						'Import and register the collection in src/payload.config.ts.',
						'Run pnpm generate:types.'
					),
					h('h2', 'Common options'),
					ul(
						'localized: true on fields that differ per language',
						'admin.useAsTitle to choose which field is the title',
						'versions with drafts for concepts and live preview',
						'hooks for revalidation after a change'
					)
				]
			)
		},
		{
			title: L('Thema aanpassen', 'Customize the theme'),
			slug: L('thema-aanpassen', 'customize-the-theme'),
			category: catGuides,
			order: 4,
			_status: 'published',
			excerpt: L(
				'Pas kleuren, typografie en stijl aan.',
				'Adjust colours, typography and styling.'
			),
			content: docL(
				[
					p(
						'De front-end is opgebouwd met Tailwind CSS v4 en een set ontwerptokens. Je past het uiterlijk centraal aan.'
					),
					h('h2', 'Kleuren & tokens'),
					p(
						'Kleuren, radii en spacing zijn vastgelegd als CSS-variabelen en Tailwind-tokens. Pas ze aan op één plek en de hele site volgt.'
					),
					h('h2', 'Componenten'),
					p(
						'Herbruikbare UI-componenten staan in src/components/ui. Layout-helpers zoals Section, Container, Stack en Grid zorgen voor consistente afstanden.'
					),
					h('h3', 'Tip'),
					p(
						'Houd afstanden consistent door de bestaande layout-helpers te gebruiken in plaats van losse marges.'
					)
				],
				[
					p(
						'The front-end is built with Tailwind CSS v4 and a set of design tokens. You adjust the look centrally.'
					),
					h('h2', 'Colours & tokens'),
					p(
						'Colours, radii and spacing are defined as CSS variables and Tailwind tokens. Change them in one place and the whole site follows.'
					),
					h('h2', 'Components'),
					p(
						'Reusable UI components live in src/components/ui. Layout helpers such as Section, Container, Stack and Grid keep spacing consistent.'
					),
					h('h3', 'Tip'),
					p(
						'Keep spacing consistent by using the existing layout helpers instead of one-off margins.'
					)
				]
			)
		},
		{
			title: L('Deployen', 'Deployment'),
			slug: L('deployen', 'deployment'),
			category: catGuides,
			order: 5,
			_status: 'published',
			excerpt: L(
				'Zet het project live op een server of platform.',
				'Put the project live on a server or platform.'
			),
			content: docL(
				[
					p('Het project is een standaard Next.js-app en draait op elk platform dat Node ondersteunt.'),
					h('h2', 'Voorbereiden'),
					ol(
						'Zet alle omgevingsvariabelen klaar in je hostingomgeving.',
						'Wijs DATABASE_URL naar je productiedatabase.',
						'Stel NEXT_PUBLIC_SERVER_URL in op je echte domein.'
					),
					h('h2', 'Bouwen & starten'),
					ul('Bouw met pnpm build', 'Start met pnpm start'),
					h('h3', 'Let op'),
					p(
						'Draai pnpm seed niet op een productiedatabase met echte content — de seed maakt content-collecties eerst leeg.'
					)
				],
				[
					p('The project is a standard Next.js app and runs on any platform that supports Node.'),
					h('h2', 'Prepare'),
					ol(
						'Set all environment variables in your hosting environment.',
						'Point DATABASE_URL to your production database.',
						'Set NEXT_PUBLIC_SERVER_URL to your real domain.'
					),
					h('h2', 'Build & start'),
					ul('Build with pnpm build', 'Start with pnpm start'),
					h('h3', 'Caution'),
					p(
						'Do not run pnpm seed on a production database with real content — the seed clears content collections first.'
					)
				]
			)
		},
		// --- Reference ---------------------------------------------------------
		{
			title: L('Commando’s', 'Commands'),
			slug: L('commandos', 'commands'),
			category: catReference,
			order: 1,
			_status: 'published',
			excerpt: L('De belangrijkste pnpm-commando’s.', 'The most important pnpm commands.'),
			content: docL(
				[
					p('Een overzicht van de scripts die je het vaakst gebruikt.'),
					ul(
						'pnpm install — installeer alle dependencies',
						'pnpm dev — start de dev-server op localhost:3000',
						'pnpm build — bouw de productieversie',
						'pnpm start — draai de gebouwde productieversie',
						'pnpm seed — vul de database met demodata',
						'pnpm generate:types — genereer types na schemawijzigingen',
						'pnpm generate:importmap — werk de admin-importmap bij',
						'pnpm lint — controleer de code op fouten'
					)
				],
				[
					p('An overview of the scripts you use most often.'),
					ul(
						'pnpm install — install all dependencies',
						'pnpm dev — start the dev server on localhost:3000',
						'pnpm build — build the production version',
						'pnpm start — run the built production version',
						'pnpm seed — fill the database with demo data',
						'pnpm generate:types — generate types after schema changes',
						'pnpm generate:importmap — update the admin import map',
						'pnpm lint — check the code for errors'
					)
				]
			)
		},
		{
			title: L('Tech stack', 'Tech stack'),
			slug: L('tech-stack', 'tech-stack'),
			category: catReference,
			order: 2,
			_status: 'published',
			excerpt: L(
				'De technologieën waarop de starter draait.',
				'The technologies the starter runs on.'
			),
			content: docL(
				[
					p('De starter combineert een bewezen set tools.'),
					ul(
						'Payload CMS — het headless CMS en de admin',
						'Next.js — het React-framework voor de front-end',
						'MongoDB — de database (Postgres is optioneel)',
						'Tailwind CSS v4 — de styling',
						'Lexical — de rich-text-editor voor posts en docs',
						'TypeScript — type-veiligheid in het hele project'
					),
					h('h2', 'Meer leren'),
					p(
						'Raadpleeg de officiële documentatie van Payload en Next.js voor diepgang. Deze wiki richt zich op hoe alles in déze starter samenkomt.'
					)
				],
				[
					p('The starter combines a proven set of tools.'),
					ul(
						'Payload CMS — the headless CMS and the admin',
						'Next.js — the React framework for the front-end',
						'MongoDB — the database (Postgres is optional)',
						'Tailwind CSS v4 — the styling',
						'Lexical — the rich-text editor for posts and docs',
						'TypeScript — type safety across the whole project'
					),
					h('h2', 'Learn more'),
					p(
						'Consult the official Payload and Next.js documentation for depth. This wiki focuses on how everything fits together in this starter.'
					)
				]
			)
		}
	]
	for (const tpl of wikiDefs) await createBilingual('wiki', tpl)

	// 8. Contact form (form-builder, not localized).
	const form = await create({
		collection: 'forms',
		data: {
			title: 'Contact',
			fields: [
				{ blockType: 'text', name: 'name', label: 'Name', required: true, width: 100 },
				{ blockType: 'email', name: 'email', label: 'Email', required: true, width: 100 },
				{ blockType: 'textarea', name: 'message', label: 'Message', required: true, width: 100 }
			],
			submitButtonLabel: 'Send message',
			confirmationType: 'message',
			confirmationMessage: rt('Thanks for reaching out — we will get back to you soon.')
		},
		...seedContext
	})
	const formId = (form as { id: string | number }).id

	// --- shared block builders ------------------------------------------------

	const btn = (url: string, label: Localized<string>, color = 'primary') => ({
		button: { type: 'custom', url, label, color, newTab: false }
	})

	const refBtn = (pageId: string | number, label: Localized<string>, color = 'primary') => ({
		button: {
			type: 'reference',
			reference: { relationTo: 'pages', value: pageId },
			label,
			color,
			newTab: false
		}
	})

	const ctaBlock = {
		blockType: 'cta',
		variant: 'card',
		backgroundColor: 'primary',
		eyebrow: L('Aan de slag', 'Get started'),
		title: L('Klaar om te bouwen?', 'Ready to build?'),
		content: rtL(
			['Kloon de starter en lanceer je volgende project vandaag nog.'],
			['Clone the starter and launch your next project today.']
		)
	}

	// 9. Pages.

	// 9a. Home — agency
	await createBilingual('pages', {
		title: L('Home', 'Home'),
		slug: 'home',
		_status: 'published',
		meta: {
			title: L('Payload Starter — Agency', 'Payload Starter — Agency'),
			description: L(
				'Een meertalige Payload + Next.js starter met een blok-gebaseerde paginabouwer.',
				'A multilingual Payload + Next.js starter with a block-based page builder.'
			)
		},
		layout: [
			{
				blockType: 'heroStatementText',
				backgroundStyle: 'gradient',
				eyebrow: L('Payload Starter', 'Payload Starter'),
				title: L('Bouw sneller met blokken', 'Build faster with blocks'),
				content: rtL(
					['Een complete, meertalige starter om in recordtijd te lanceren.'],
					['A complete, multilingual starter to launch in record time.']
				),
				stats: [
					{ icon: 'Layers', value: L('30+', '30+'), label: L('Blokken', 'Blocks') },
					{ icon: 'Globe', value: L('2', '2'), label: L('Talen', 'Languages') },
					{ icon: 'Zap', value: L('100%', '100%'), label: L('Type-safe', 'Type-safe') }
				]
			},
			{
				blockType: 'logoCloud',
				backgroundColor: 'surface',
				title: L('Vertrouwd door teams', 'Trusted by teams'),
				logos: [
					{ name: 'Northwind' },
					{ name: 'Lumen' },
					{ name: 'Cedar' },
					{ name: 'Vertex' },
					{ name: 'Atlas' }
				]
			},
			{
				blockType: 'featureBoxes',
				cols: '3',
				eyebrow: L('Functies', 'Features'),
				title: L('Alles wat je nodig hebt', 'Everything you need'),
				items: [
					{
						icon: 'Blocks',
						heading: L('Blok-gebaseerd', 'Block-based'),
						description: L(
							'Stel pagina’s samen met herbruikbare blokken.',
							'Compose pages with reusable blocks.'
						),
						tags: [{ tag: L('Pagina’s', 'Pages') }]
					},
					{
						icon: 'Globe',
						heading: L('Meertalig', 'Multilingual'),
						description: L(
							'Nederlands en Engels standaard ingebouwd.',
							'Dutch and English built in by default.'
						),
						tags: [{ tag: L('i18n', 'i18n') }]
					},
					{
						icon: 'Rocket',
						heading: L('Klaar voor productie', 'Production ready'),
						description: L(
							'SEO, sitemaps en previews zijn al geregeld.',
							'SEO, sitemaps and previews are already wired up.'
						),
						tags: [{ tag: L('SEO', 'SEO') }]
					}
				]
			},
			{
				blockType: 'steps',
				eyebrow: L('Werkwijze', 'How it works'),
				title: L('In drie stappen live', 'Live in three steps'),
				steps: [
					{
						number: '01',
						title: L('Klonen', 'Clone'),
						description: L('Kloon de repo en installeer dependencies.', 'Clone the repo and install dependencies.')
					},
					{
						number: '02',
						title: L('Configureren', 'Configure'),
						description: L('Stel je database en omgeving in.', 'Set up your database and environment.')
					},
					{
						number: '03',
						title: L('Lanceren', 'Launch'),
						description: L('Draai de seed en ga live.', 'Run the seed and go live.')
					}
				]
			},
			{
				blockType: 'stats',
				variant: 'grid',
				title: L('In cijfers', 'By the numbers'),
				items: [
					{ icon: 'Package', value: L('30+', '30+'), label: L('Blokken', 'Blocks') },
					{ icon: 'Languages', value: L('2', '2'), label: L('Talen', 'Languages') },
					{ icon: 'Gauge', value: L('A+', 'A+'), label: L('Prestaties', 'Performance') },
					{ icon: 'ShieldCheck', value: L('100%', '100%'), label: L('Type-safe', 'Type-safe') }
				]
			},
			{
				blockType: 'testimonials',
				backgroundColor: 'surface',
				eyebrow: L('Reviews', 'Reviews'),
				title: L('Wat klanten zeggen', 'What customers say'),
				loadFromCollection: true,
				testimonials: testimonialIds
			},
			{
				blockType: 'pricing',
				eyebrow: L('Prijzen', 'Pricing'),
				title: L('Eenvoudige prijzen', 'Simple pricing'),
				plans: [
					{
						name: L('Starter', 'Starter'),
						price: L('€0', '€0'),
						billingPeriod: L('maand', 'month'),
						description: L('Voor kleine projecten.', 'For small projects.'),
						features: [
							{ feature: L('Alle blokken', 'All blocks') },
							{ feature: L('1 taal', '1 language') }
						],
						ctaLabel: L('Begin gratis', 'Start free'),
						ctaHref: L('/contact', '/contact'),
						highlighted: false
					},
					{
						name: L('Pro', 'Pro'),
						price: L('€49', '€49'),
						billingPeriod: L('maand', 'month'),
						description: L('Voor groeiende teams.', 'For growing teams.'),
						features: [
							{ feature: L('Alle blokken', 'All blocks') },
							{ feature: L('Meertalig', 'Multilingual') },
							{ feature: L('Prioriteitssupport', 'Priority support') }
						],
						ctaLabel: L('Kies Pro', 'Choose Pro'),
						ctaHref: L('/contact', '/contact'),
						highlighted: true
					}
				]
			},
			ctaBlock
		]
	})

	// 9b. Home — local business
	const homeLocalPage = await createBilingual('pages', {
		title: L('Lokaal', 'Local'),
		slug: L('lokaal', 'local'),
		_status: 'published',
		meta: {
			title: L('Payload Starter — Lokaal bedrijf', 'Payload Starter — Local business'),
			description: L(
				'Een variant gericht op lokale dienstverleners.',
				'A variant aimed at local service businesses.'
			)
		},
		layout: [
			{
				blockType: 'heroCompact',
				backgroundColor: 'surface',
				eyebrow: L('Welkom', 'Welcome'),
				title: L('Jouw lokale partner', 'Your local partner'),
				content: rtL(
					['Persoonlijke service, dichtbij en betrouwbaar.'],
					['Personal service, close by and reliable.']
				)
			},
			{
				blockType: 'featuresSimple',
				layout: 'columns',
				eyebrow: L('Diensten', 'Services'),
				title: L('Waarmee we helpen', 'How we help'),
				items: [
					{
						icon: 'Wrench',
						heading: L('Onderhoud', 'Maintenance'),
						text: L('Snel en vakkundig onderhoud.', 'Fast and skilled maintenance.')
					},
					{
						icon: 'Clock',
						heading: L('Op tijd', 'On time'),
						text: L('We komen wanneer afgesproken.', 'We arrive when promised.')
					},
					{
						icon: 'Heart',
						heading: L('Persoonlijk', 'Personal'),
						text: L('Een vast aanspreekpunt.', 'A single point of contact.')
					}
				]
			},
			{
				blockType: 'bentoGrid',
				eyebrow: L('Highlights', 'Highlights'),
				title: L('Waarom voor ons kiezen', 'Why choose us'),
				items: [
					{
						icon: 'Award',
						title: L('15 jaar ervaring', '15 years of experience'),
						description: L('Bewezen vakmanschap.', 'Proven craftsmanship.'),
						size: 'wide'
					},
					{
						icon: 'MapPin',
						title: L('Lokaal', 'Local'),
						description: L('Actief in jouw regio.', 'Active in your region.'),
						size: 'normal'
					},
					{
						icon: 'ThumbsUp',
						title: L('Tevreden klanten', 'Happy customers'),
						description: L('Een 9,2 gemiddeld.', 'Rated 9.2 on average.'),
						size: 'normal'
					}
				]
			},
			{
				blockType: 'team',
				eyebrow: L('Team', 'Team'),
				title: L('Het team', 'Meet the team'),
				cols: '3',
				loadFromCollection: true,
				teamMembers: teamIds
			},
			{
				blockType: 'testimonials',
				backgroundColor: 'surface',
				title: L('Klanten aan het woord', 'Customer stories'),
				loadFromCollection: true,
				testimonials: testimonialIds
			},
			{
				blockType: 'faq',
				layout: 'two-col',
				eyebrow: L('FAQ', 'FAQ'),
				title: L('Veelgestelde vragen', 'Frequently asked questions'),
				items: [
					{
						question: L('Werken jullie in het weekend?', 'Do you work on weekends?'),
						answer: rtL(
							['Ja, op afspraak zijn we ook in het weekend beschikbaar.'],
							['Yes, by appointment we are available on weekends too.']
						)
					},
					{
						question: L('Hoe snel kunnen jullie komen?', 'How quickly can you come?'),
						answer: rtL(
							['Meestal binnen 48 uur, vaak sneller.'],
							['Usually within 48 hours, often sooner.']
						)
					}
				]
			},
			ctaBlock
		]
	})

	// 9c. About
	const aboutPage = await createBilingual('pages', {
		title: L('Over ons', 'About'),
		slug: L('over-ons', 'about'),
		_status: 'published',
		meta: {
			title: L('Over ons', 'About us'),
			description: L('Leer ons team en onze missie kennen.', 'Get to know our team and mission.')
		},
		layout: [
			{
				blockType: 'heroCompact',
				eyebrow: L('Over ons', 'About us'),
				title: L('Wij bouwen betere websites', 'We build better websites'),
				content: rtL(
					['Een klein team met een grote missie: het web eenvoudiger maken.'],
					['A small team with a big mission: making the web simpler.']
				)
			},
			{
				blockType: 'marquee',
				speed: 'normal',
				backgroundColor: 'surface',
				items: [
					{ text: L('Ontwerp', 'Design') },
					{ text: L('Techniek', 'Engineering') },
					{ text: L('Strategie', 'Strategy') },
					{ text: L('Content', 'Content') },
					{ text: L('Prestaties', 'Performance') }
				]
			},
			{
				blockType: 'timeline',
				eyebrow: L('Tijdlijn', 'Timeline'),
				title: L('Onze reis', 'Our journey'),
				items: [
					{
						date: L('2019', '2019'),
						title: L('Opgericht', 'Founded'),
						description: L('We begonnen met drie mensen.', 'We started with three people.')
					},
					{
						date: L('2022', '2022'),
						title: L('Internationaal', 'Going international'),
						description: L('Eerste klanten buiten Nederland.', 'First clients outside the Netherlands.')
					},
					{
						date: L('2025', '2025'),
						title: L('Open source', 'Open source'),
						description: L('We brachten onze starter uit.', 'We released our starter.')
					}
				]
			},
			{
				blockType: 'stats',
				variant: 'row',
				items: [
					{ icon: 'Users', value: L('12', '12'), label: L('Teamleden', 'Team members') },
					{ icon: 'Briefcase', value: L('200+', '200+'), label: L('Projecten', 'Projects') },
					{ icon: 'Star', value: L('9,2', '9.2'), label: L('Beoordeling', 'Rating') }
				]
			},
			{
				blockType: 'team',
				eyebrow: L('Team', 'Team'),
				title: L('De mensen', 'The people'),
				cols: '3',
				loadFromCollection: true,
				teamMembers: teamIds
			},
			ctaBlock
		]
	})

	// 9d. Contact
	const contactPage = await createBilingual('pages', {
		title: L('Contact', 'Contact'),
		slug: L('contact', 'contact'),
		_status: 'published',
		meta: {
			title: L('Contact', 'Contact'),
			description: L('Neem contact met ons op.', 'Get in touch with us.')
		},
		layout: [
			{
				blockType: 'heroCompact',
				backgroundColor: 'surface',
				eyebrow: L('Contact', 'Contact'),
				title: L('Neem contact op', 'Get in touch'),
				content: rtL(
					['We horen graag van je. Vul het formulier in of bel ons.'],
					['We would love to hear from you. Fill in the form or give us a call.']
				)
			},
			{
				blockType: 'featureBoxes',
				cols: '3',
				title: L('Bereik ons', 'Reach us'),
				items: [
					{
						icon: 'Mail',
						heading: L('E-mail', 'Email'),
						description: L('hello@example.com', 'hello@example.com')
					},
					{
						icon: 'Phone',
						heading: L('Telefoon', 'Phone'),
						description: L('+31 20 123 4567', '+31 20 123 4567')
					},
					{
						icon: 'MapPin',
						heading: L('Adres', 'Address'),
						description: L('Voorbeeldstraat 1, Amsterdam', 'Example Street 1, Amsterdam')
					}
				]
			},
			{
				blockType: 'formBlock',
				form: formId,
				enableIntro: true,
				title: L('Stuur een bericht', 'Send a message'),
				introContent: rtL(
					['Vul het formulier in en we reageren binnen één werkdag.'],
					['Fill in the form and we will respond within one business day.']
				)
			},
			{
				blockType: 'dataTable',
				eyebrow: L('Openingstijden', 'Opening hours'),
				title: L('Wanneer we open zijn', 'When we are open'),
				caption: L('Tijden kunnen op feestdagen afwijken.', 'Hours may vary on public holidays.'),
				rows: [
					{ label: L('Maandag – vrijdag', 'Monday – Friday'), value: L('09:00 – 17:00', '09:00 – 17:00') },
					{ label: L('Zaterdag', 'Saturday'), value: L('10:00 – 14:00', '10:00 – 14:00') },
					{ label: L('Zondag', 'Sunday'), value: L('Gesloten', 'Closed') }
				]
			}
		]
	})

	// 9e. Alle blokken — a living showcase of every block + variants.
	const alleBlokkenPage = await createBilingual('pages', {
		title: L('Alle blokken', 'All blocks'),
		slug: L('alle-blokken', 'all-blocks'),
		_status: 'published',
		meta: {
			title: L('Alle blokken', 'All blocks'),
			description: L(
				'Een overzicht van elk blok met verschillende varianten.',
				'An overview of every block with different variants.'
			)
		},
		layout: [
			// --- Heroes -----------------------------------------------------------
			{
				blockType: 'heroStatementText',
				backgroundStyle: 'gradient',
				eyebrow: L('Hero · Statement', 'Hero · Statement'),
				title: L('Alle blokken in één pagina', 'Every block on one page'),
				content: rtL(
					['Scroll door deze pagina om elk beschikbaar blok en zijn varianten te zien.'],
					['Scroll through this page to see every available block and its variants.']
				),
				buttons: [
					btn('#content', L('Bekijk content', 'View content'), 'primary'),
					btn('/docs', L('Documentatie', 'Documentation'), 'ghost')
				],
				stats: [
					{ icon: 'Layers', value: L('33', '33'), label: L('Blokken', 'Blocks') },
					{ icon: 'Globe', value: L('2', '2'), label: L('Talen', 'Languages') },
					{ icon: 'Palette', value: L('∞', '∞'), label: L('Varianten', 'Variants') }
				]
			},
			{
				blockType: 'heroCover',
				eyebrow: L('Hero · Cover', 'Hero · Cover'),
				title: L('Cover met achtergrondafbeelding', 'Cover with background image'),
				content: rtL(
					['Een volledige hero met overlay en knoppen bovenop een afbeelding.'],
					['A full hero with overlay and buttons on top of an image.']
				),
				image: gradientImg,
				imageAlt: L('Abstracte gradient', 'Abstract gradient'),
				height: 'lg',
				overlay: 'md',
				buttons: [
					btn('/contact', L('Aan de slag', 'Get started'), 'white'),
					refBtn(aboutPage.id, L('Meer info', 'Learn more'), 'ghost')
				]
			},
			{
				blockType: 'heroCover',
				backgroundStyle: 'gradient',
				eyebrow: L('Hero · Cover (gradiënt)', 'Hero · Cover (gradient)'),
				title: L('Cover met kleurverloop', 'Cover with a gradient'),
				content: rtL(
					['Dezelfde cover-hero, nu met een gelaagd kleurverloop in plaats van een afbeelding.'],
					['The same cover hero, now with a layered gradient instead of an image.']
				),
				height: 'lg',
				buttons: [
					btn('/contact', L('Verken programma’s', 'Explore programs'), 'white'),
					btn('#content', L('Onze visie', 'Our vision'), 'ghost')
				]
			},
			{
				blockType: 'heroSplit',
				backgroundColor: 'surface',
				eyebrow: L('Hero · Split', 'Hero · Split'),
				title: L('Tekst naast afbeelding', 'Text beside image'),
				content: rtL(
					['Een gesplitste hero met de afbeelding aan de rechterkant.'],
					['A split hero with the image on the right-hand side.']
				),
				image: workspaceImg,
				imageAlt: L('Werkplek', 'Workspace'),
				imagePosition: 'right',
				buttons: [btn('/contact', L('Neem contact op', 'Contact us'), 'primary')]
			},
			{
				blockType: 'heroSplit',
				variant: 'stats',
				eyebrow: L('Hero · Split (statistieken)', 'Hero · Split (stats)'),
				title: L('Tekst, cijfers en een badge', 'Text, stats and a badge'),
				content: rtL(
					['Een gesplitste hero met een statistiekenrij onder de tekst en een kaart over de afbeelding.'],
					['A split hero with a stat row under the text and a card overlaid on the image.']
				),
				image: gradientImg,
				imageAlt: L('Gradient', 'Gradient'),
				imagePosition: 'right',
				badgeTitle: L('Volgende start · 14 jun', 'Next start · 14 Jun'),
				badgeText: L('Trail 42K — Amersfoort', 'Trail 42K — Amersfoort'),
				buttons: [
					btn('/contact', L('Schrijf je in', 'Enter now'), 'primary'),
					btn('#content', L('Kalender', 'Calendar'), 'ghost')
				],
				stats: [
					{ value: L('3', '3'), label: L('Races', 'Races') },
					{ value: L('80K', '80K'), label: L('Max afstand', 'Max distance') },
					{ value: L('4.2K', '4.2K'), label: L('Deelnemers', 'Runners') }
				]
			},
			{
				blockType: 'heroCompact',
				backgroundColor: 'elevated',
				eyebrow: L('Hero · Compact', 'Hero · Compact'),
				title: L('Compacte koptekst', 'Compact header'),
				content: rtL(
					['Een kleine hero, ideaal als pagina-intro.'],
					['A small hero, ideal as a page intro.']
				)
			},
			// --- Features ---------------------------------------------------------
			{
				blockType: 'featuresSimple',
				layout: 'stacked',
				cols: '3',
				eyebrow: L('Features · Simple', 'Features · Simple'),
				title: L('Eenvoudige features (gestapeld)', 'Simple features (stacked)'),
				items: [
					{ icon: 'Blocks', heading: L('Modulair', 'Modular'), text: L('Bouw met blokken.', 'Build with blocks.') },
					{ icon: 'Globe', heading: L('Meertalig', 'Multilingual'), text: L('NL en EN ingebouwd.', 'NL and EN built in.') },
					{ icon: 'Zap', heading: L('Snel', 'Fast'), text: L('Geoptimaliseerd voor prestaties.', 'Optimised for performance.') }
				]
			},
			{
				blockType: 'featuresSimple',
				layout: 'columns',
				backgroundColor: 'surface',
				eyebrow: L('Features · Simple', 'Features · Simple'),
				title: L('Eenvoudige features (kolommen)', 'Simple features (columns)'),
				items: [
					{ icon: 'Code', heading: L('Type-safe', 'Type-safe'), text: L('Volledig getypeerd.', 'Fully typed.') },
					{ icon: 'Search', heading: L('SEO', 'SEO'), text: L('Meta en sitemaps.', 'Meta and sitemaps.') }
				]
			},
			{
				blockType: 'featureBoxes',
				cols: '3',
				eyebrow: L('Feature Boxes', 'Feature Boxes'),
				title: L('Feature-kaarten met tags', 'Feature cards with tags'),
				items: [
					{
						icon: 'Layers',
						heading: L('Blokken', 'Blocks'),
						subtitle: L('Bouwstenen', 'Building blocks'),
						description: L('Stel pagina’s samen uit blokken.', 'Compose pages from blocks.'),
						tags: [{ tag: L('CMS', 'CMS') }, { tag: L('Flexibel', 'Flexible') }]
					},
					{
						icon: 'ShieldCheck',
						heading: L('Veilig', 'Secure'),
						subtitle: L('Toegangscontrole', 'Access control'),
						description: L('Fijnmazige rechten per collectie.', 'Fine-grained access per collection.'),
						tags: [{ tag: L('Auth', 'Auth') }]
					},
					{
						icon: 'Rocket',
						heading: L('Snel live', 'Ship fast'),
						subtitle: L('Productieklaar', 'Production ready'),
						description: L('Alles is al ingesteld.', 'Everything is already wired up.'),
						tags: [{ tag: L('Next.js', 'Next.js') }]
					}
				]
			},
			{
				blockType: 'uspFeatures',
				backgroundColor: 'surface',
				eyebrow: L('USP Features', 'USP Features'),
				title: L('Voordelen met tags en cijfers', 'Benefits with tags and stats'),
				content: rtL(
					['Combineer voordelen, tags en statistieken in één blok.'],
					['Combine benefits, tags and stats in a single block.']
				),
				benefits: [
					{ text: L('Onbeperkt aantal pagina’s', 'Unlimited pages') },
					{ text: L('Live preview', 'Live preview') },
					{ text: L('Versiebeheer', 'Versioning') }
				],
				tagCardTitle: L('Inbegrepen technologie', 'Included technology'),
				tagCardDescription: L('Alles wat je nodig hebt.', 'Everything you need.'),
				tags: [
					{ label: L('Payload', 'Payload') },
					{ label: L('Next.js', 'Next.js') },
					{ label: L('Tailwind', 'Tailwind') },
					{ label: L('MongoDB', 'MongoDB') }
				],
				stats: [
					{ value: L('33', '33'), label: L('Blokken', 'Blocks') },
					{ value: L('2', '2'), label: L('Talen', 'Languages') }
				],
				buttons: [btn('/docs', L('Lees meer', 'Read more'), 'primary')]
			},
			{
				blockType: 'uspWithMedia',
				backgroundColor: 'default',
				uspsDisplay: 'list',
				eyebrow: L('USP with Media', 'USP with Media'),
				title: L('Voordelen naast een afbeelding', 'Benefits beside an image'),
				content: rtL(
					['Toon je sterke punten naast een sprekende afbeelding.'],
					['Show your strengths beside a striking image.']
				),
				benefits: [
					{ text: L('Eenvoudig te beheren', 'Easy to manage') },
					{ text: L('Volledig responsief', 'Fully responsive') },
					{ text: L('Toegankelijk', 'Accessible') }
				],
				image: shapesImg,
				imageAlt: L('Geometrische vormen', 'Geometric shapes'),
				imageWidth: '6',
				imagePosition: 'left',
				buttons: [btn('/contact', L('Begin nu', 'Start now'), 'primary')]
			},
			{
				blockType: 'imageFeatures',
				eyebrow: L('Image Features', 'Image Features'),
				title: L('Afbeelding met feature-lijst', 'Image with feature list'),
				content: rtL(
					['Een afbeelding gecombineerd met een lijst van kenmerken.'],
					['An image combined with a list of key features.']
				),
				features: [
					{ icon: 'Gauge', title: L('Snel', 'Fast'), text: L('Hoge Lighthouse-scores.', 'High Lighthouse scores.') },
					{ icon: 'Lock', title: L('Veilig', 'Secure'), text: L('Beproefde authenticatie.', 'Battle-tested auth.') },
					{ icon: 'Wrench', title: L('Onderhoudbaar', 'Maintainable'), text: L('Heldere structuur.', 'Clear structure.') }
				],
				image: workspaceImg,
				imageAlt: L('Werkplek', 'Workspace'),
				buttons: [btn('/docs', L('Bekijk docs', 'View docs'), 'primary')]
			},
			// --- Content & media --------------------------------------------------
			{
				blockType: 'textWithMedia',
				backgroundColor: 'surface',
				verticalAlign: 'center',
				eyebrow: L('Text with Media', 'Text with Media'),
				title: L('Tekst met afbeelding (links)', 'Text with media (left)'),
				content: rtL(
					['Een veelzijdig blok voor tekst naast een afbeelding.', 'De afbeelding kan links of rechts staan.'],
					['A versatile block for text beside an image.', 'The image can sit on the left or the right.']
				),
				image: gradientImg,
				imageAlt: L('Gradient', 'Gradient'),
				imageWidth: '6',
				imagePosition: 'left',
				buttons: [refBtn(aboutPage.id, L('Over ons', 'About us'), 'primary')]
			},
			{
				blockType: 'mediaBlock',
				media: shapesImg
			},
			{
				blockType: 'pureContent',
				containerWidth: 'narrow',
				textAlign: 'center',
				backgroundColor: 'default',
				eyebrow: L('Pure Content', 'Pure Content'),
				title: L('Alleen tekst, gecentreerd', 'Pure text, centered'),
				content: rtL(
					['Dit blok toont rijke tekst zonder media, met instelbare uitlijning en breedte.'],
					['This block shows rich text without media, with adjustable alignment and width.']
				),
				buttons: [btn('/posts', L('Naar de blog', 'Go to blog'), 'primary')]
			},
			{
				blockType: 'pureContent',
				containerWidth: 'default',
				textAlign: 'center',
				backgroundColor: 'default',
				backgroundImage: gradientImg,
				overlayOpacity: 60,
				eyebrow: L('Pure Content', 'Pure Content'),
				title: L('Met achtergrondafbeelding', 'With background image'),
				content: rtL(
					['Hetzelfde blok, nu met een achtergrondafbeelding en overlay.'],
					['The same block, now with a background image and overlay.']
				)
			},
			{
				blockType: 'cardsOpen',
				eyebrow: L('Cards · Open', 'Cards · Open'),
				title: L('Open kaarten', 'Open cards'),
				cards: [
					{
						image: workspaceImg,
						title: L('Ontwerp', 'Design'),
						content: rtL(['Doordachte, toegankelijke interfaces.'], ['Thoughtful, accessible interfaces.'])
					},
					{
						image: shapesImg,
						title: L('Ontwikkeling', 'Development'),
						content: rtL(['Schaalbare, type-veilige code.'], ['Scalable, type-safe code.'])
					},
					{
						image: gradientImg,
						title: L('Strategie', 'Strategy'),
						content: rtL(['Van idee tot lancering.'], ['From idea to launch.'])
					}
				]
			},
			{
				blockType: 'cardsOverlay',
				backgroundColor: 'surface',
				eyebrow: L('Cards · Overlay', 'Cards · Overlay'),
				title: L('Overlay kaarten met badges', 'Overlay cards with badges'),
				cards: [
					{
						image: gradientImg,
						title: L('Project Aurora', 'Project Aurora'),
						content: rtL(['Een merkidentiteit en website.'], ['A brand identity and website.']),
						details: [
							{ icon: 'Calendar', label: L('2025', '2025') },
							{ icon: 'Tag', label: L('Branding', 'Branding') }
						]
					},
					{
						image: shapesImg,
						title: L('Project Nova', 'Project Nova'),
						content: rtL(['Een productplatform.'], ['A product platform.']),
						details: [
							{ icon: 'Calendar', label: L('2024', '2024') },
							{ icon: 'Tag', label: L('Web app', 'Web app') }
						]
					},
					{
						image: workspaceImg,
						title: L('Project Cedar', 'Project Cedar'),
						content: rtL(['Een webshop met maatwerk.'], ['A bespoke e-commerce build.']),
						details: [
							{ icon: 'Calendar', label: L('2023', '2023') },
							{ icon: 'Tag', label: L('E-commerce', 'E-commerce') }
						]
					}
				]
			},
			{
				blockType: 'gallery',
				columns: '3',
				eyebrow: L('Gallery', 'Gallery'),
				title: L('Statische galerij', 'Static gallery'),
				images: [
					{ image: gradientImg, caption: L('Gradient', 'Gradient') },
					{ image: workspaceImg, caption: L('Werkplek', 'Workspace') },
					{ image: shapesImg, caption: L('Vormen', 'Shapes') }
				]
			},
			{
				blockType: 'carouselGallery',
				backgroundColor: 'surface',
				eyebrow: L('Carousel Gallery', 'Carousel Gallery'),
				title: L('Schuifbare galerij', 'Swipeable gallery'),
				images: [
					{ image: workspaceImg, caption: L('Slide 1', 'Slide 1') },
					{ image: shapesImg, caption: L('Slide 2', 'Slide 2') },
					{ image: gradientImg, caption: L('Slide 3', 'Slide 3') }
				]
			},
			{
				blockType: 'carouselGallery',
				variant: 'peek',
				eyebrow: L('Carousel · Peek', 'Carousel · Peek'),
				title: L('Gemaakt voor elke dag', 'Made for your every day'),
				images: [
					{ image: gradientImg, caption: L('Onderweg', 'On the commute') },
					{ image: workspaceImg, caption: L('In de studio', 'In the studio') },
					{ image: shapesImg, caption: L('Diepe focus', 'Deep focus') }
				]
			},
			// --- Structure & data -------------------------------------------------
			{
				blockType: 'steps',
				eyebrow: L('Steps', 'Steps'),
				title: L('Stappenplan', 'Step-by-step'),
				steps: [
					{ number: '01', title: L('Klonen', 'Clone'), description: L('Haal de repo binnen.', 'Pull the repo.') },
					{ number: '02', title: L('Configureren', 'Configure'), description: L('Stel je omgeving in.', 'Set up your environment.') },
					{ number: '03', title: L('Lanceren', 'Launch'), description: L('Draai de seed en ga live.', 'Run the seed and go live.') }
				]
			},
			{
				blockType: 'stats',
				variant: 'row',
				eyebrow: L('Stats · Row', 'Stats · Row'),
				title: L('Statistieken (rij)', 'Stats (row)'),
				items: [
					{ icon: 'Package', value: L('33', '33'), label: L('Blokken', 'Blocks') },
					{ icon: 'Languages', value: L('2', '2'), label: L('Talen', 'Languages') },
					{ icon: 'Star', value: L('9,2', '9.2'), label: L('Score', 'Score') }
				]
			},
			{
				blockType: 'stats',
				variant: 'grid',
				backgroundColor: 'surface',
				eyebrow: L('Stats · Grid', 'Stats · Grid'),
				title: L('Statistieken (raster)', 'Stats (grid)'),
				items: [
					{ icon: 'Users', value: L('12', '12'), label: L('Teamleden', 'Team members') },
					{ icon: 'Briefcase', value: L('200+', '200+'), label: L('Projecten', 'Projects') },
					{ icon: 'Gauge', value: L('A+', 'A+'), label: L('Prestaties', 'Performance') },
					{ icon: 'ShieldCheck', value: L('100%', '100%'), label: L('Type-safe', 'Type-safe') }
				]
			},
			{
				blockType: 'stats',
				variant: 'band',
				backgroundColor: 'primary',
				eyebrow: L('Stats · Band', 'Stats · Band'),
				title: L('Grote cijfers op een band', 'Big numbers on a band'),
				items: [
					{ value: L('0,12g', '0.12g'), label: L('CO₂ per pagina', 'CO₂ per page'), description: L('gemiddelde site', 'average site') },
					{ value: L('98', '98'), label: L('Lighthouse-score', 'Lighthouse score'), description: L('mediaan prestatie', 'performance median') },
					{ value: L('12kb', '12kb'), label: L('JavaScript', 'JavaScript'), description: L('first-party bundle', 'first-party bundle') },
					{ value: L('100%', '100%'), label: L('Groene hosting', 'Green hosting'), description: L('hernieuwbare CDN', 'renewable CDN') }
				]
			},
			{
				blockType: 'pricing',
				eyebrow: L('Pricing', 'Pricing'),
				title: L('Prijzen', 'Pricing'),
				plans: [
					{
						name: L('Starter', 'Starter'),
						price: L('€0', '€0'),
						billingPeriod: L('maand', 'month'),
						description: L('Voor kleine projecten.', 'For small projects.'),
						features: [{ feature: L('Alle blokken', 'All blocks') }, { feature: L('1 taal', '1 language') }],
						ctaLabel: L('Begin gratis', 'Start free'),
						ctaHref: L('/contact', '/contact'),
						highlighted: false
					},
					{
						name: L('Pro', 'Pro'),
						price: L('€49', '€49'),
						billingPeriod: L('maand', 'month'),
						description: L('Voor groeiende teams.', 'For growing teams.'),
						features: [
							{ feature: L('Alle blokken', 'All blocks') },
							{ feature: L('Meertalig', 'Multilingual') },
							{ feature: L('Support', 'Support') }
						],
						ctaLabel: L('Kies Pro', 'Choose Pro'),
						ctaHref: L('/contact', '/contact'),
						highlighted: true
					}
				]
			},
			{
				blockType: 'pricing',
				variant: 'tiered',
				eyebrow: L('Pricing · Tiered', 'Pricing · Tiered'),
				title: L('16 weken naar de start', '16 weeks to the start line'),
				plans: [
					{
						name: L('Basis', 'Base'),
						tagline: L('8 weken', '8 weeks'),
						description: L('Bouw je aerobe basis op voor racespecifiek werk.', 'Build your aerobic base before race-specific work.'),
						features: [
							{ feature: L('4 runs · 35 km', '4 runs · 35 km') },
							{ feature: L('Piek: 18 km duurloop', 'Peak: 18 km long run') }
						],
						ctaLabel: L('Download PDF', 'Download PDF'),
						ctaHref: L('/contact', '/contact'),
						highlighted: false
					},
					{
						name: L('Opbouw', 'Build'),
						tagline: L('6 weken', '6 weeks'),
						description: L('Introduceer drempelintervallen en lange duurlopen.', 'Introduce threshold intervals and long runs.'),
						features: [
							{ feature: L('5 runs · 48 km', '5 runs · 48 km') },
							{ feature: L('Piek: 32 km met tempo', 'Peak: 32 km with tempo') }
						],
						ctaLabel: L('Download PDF', 'Download PDF'),
						ctaHref: L('/contact', '/contact'),
						highlighted: true
					},
					{
						name: L('Taper', 'Taper'),
						tagline: L('2 weken', '2 weeks'),
						description: L('Het volume daalt 40%. Benen blijven scherp.', 'Volume drops 40%. Legs stay sharp.'),
						features: [
							{ feature: L('3 runs · 22 km', '3 runs · 22 km') },
							{ feature: L('Piek: 10 km uitloop', 'Peak: 10 km shakeout') }
						],
						ctaLabel: L('Download PDF', 'Download PDF'),
						ctaHref: L('/contact', '/contact'),
						highlighted: false
					}
				]
			},
			{
				blockType: 'faq',
				layout: 'single-col',
				eyebrow: L('FAQ · Eén kolom', 'FAQ · Single column'),
				title: L('Veelgestelde vragen', 'Frequently asked questions'),
				items: [
					{
						question: L('Is dit een meertalige starter?', 'Is this a multilingual starter?'),
						answer: rtL(['Ja, Nederlands en Engels zijn standaard ingebouwd.'], ['Yes, Dutch and English are built in by default.'])
					},
					{
						question: L('Kan ik blokken toevoegen?', 'Can I add my own blocks?'),
						answer: rtL(['Zeker, elk blok is een losse map met config en component.'], ['Absolutely, each block is a folder with a config and component.'])
					}
				]
			},
			{
				blockType: 'faq',
				layout: 'two-col',
				backgroundColor: 'surface',
				eyebrow: L('FAQ · Twee kolommen', 'FAQ · Two columns'),
				title: L('Nog meer vragen', 'More questions'),
				items: [
					{
						question: L('Werkt live preview?', 'Does live preview work?'),
						answer: rtL(['Ja, met directe updates in de admin.'], ['Yes, with instant updates in the admin.'])
					},
					{
						question: L('Is SEO inbegrepen?', 'Is SEO included?'),
						answer: rtL(['Meta-velden en sitemaps zijn al ingesteld.'], ['Meta fields and sitemaps are already set up.'])
					}
				]
			},
			{
				blockType: 'dataTable',
				eyebrow: L('Data Table', 'Data Table'),
				title: L('Specificaties', 'Specifications'),
				caption: L('Voorbeeldgegevens.', 'Example data.'),
				rows: [
					{ label: L('Framework', 'Framework'), value: L('Next.js 16', 'Next.js 16') },
					{ label: L('CMS', 'CMS'), value: L('Payload 3', 'Payload 3') },
					{ label: L('Database', 'Database'), value: L('MongoDB', 'MongoDB') },
					{ label: L('Styling', 'Styling'), value: L('Tailwind CSS', 'Tailwind CSS') }
				]
			},
			{
				blockType: 'comparisonTable',
				backgroundColor: 'surface',
				eyebrow: L('Comparison Table', 'Comparison Table'),
				title: L('Pakketten vergelijken', 'Compare plans'),
				columns: [
					{ name: L('Functie', 'Feature') },
					{ name: L('Starter', 'Starter') },
					{ name: L('Pro', 'Pro') }
				],
				rows: [
					{ feature: L('Alle blokken', 'All blocks'), cells: [{ value: L('✓', '✓') }, { value: L('✓', '✓') }] },
					{ feature: L('Meertalig', 'Multilingual'), cells: [{ value: L('—', '—') }, { value: L('✓', '✓') }] },
					{ feature: L('Support', 'Support'), cells: [{ value: L('E-mail', 'Email') }, { value: L('Prioriteit', 'Priority') }] }
				]
			},
			{
				blockType: 'workIndex',
				eyebrow: L('Work Index', 'Work Index'),
				title: L('Geselecteerd werk', 'Selected work'),
				items: [
					{ title: L('Aurora', 'Aurora'), category: L('Branding', 'Branding'), year: '2025' },
					{ title: L('Nova', 'Nova'), category: L('Web app', 'Web app'), year: '2024' },
					{ title: L('Cedar', 'Cedar'), category: L('E-commerce', 'E-commerce'), year: '2023' }
				]
			},
			{
				blockType: 'workIndex',
				variant: 'detailed',
				backgroundColor: 'surface',
				eyebrow: L('Work Index · Detailed', 'Work Index · Detailed'),
				title: L('Een genummerde index met subregels', 'A numbered index with sub-lines'),
				items: [
					{
						title: L('Claimbeheer', 'Claim governance'),
						description: L('Pre-flight review voor elke duurzaamheidsboodschap', 'Pre-flight review for every sustainability message'),
						url: '#content'
					},
					{
						title: L('Koolstofverhaal', 'Carbon narrative'),
						description: L('Boekhouding op campagneniveau die je CFO kan rijmen', 'Campaign-level accounting your CFO can reconcile'),
						url: '#content'
					},
					{
						title: L('Regelgevingshorizon', 'Regulatory horizon'),
						description: L('EU Green Claims, CSRD en wat hierna komt', 'EU Green Claims, CSRD and what lands next'),
						url: '#content'
					}
				]
			},
			{
				blockType: 'timeline',
				backgroundColor: 'surface',
				eyebrow: L('Timeline', 'Timeline'),
				title: L('Onze reis', 'Our journey'),
				items: [
					{ date: L('2019', '2019'), title: L('Opgericht', 'Founded'), description: L('We begonnen met drie mensen.', 'We started with three people.') },
					{ date: L('2022', '2022'), title: L('Internationaal', 'International'), description: L('Eerste klanten in het buitenland.', 'First clients abroad.') },
					{ date: L('2025', '2025'), title: L('Open source', 'Open source'), description: L('We brachten de starter uit.', 'We released the starter.') }
				]
			},
			{
				blockType: 'bentoGrid',
				eyebrow: L('Bento Grid', 'Bento Grid'),
				title: L('Bento-raster', 'Bento grid'),
				items: [
					{ icon: 'Sparkles', title: L('Uitgelicht', 'Featured'), description: L('Een breed tegelvlak.', 'A wide feature tile.'), image: gradientImg, size: 'wide' },
					{ icon: 'Layers', title: L('Blokken', 'Blocks'), description: L('Modulaire opbouw.', 'Modular layout.'), size: 'normal' },
					{ icon: 'Globe', title: L('Meertalig', 'Multilingual'), description: L('NL & EN.', 'NL & EN.'), size: 'normal' },
					{ icon: 'Image', title: L('Media', 'Media'), description: L('Met afbeelding.', 'With image.'), image: shapesImg, size: 'tall' }
				]
			},
			{
				blockType: 'logoCloud',
				backgroundColor: 'surface',
				title: L('Logo cloud', 'Logo cloud'),
				logos: [
					{ name: 'Northwind' },
					{ name: 'Lumen' },
					{ name: 'Cedar' },
					{ name: 'Vertex' },
					{ name: 'Atlas' }
				]
			},
			{
				blockType: 'marquee',
				speed: 'normal',
				backgroundColor: 'elevated',
				items: [
					{ text: L('Ontwerp', 'Design') },
					{ text: L('Techniek', 'Engineering') },
					{ text: L('Strategie', 'Strategy') },
					{ text: L('Content', 'Content') },
					{ text: L('Prestaties', 'Performance') }
				]
			},
			// --- Social proof -----------------------------------------------------
			{
				blockType: 'testimonials',
				eyebrow: L('Testimonials · Inline', 'Testimonials · Inline'),
				title: L('Reviews (handmatig)', 'Reviews (manual)'),
				loadFromCollection: false,
				items: [
					{
						quote: L('Een fantastische starter om mee te bouwen.', 'A fantastic starter to build with.'),
						name: L('Mark Visser', 'Mark Visser'),
						role: L('CTO, Northwind', 'CTO, Northwind'),
						stars: 5
					},
					{
						quote: L('Meertalig en flexibel, precies wat we zochten.', 'Multilingual and flexible, exactly what we wanted.'),
						name: L('Eva Smit', 'Eva Smit'),
						role: L('Marketing, Lumen', 'Marketing, Lumen'),
						stars: 5
					}
				]
			},
			{
				blockType: 'testimonials',
				backgroundColor: 'surface',
				eyebrow: L('Testimonials · Collectie', 'Testimonials · Collection'),
				title: L('Reviews (uit collectie)', 'Reviews (from collection)'),
				loadFromCollection: true,
				testimonials: testimonialIds
			},
			{
				blockType: 'team',
				cols: '3',
				eyebrow: L('Team · Inline', 'Team · Inline'),
				title: L('Team (handmatig)', 'Team (manual)'),
				loadFromCollection: false,
				members: [
					{ name: L('Sofie de Vries', 'Sofie de Vries'), role: L('Oprichter', 'Founder'), bio: L('Leidt het team.', 'Leads the team.') },
					{ name: L('Daan Jansen', 'Daan Jansen'), role: L('Ontwerp', 'Design'), bio: L('Maakt het mooi.', 'Makes it beautiful.') },
					{ name: L('Noor El Amrani', 'Noor El Amrani'), role: L('Engineering', 'Engineering'), bio: L('Bouwt het systeem.', 'Builds the system.') }
				]
			},
			{
				blockType: 'team',
				cols: '3',
				backgroundColor: 'surface',
				eyebrow: L('Team · Collectie', 'Team · Collection'),
				title: L('Team (uit collectie)', 'Team (from collection)'),
				loadFromCollection: true,
				teamMembers: teamIds
			},
			// --- Conversion -------------------------------------------------------
			{
				blockType: 'newsletter',
				backgroundColor: 'surface',
				title: L('Blijf op de hoogte', 'Stay in the loop'),
				description: L('Ontvang updates over nieuwe blokken en features.', 'Get updates about new blocks and features.'),
				placeholder: L('jij@voorbeeld.nl', 'you@example.com'),
				ctaLabel: L('Inschrijven', 'Subscribe')
			},
			{
				blockType: 'archive',
				eyebrow: L('Archive', 'Archive'),
				heading: L('Laatste artikelen', 'Latest articles'),
				populateBy: 'collection',
				limit: 3,
				showFilters: false
			},
			{
				blockType: 'formBlock',
				form: formId,
				enableIntro: true,
				title: L('Formulierblok', 'Form block'),
				introContent: rtL(
					['Een formulier dat is gekoppeld aan de form-builder.'],
					['A form connected to the form builder.']
				)
			},
			{
				blockType: 'cta',
				variant: 'centered',
				image: workspaceImg,
				imageAlt: L('Werkplek', 'Workspace'),
				eyebrow: L('CTA · Centered', 'CTA · Centered'),
				title: L('Gecentreerde call-to-action', 'Centered call-to-action'),
				content: rtL(['Een eenvoudige, gecentreerde oproep tot actie.'], ['A simple, centered call to action.']),
				buttons: [btn('/contact', L('Neem contact op', 'Contact us'), 'white')]
			},
			{
				blockType: 'cta',
				variant: 'card',
				backgroundColor: 'primary',
				image: gradientImg,
				imageAlt: L('Abstracte gradient', 'Abstract gradient'),
				eyebrow: L('CTA · Card', 'CTA · Card'),
				title: L('CTA als kaart', 'CTA as a card'),
				content: rtL(['Dezelfde CTA, nu als een opvallende kaart.'], ['The same CTA, now as a standout card.']),
				buttons: [btn('/docs', L('Lees de docs', 'Read the docs'), 'white')]
			}
		]
	})

	// 10. Globals.
	await seedGlobal('settings', {
		siteName: 'Danny Moons',
		tagline: L(
			'Een meertalige Payload + Next.js starter.',
			'A multilingual Payload + Next.js starter.'
		),
		social: {
			twitter: 'https://twitter.com',
			linkedin: 'https://linkedin.com',
			github: 'https://github.com'
		}
	})

	await seedGlobal('header', {
		navItems: [
			{ link: { type: 'reference', reference: { relationTo: 'pages', value: aboutPage.id }, label: L('Over ons', 'About'), newTab: false } },
			{ link: { type: 'custom', url: '/posts', label: L('Blog', 'Blog'), newTab: false } },
			{ link: { type: 'custom', url: '/docs', label: L('Docs', 'Docs'), newTab: false } },
			{ link: { type: 'reference', reference: { relationTo: 'pages', value: alleBlokkenPage.id }, label: L('Alle blokken', 'All blocks'), newTab: false } },
			{ link: { type: 'reference', reference: { relationTo: 'pages', value: homeLocalPage.id }, label: L('Lokaal', 'Local'), newTab: false } }
		],
		cta: {
			enabled: true,
			link: {
				type: 'reference',
				reference: { relationTo: 'pages', value: contactPage.id },
				label: L('Contact', 'Contact'),
				newTab: false,
				appearance: 'default'
			}
		}
	})

	await seedGlobal('footer', {
		description: L(
			'Gebouwd met Payload CMS en Next.js. Open source en klaar om te starten.',
			'Built with Payload CMS and Next.js. Open source and ready to start.'
		),
		columns: [
			{
				label: L('Product', 'Product'),
				navItems: [
					{ link: { type: 'custom', url: '/', label: L('Home', 'Home'), newTab: false } },
					{ link: { type: 'reference', reference: { relationTo: 'pages', value: homeLocalPage.id }, label: L('Lokaal', 'Local'), newTab: false } }
				]
			},
			{
				label: L('Bronnen', 'Resources'),
				navItems: [
					{ link: { type: 'custom', url: '/posts', label: L('Blog', 'Blog'), newTab: false } },
					{ link: { type: 'custom', url: '/docs', label: L('Docs', 'Docs'), newTab: false } }
				]
			},
			{
				label: L('Bedrijf', 'Company'),
				navItems: [
					{ link: { type: 'reference', reference: { relationTo: 'pages', value: aboutPage.id }, label: L('Over ons', 'About'), newTab: false } },
					{ link: { type: 'reference', reference: { relationTo: 'pages', value: contactPage.id }, label: L('Contact', 'Contact'), newTab: false } }
				]
			}
		],
		socialLinks: [
			{ label: 'Twitter', url: 'https://twitter.com' },
			{ label: 'LinkedIn', url: 'https://linkedin.com' },
			{ label: 'GitHub', url: 'https://github.com' }
		]
	})

	payload.logger.info('— Seeding complete —')
}
