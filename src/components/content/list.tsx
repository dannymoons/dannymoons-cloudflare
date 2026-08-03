import { cn } from '@/utilities/ui'

import { CheckIcon, XIcon, ChevronRightIcon } from 'lucide-react'

// ListProps interface to handle the list type and other HTML attributes
interface ListProps
	extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
	listType?: 'ul' | 'ol'
}

// List Component
const List: React.FC<ListProps> = ({
	listType = 'ul',
	children,
	className,
	...props
}) => {
	const ListTag = listType === 'ol' ? 'ol' : 'ul'
	return (
		<div className='@container w-full'>
			<ListTag className={cn('my-4 pl-4 space-y-2', className)} {...props}>
				{children}
			</ListTag>
		</div>
	)
}

// ListItemProps interface for additional HTML attributes
interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
	icon?: 'check' | 'x' | 'caret'
}

// Icons components
const IconComponents = {
	check: CheckIcon,
	x: XIcon,
	caret: ChevronRightIcon
}

// ListItem Component
const ListItem: React.FC<ListItemProps> = ({ icon, children, ...props }) => {
	const Icon = icon ? IconComponents[icon] : null
	return (
		<li
			className={cn(Icon ? 'flex items-start gap-1' : 'ml-4 list-disc')}
			{...props}
		>
			{Icon && (
				<span>
					<Icon className='size-4' />
				</span>
			)}
			{children}
		</li>
	)
}

export { List, ListItem }
