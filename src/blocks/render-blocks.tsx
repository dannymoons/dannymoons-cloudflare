import type React from 'react'
import { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { HeroCompactBlock } from '@/blocks/hero-compact/component'
import { HeroCoverBlock } from '@/blocks/hero-cover/component'
import { HeroSplitBlock } from '@/blocks/hero-split/component'
import { HeroStatementTextBlock } from '@/blocks/hero-statement-text/component'
import { FeaturesSimpleBlock } from '@/blocks/features-simple/component'
import { FeatureBoxesBlock } from '@/blocks/feature-boxes/component'
import { UspFeaturesBlock } from '@/blocks/usp-features/component'
import { UspWithMediaBlock } from '@/blocks/usp-with-media/component'
import { StepsBlock } from '@/blocks/steps/component'
import { CtaBlock } from '@/blocks/cta/component'
import { TestimonialsBlock } from '@/blocks/testimonials/component'
import { StatsBlock } from '@/blocks/stats/component'
import { TeamBlock } from '@/blocks/team/component'
import { ArchiveBlock } from '@/blocks/archive/component'
import { FaqBlock } from '@/blocks/faq/component'
import { PricingBlock } from '@/blocks/pricing/component'
import { MediaBlock } from '@/blocks/media/component'
import { TextWithMediaBlock } from '@/blocks/text-with-media/component'
import { CardsOpenBlock } from '@/blocks/cards-open/component'
import { CardsOverlayBlock } from '@/blocks/cards-overlay/component'
import { ImageFeaturesBlock } from '@/blocks/image-features/component'
import { PureContentBlock } from '@/blocks/pure-content/component'
import { FormBlock } from '@/blocks/form/component'
import { LogoCloudBlock } from '@/blocks/logo-cloud/component'
import { GalleryBlock } from '@/blocks/gallery/component'
import { CarouselGalleryBlock } from '@/blocks/carousel-gallery/component'
import { NewsletterBlock } from '@/blocks/newsletter/component'
import { DataTableBlock } from '@/blocks/data-table/component'
import { ComparisonTableBlock } from '@/blocks/comparison-table/component'
import { WorkIndexBlock } from '@/blocks/work-index/component'
import { MarqueeBlock } from '@/blocks/marquee/component'
import { TimelineBlock } from '@/blocks/timeline/component'
import { BentoGridBlock } from '@/blocks/bento-grid/component'

const blockComponents: Record<string, React.ComponentType<any>> = {
	heroCompact: HeroCompactBlock,
	heroCover: HeroCoverBlock,
	heroSplit: HeroSplitBlock,
	heroStatementText: HeroStatementTextBlock,
	featuresSimple: FeaturesSimpleBlock,
	featureBoxes: FeatureBoxesBlock,
	uspFeatures: UspFeaturesBlock,
	uspWithMedia: UspWithMediaBlock,
	steps: StepsBlock,
	cta: CtaBlock,
	testimonials: TestimonialsBlock,
	stats: StatsBlock,
	team: TeamBlock,
	archive: ArchiveBlock,
	faq: FaqBlock,
	pricing: PricingBlock,
	mediaBlock: MediaBlock,
	textWithMedia: TextWithMediaBlock,
	cardsOpen: CardsOpenBlock,
	cardsOverlay: CardsOverlayBlock,
	imageFeatures: ImageFeaturesBlock,
	pureContent: PureContentBlock,
	logoCloud: LogoCloudBlock,
	gallery: GalleryBlock,
	carouselGallery: CarouselGalleryBlock,
	newsletter: NewsletterBlock,
	dataTable: DataTableBlock,
	comparisonTable: ComparisonTableBlock,
	workIndex: WorkIndexBlock,
	marquee: MarqueeBlock,
	timeline: TimelineBlock,
	bentoGrid: BentoGridBlock,
	formBlock: FormBlock
}

export const RenderBlocks: React.FC<{
	blocks: Page['layout'][0][]
	locale?: string
}> = ({ blocks, locale }) => {
	const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

	if (!hasBlocks) return null

	return (
		<Fragment>
			{blocks.map(block => {
				const { blockType, id } = block as { blockType?: string; id?: string }
				const blockKey = id ?? blockType ?? 'unknown'

				if (blockType && blockType in blockComponents) {
					const Block = blockComponents[blockType]
					if (Block) {
						return <Block key={blockKey} {...block} locale={locale} />
					}
				}
				return null
			})}
		</Fragment>
	)
}
