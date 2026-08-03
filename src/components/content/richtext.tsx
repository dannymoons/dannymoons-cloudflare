import { Paragraph } from '@/components/content/paragraph'
import { List, ListItem } from '@/components/content/list'
// import { textStyles } from 'components/content/Text'
import { cn } from '@/utilities/ui'
import type {
	DefaultNodeTypes,
	SerializedLinkNode,
	SerializedHeadingNode,
	SerializedTextNode,
	SerializedListNode,
	SerializedListItemNode
} from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import {
	type JSXConvertersFunction,
	LinkJSXConverter,
	RichText as RichTextWithoutBlocks
} from '@payloadcms/richtext-lexical/react'

import { Fragment } from 'react'
import Link from 'next/link'

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
	| SerializedHeadingNode
	| SerializedTextNode
	| SerializedLinkNode
	| SerializedListNode
	| SerializedListItemNode

type TextSize = 'sm' | 'md' | 'lg'

const jsxConverters =
	(textSize?: TextSize): JSXConvertersFunction<NodeTypes> =>
	({ defaultConverters }) => ({
		...defaultConverters,
		...{ ...LinkJSXConverter },
		paragraph: ({ node }) => (
			<Paragraph
				color='default'
				marginBottom={'none'}
				marginTop={'none'}
				size={textSize || 'lg'}
			>
				{node.children?.map((child, index) => {
					switch (child.type) {
						case 'text':
							return (
								<Fragment
									key={`text-${index}-${(child as SerializedTextNode).text}`}
								>
									{(child as SerializedTextNode).text}
								</Fragment>
							)
						case 'link':
							return (
								<Link
									className='underline'
									key={`link-${index}-${(child as SerializedLinkNode).fields.url}`}
									href={(child as SerializedLinkNode).fields.url || ''}
								>
									{(child as SerializedLinkNode).children.map(
										(linkChild, linkIndex) => (
											<Fragment
												key={`link-child-${linkIndex}-${(linkChild as SerializedTextNode).text}`}
											>
												{linkChild.type === 'text'
													? (linkChild as SerializedTextNode).text
													: null}
											</Fragment>
										)
									)}
								</Link>
							)
						default:
							return null
					}
				})}
			</Paragraph>
		),
		heading: ({ node }) => {
			const tag = (node as SerializedHeadingNode).tag
			return (
			<Heading headingLevel={tag} size={headingSizes[tag] ?? 'md'} className='mt-2'>
				{node.children.map((child, index) => {
					switch (child.type) {
						case 'text':
							return (
								<Fragment
									key={`heading-text-${index}-${(child as SerializedTextNode).text}`}
								>
									{(child as SerializedTextNode).text}
								</Fragment>
							)
						case 'link':
							return (
								<Link
									className='underline'
									key={`heading-link-${index}-${(child as SerializedLinkNode).fields.url}`}
									href={(child as SerializedLinkNode).fields.url || ''}
								>
									{(child as SerializedLinkNode).children.map(
										(linkChild, linkIndex) => (
											<Fragment
												key={`heading-link-child-${linkIndex}-${(linkChild as SerializedTextNode).text}`}
											>
												{linkChild.type === 'text'
													? (linkChild as SerializedTextNode).text
													: null}
											</Fragment>
										)
									)}
								</Link>
							)
						default:
							return null
					}
				})}
			</Heading>
			)
		},
		list: ({ node }) => (
			<Fragment>
				{(node as SerializedListNode).children.length > 0 && (
					<List listType={node.tag}>
						{(node as SerializedListNode).children.map((child, index) => {
							return (
								<ListItem
									key={`list-item-${crypto.randomUUID()}`}
									className='my-2 list-disc @xl:text-xl text-lg'
								>
									{(child as SerializedListItemNode).children.map(
										(child, childIndex) => {
											switch (child.type) {
												case 'text':
													return (
														<Fragment
															key={`list-text-${childIndex}-${(child as SerializedTextNode).text}`}
														>
															{(child as SerializedTextNode).text}
														</Fragment>
													)
												case 'link':
													return (
														<Link
															className='underline'
															key={`list-link-${childIndex}-${(child as SerializedLinkNode).fields.url}`}
															href={
																(child as SerializedLinkNode).fields.url || ''
															}
														>
															{(child as SerializedLinkNode).children.map(
																(linkChild, linkIndex) => (
																	<Fragment
																		key={`list-link-child-${linkIndex}-${(linkChild as SerializedTextNode).text}`}
																	>
																		{linkChild.type === 'text'
																			? (linkChild as SerializedTextNode).text
																			: null}
																	</Fragment>
																)
															)}
														</Link>
													)
												default:
													return null
											}
										}
									)}
								</ListItem>
							)
						})}
					</List>
				)}
			</Fragment>
		),
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
