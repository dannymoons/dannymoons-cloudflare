import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import { Divider } from '@/components/layout/divider'
import { Clock, Calendar } from 'lucide-react'

export interface ArticleAuthor {
	name: string
	role?: string
	avatar?: string
}

export interface ArticleHeaderProps {
	category?: string
	heading: string
	excerpt?: string
	author?: ArticleAuthor
	publishedAt?: string
	readMinutes?: number
	coverImage?: string
	coverImageAlt?: string
}

export function ArticleHeader({
	category,
	heading,
	excerpt,
	author,
	publishedAt,
	readMinutes,
	coverImage,
	coverImageAlt = '',
}: ArticleHeaderProps) {
	return (
		<Section spacing='md' background='surface'>
			<Container size='default'>
				<Stack gap='md'>
					{category && <Eyebrow>{category}</Eyebrow>}
					<Heading headingLevel='h1' size='xl'>
						{heading}
					</Heading>
					{excerpt && (
						<Paragraph size='lg' color='default' marginTop='none'>
							{excerpt}
						</Paragraph>
					)}
					<Divider />
					<Flex gap='lg' wrap align='center' justify='between'>
						{author && (
							<Flex gap='sm' align='center'>
								{author.avatar && (
									<img
										src={author.avatar}
										alt={author.name}
										className='h-9 w-9 rounded-full object-cover'
									/>
								)}
								<div>
									<p className='font-semibold text-foreground text-sm'>{author.name}</p>
									{author.role && (
										<p className='text-muted-foreground text-xs'>{author.role}</p>
									)}
								</div>
							</Flex>
						)}
						<Flex gap='md' align='center' className='text-muted-foreground text-xs'>
							{publishedAt && (
								<span className='flex items-center gap-1.5'>
									<Calendar className='h-3.5 w-3.5' />
									{publishedAt}
								</span>
							)}
							{readMinutes && (
								<span className='flex items-center gap-1.5'>
									<Clock className='h-3.5 w-3.5' />
									{readMinutes} min leestijd
								</span>
							)}
						</Flex>
					</Flex>
				</Stack>
			</Container>
			{coverImage && (
				<div className='mt-8'>
					<Container size='wide'>
						<div className='overflow-hidden rounded-xl'>
							<img
								src={coverImage}
								alt={coverImageAlt}
								className='h-auto w-full object-cover'
							/>
						</div>
					</Container>
				</div>
			)}
		</Section>
	)
}
