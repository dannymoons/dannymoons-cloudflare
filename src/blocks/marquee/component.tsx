import type { CSSProperties } from 'react'
import { Section } from '@/components/layout/section'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Item = { text: string; id?: string | null }

type Props = {
	items?: Item[] | null
	speed?: 'slow' | 'normal' | 'fast' | null
	backgroundColor?: Bg | null
}

const DURATIONS: Record<NonNullable<Props['speed']>, string> = {
	slow: '45s',
	normal: '28s',
	fast: '16s'
}

export function MarqueeBlock({ items, speed, backgroundColor }: Props) {
	const list = items ?? []
	if (list.length === 0) return null

	const duration = DURATIONS[speed ?? 'normal']
	const track = [...list, ...list]

	return (
		<Section spacing='sm' background={backgroundColor ?? 'surface'} className='overflow-hidden'>
			<style>{'@keyframes bn-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'}</style>
			<div className='group flex select-none'>
				<div
					className='flex w-max shrink-0 items-center gap-12 pr-12 [animation:bn-marquee_var(--bn-dur)_linear_infinite] group-hover:[animation-play-state:paused]'
					style={{ '--bn-dur': duration } as CSSProperties}
				>
					{track.map((item, i) => (
						<span
							key={i}
							className='whitespace-nowrap font-heading font-semibold text-2xl text-muted-foreground sm:text-3xl'
						>
							{item.text}
						</span>
					))}
				</div>
			</div>
		</Section>
	)
}
