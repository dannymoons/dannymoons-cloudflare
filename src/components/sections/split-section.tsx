import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import type { ReactNode } from 'react'

export interface SplitSectionProps {
	left: ReactNode
	right: ReactNode
	imagePosition?: 'right' | 'left'
	spacing?: 'sm' | 'md' | 'lg' | 'xl'
	background?: 'default' | 'surface' | 'elevated' | 'primary' | 'transparent'
	className?: string
}

export function SplitSection({
	left,
	right,
	imagePosition = 'right',
	spacing = 'lg',
	background = 'transparent',
	className,
}: SplitSectionProps) {
	return (
		<Section spacing={spacing} background={background} className={className}>
			<Container>
				<Grid cols={12} gap='xl' className='items-center'>
					{imagePosition === 'left' ? (
						<>
							<Column spanMd={6}>{right}</Column>
							<Column spanMd={6}>{left}</Column>
						</>
					) : (
						<>
							<Column spanMd={6}>{left}</Column>
							<Column spanMd={6}>{right}</Column>
						</>
					)}
				</Grid>
			</Container>
		</Section>
	)
}
