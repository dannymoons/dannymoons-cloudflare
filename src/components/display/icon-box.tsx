import { DynamicIcon } from '@/components/content/icon'
import type { IconName } from '@/components/content/icon'
import { cn } from '@/utilities/ui'

export interface IconBoxProps {
	icon: IconName
	heading: string
	text: string
	link?: string
	className?: string
}

export function IconBox({ icon, heading, text, link, className }: IconBoxProps) {
	const Wrapper = link ? 'a' : 'div'
	return (
		<Wrapper
			{...(link ? { href: link } : {})}
			className={cn(
				'group flex flex-col gap-3',
				link && 'transition-colors hover:text-primary',
				className
			)}
		>
			<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary'>
				<DynamicIcon name={icon} className='h-5 w-5' />
			</div>
			<div>
				<p className='font-semibold text-foreground text-sm group-[a]:group-hover:text-primary'>
					{heading}
				</p>
				<p className='mt-1 text-muted-foreground text-sm leading-relaxed'>{text}</p>
			</div>
		</Wrapper>
	)
}
