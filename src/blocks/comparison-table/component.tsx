import { Check, Minus } from 'lucide-react'
import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Column = { name: string; id?: string | null }
type Cell = { value?: string | null; id?: string | null }
type Row = { feature: string; cells?: Cell[] | null; id?: string | null }

type Props = {
	eyebrow?: string | null
	title?: string | null
	columns?: Column[] | null
	rows?: Row[] | null
	backgroundColor?: Bg | null
}

const TRUE_VALUES = new Set(['✓', 'true', 'yes', 'ja', 'x'])
const FALSE_VALUES = new Set(['—', '-', 'false', 'no', 'nee', ''])

function renderCell(value?: string | null) {
	const normalized = (value ?? '').trim().toLowerCase()
	if (TRUE_VALUES.has(normalized)) {
		return <Check className='mx-auto size-4 text-primary' aria-label='Yes' />
	}
	if (FALSE_VALUES.has(normalized)) {
		return <Minus className='mx-auto size-4 text-muted-foreground' aria-label='No' />
	}
	return value
}

export function ComparisonTableBlock({
	eyebrow,
	title,
	columns,
	rows,
	backgroundColor
}: Props) {
	const cols = columns ?? []

	return (
		<Section spacing='lg' background={backgroundColor ?? 'transparent'}>
			<Container>
				{(eyebrow || title) && (
					<Stack gap='sm' align='center' className='mx-auto mb-12 max-w-xl text-center'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{title && (
							<Heading headingLevel='h2' size='lg'>
								{title}
							</Heading>
						)}
					</Stack>
				)}
				<div className='overflow-x-auto rounded-xl border border-border'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead />
								{cols.map((col, i) => (
									<TableHead key={col.id ?? i} className='text-center font-semibold text-foreground'>
										{col.name}
									</TableHead>
								))}
							</TableRow>
						</TableHeader>
						<TableBody>
							{(rows ?? []).map((row, i) => (
								<TableRow key={row.id ?? i}>
									<TableCell className='font-medium'>{row.feature}</TableCell>
									{cols.map((_, ci) => (
										<TableCell key={ci} className='text-center'>
											{renderCell(row.cells?.[ci]?.value)}
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</Container>
		</Section>
	)
}
