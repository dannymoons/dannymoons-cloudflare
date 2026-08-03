import { Image } from '@/components/content/image'
import { cn } from '@/utilities/ui'
import { Star } from 'lucide-react'
import type { Media } from '@/payload-types'

export interface TestimonialCardProps {
	quote: string
	name: string
	role?: string
	stars?: number
	avatar?: string | Media | null
	className?: string
}

export function TestimonialCard({
	quote,
	name,
	role,
	stars = 5,
	avatar,
	className,
}: TestimonialCardProps) {
	const avatarMedia = avatar && typeof avatar === 'object' ? avatar : null

	return (
		<div className={cn('flex flex-col rounded-xl border border-border bg-card p-6', className)}>
			{stars > 0 && (
				<div className='mb-4 flex gap-0.5'>
					{Array.from({ length: stars }).map((_, i) => (
						<Star key={i} className='h-3.5 w-3.5 fill-current text-primary' />
					))}
				</div>
			)}
			<p className='mb-5 flex-1 text-muted-foreground text-sm italic leading-relaxed'>
				&ldquo;{quote}&rdquo;
			</p>
			<div className='flex items-center gap-3'>
				{avatarMedia && (
					<div className='h-10 w-10 shrink-0 overflow-hidden rounded-full'>
						<Image {...avatarMedia} className='h-full w-full object-cover rounded-full' />
					</div>
				)}
				<div>
					<p className='font-semibold text-foreground text-sm'>{name}</p>
					{role && <p className='text-primary text-xs'>{role}</p>}
				</div>
			</div>
		</div>
	)
}
