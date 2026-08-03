import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Table, TableBody, TableCaption, TableCell, TableRow } from '@/components/ui/table'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Row = { label: string; value: string; id?: string | null }

type Props = {
	eyebrow?: string | null
	title?: string | null
	caption?: string | null
	rows?: Row[] | null
	backgroundColor?: Bg | null
}

export function DataTableBlock({ eyebrow, title, caption, rows, backgroundColor }: Props) {
	return (
		<Section spacing='md' background={backgroundColor ?? 'transparent'}>
			<Container size='default'>
				{(eyebrow || title) && (
					<Stack gap='sm' className='mb-12'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{title && (
							<Heading headingLevel='h2' size='md'>
								{title}
							</Heading>
						)}
					</Stack>
				)}
				<div className='overflow-hidden rounded-xl border border-border'>
					<Table>
						{caption && <TableCaption>{caption}</TableCaption>}
						<TableBody>
							{(rows ?? []).map((row, i) => (
								<TableRow key={row.id ?? i}>
									<TableCell className='font-medium text-muted-foreground'>{row.label}</TableCell>
									<TableCell className='text-right font-medium'>{row.value}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</Container>
		</Section>
	)
}
