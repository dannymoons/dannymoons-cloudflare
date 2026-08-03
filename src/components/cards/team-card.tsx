import { cn } from '@/utilities/ui'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

export interface SocialLink {
	platform: string
	href: string
	label?: string
}

export interface TeamCardProps {
	name: string
	role: string
	bio?: string
	photo?: StaticImageData | string
	socialLinks?: SocialLink[]
	className?: string
}

export function TeamCard({ name, role, bio, photo, className }: TeamCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col gap-5 overflow-hidden rounded-xl border border-border bg-background',
				className
			)}
		>
			{photo && (
				<div className='mx-auto mt-5 inline-block aspect-square size-24 overflow-hidden rounded-full bg-primary sm:size-32'>
					{typeof photo === 'string' ? (
						<img
							src={photo}
							alt={name}
							className='h-full w-full object-cover'
						/>
					) : (
						<Image
							src={photo}
							alt={name}
							className='h-full w-full object-cover'
						/>
					)}
				</div>
			)}
			<div className=''>
				<div className='border-border border-b px-5 pb-5 text-center'>
					<p className='font-bold font-heading text-foreground text-lg'>
						{name}
					</p>
					<p className='text-base text-primary'>{role}</p>
				</div>
				{bio && (
					<p className='p-5 text-muted-foreground text-xs leading-relaxed'>
						{bio}
					</p>
				)}
			</div>
		</div>
	)
}
