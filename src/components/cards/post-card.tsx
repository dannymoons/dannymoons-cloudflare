import { cn } from '@/utilities/ui'
import { ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'

export interface PostCardProps {
	category: string
	title: string
	excerpt: string
	readMinutes: number
	href: string
	featured?: boolean
	className?: string
}

export function PostCard({
	category,
	title,
	excerpt,
	readMinutes,
	href,
	featured,
	className,
}: PostCardProps) {
	return (
		<Link
			href={href}
			className={cn(
				'group flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-md',
				featured ? 'border-primary/20 ring-1 ring-primary/10' : 'border-border',
				className
			)}
		>
			{featured && (
				<div className='flex items-center gap-2 border-border border-b bg-accent px-4 py-2'>
					<div className='h-1.5 w-1.5 rounded-full bg-primary' />
					<span className='font-medium text-primary text-xs'>Uitgelicht artikel</span>
				</div>
			)}
			<div className='flex flex-1 flex-col p-5'>
				<div className='mb-3 flex items-center justify-between'>
					<span className='rounded-full border border-border bg-accent px-2 py-0.5 font-medium text-primary text-xs'>
						{category}
					</span>
					<div className='flex items-center gap-1 text-muted-foreground text-xs'>
						<Clock className='h-3 w-3' />
						{readMinutes} min
					</div>
				</div>
				<h3 className='mb-2 font-semibold text-foreground text-sm leading-snug transition-colors group-hover:text-primary'>
					{title}
				</h3>
				<p className='flex-1 text-muted-foreground text-xs leading-relaxed'>{excerpt}</p>
				<div className='mt-4 flex items-center gap-1 font-medium text-primary text-xs transition-all group-hover:gap-2'>
					Lees artikel <ArrowRight className='h-3 w-3' />
				</div>
			</div>
		</Link>
	)
}
