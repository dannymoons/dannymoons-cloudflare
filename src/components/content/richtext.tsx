import { Paragraph } from '@/components/content/paragraph'
// import { textStyles } from 'components/content/Text'
import { cn } from '@/utilities/ui'
import type {
	DefaultNodeTypes,
	SerializedBlockNode,
	SerializedHeadingNode
} from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import {
	type JSXConvertersFunction,
	LinkJSXConverter,
	RichText as RichTextWithoutBlocks
} from '@payloadcms/richtext-lexical/react'

import Heading from '@/components/content/heading'
import { Image } from '@/components/content/image'
import type { Media as MediaType } from '@/payload-types'

const headingSizes: Record<string, 'sm' | 'md' | 'lg'> = {
	h1: 'lg',
	h2: 'md',
	h3: 'sm',
	h4: 'sm',
	h5: 'sm',
	h6: 'sm'
}

type NodeTypes =
	| DefaultNodeTypes
	| SerializedBlockNode<{
		blockType: 'Code'
		code: string
		language?: string
	}>
	| SerializedHeadingNode

type TextSize = 'sm' | 'md' | 'lg'

type RichTextNode = {
	children?: RichTextNode[]
	tag?: string
	text?: string
	type?: string
}

export type TableOfContentsItem = {
	id: string
	level: 2 | 3
	text: string
}

function getNodeText(node: RichTextNode): string {
	if (node.type === 'text') return node.text ?? ''
	return (node.children ?? []).map(getNodeText).join('')
}

function getUniqueHeadingID(text: string, counts: Map<string, number>): string {
	const base =
		text
			.toLowerCase()
			.normalize('NFKD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '') || 'section'
	const count = counts.get(base) ?? 0
	counts.set(base, count + 1)
	return count === 0 ? base : `${base}-${count + 1}`
}

export function getTableOfContents(data: SerializedEditorState): TableOfContentsItem[] {
	const counts = new Map<string, number>()
	const nodes = data.root.children as RichTextNode[]

	return nodes.flatMap((node) => {
		if (node.type !== 'heading' || (node.tag !== 'h2' && node.tag !== 'h3')) return []
		const text = getNodeText(node).trim()
		if (!text) return []

		return [{ id: getUniqueHeadingID(text, counts), level: node.tag === 'h2' ? 2 : 3, text }]
	})
}

const jsxConverters = (textSize?: TextSize): JSXConvertersFunction<NodeTypes> => {
	const headingCounts = new Map<string, number>()

	return ({ defaultConverters }) => ({
		...defaultConverters,
		...{ ...LinkJSXConverter },
		blocks: {
			...defaultConverters.blocks,
			Code: ({ node }) => {
				const { code, language } = node.fields
				return (
					<pre className='my-8 max-w-full overflow-x-auto rounded-xl bg-muted p-4 text-sm leading-6'>
						<code data-language={language || undefined}>{code}</code>
					</pre>
				)
			}
		},
		paragraph: ({ node, nodesToJSX }) => (
			<Paragraph
				color='foreground'
				marginBottom={'none'}
				marginTop={'none'}
				size={textSize || 'lg'}
			>
				{nodesToJSX({ nodes: node.children })}
			</Paragraph>
		),
		heading: ({ node, nodesToJSX }) => {
			const tag = (node as SerializedHeadingNode).tag
			const text = getNodeText(node as RichTextNode).trim()
			const id =
				tag === 'h2' || tag === 'h3' ? getUniqueHeadingID(text, headingCounts) : undefined
			return (
				<Heading
					headingLevel={tag}
					size={headingSizes[tag] ?? 'md'}
					color='foreground'
					className='mt-2 scroll-mt-28'
					id={id}
				>
					{nodesToJSX({ nodes: node.children })}
				</Heading>
			)
		},
		upload: ({ node }) => {
			const value = (node as { value?: unknown }).value
			if (!value || typeof value !== 'object') return null
			return (
				<figure className='my-2 flex flex-col gap-2'>
					<Image
						{...(value as MediaType)}
						className='w-full rounded-2xl border border-border'
					/>
				</figure>
			)
		}
	})
}

interface RichTextBasicProps {
	data: SerializedEditorState
	textSize?: TextSize
	className?: string
}

export const RichTextBasic = ({
	textSize,
	className,
	...props
}: RichTextBasicProps) => {
	return (
		<RichTextWithoutBlocks
			converters={jsxConverters(textSize)}
			className={cn('flex flex-col gap-4', className)}
			{...props}
		/>
	)
}
