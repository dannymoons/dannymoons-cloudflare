import { cn } from '@/utilities/ui'
import type * as React from 'react'

type SpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'
type StartValue = 'auto' | 1 | 2 | 3 | 4 | 5 | 6

const spanMap: Record<SpanValue, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
  full: 'col-span-full',
}

const spanSmMap: Record<SpanValue, string> = {
  1: 'sm:col-span-1',
  2: 'sm:col-span-2',
  3: 'sm:col-span-3',
  4: 'sm:col-span-4',
  5: 'sm:col-span-5',
  6: 'sm:col-span-6',
  7: 'sm:col-span-7',
  8: 'sm:col-span-8',
  9: 'sm:col-span-9',
  10: 'sm:col-span-10',
  11: 'sm:col-span-11',
  12: 'sm:col-span-12',
  full: 'sm:col-span-full',
}

const spanMdMap: Record<SpanValue, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
  full: 'md:col-span-full',
}

const spanLgMap: Record<SpanValue, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12',
  full: 'lg:col-span-full',
}

const spanXlMap: Record<SpanValue, string> = {
  1: 'xl:col-span-1',
  2: 'xl:col-span-2',
  3: 'xl:col-span-3',
  4: 'xl:col-span-4',
  5: 'xl:col-span-5',
  6: 'xl:col-span-6',
  7: 'xl:col-span-7',
  8: 'xl:col-span-8',
  9: 'xl:col-span-9',
  10: 'xl:col-span-10',
  11: 'xl:col-span-11',
  12: 'xl:col-span-12',
  full: 'xl:col-span-full',
}

const startMap: Record<StartValue, string> = {
  auto: 'col-start-auto',
  1: 'col-start-1',
  2: 'col-start-2',
  3: 'col-start-3',
  4: 'col-start-4',
  5: 'col-start-5',
  6: 'col-start-6',
}

const startSmMap: Record<StartValue, string> = {
  auto: 'sm:col-start-auto',
  1: 'sm:col-start-1',
  2: 'sm:col-start-2',
  3: 'sm:col-start-3',
  4: 'sm:col-start-4',
  5: 'sm:col-start-5',
  6: 'sm:col-start-6',
}

const startMdMap: Record<StartValue, string> = {
  auto: 'md:col-start-auto',
  1: 'md:col-start-1',
  2: 'md:col-start-2',
  3: 'md:col-start-3',
  4: 'md:col-start-4',
  5: 'md:col-start-5',
  6: 'md:col-start-6',
}

const startLgMap: Record<StartValue, string> = {
  auto: 'lg:col-start-auto',
  1: 'lg:col-start-1',
  2: 'lg:col-start-2',
  3: 'lg:col-start-3',
  4: 'lg:col-start-4',
  5: 'lg:col-start-5',
  6: 'lg:col-start-6',
}

const startXlMap: Record<StartValue, string> = {
  auto: 'xl:col-start-auto',
  1: 'xl:col-start-1',
  2: 'xl:col-start-2',
  3: 'xl:col-start-3',
  4: 'xl:col-start-4',
  5: 'xl:col-start-5',
  6: 'xl:col-start-6',
}

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Base (mobile-first) column span */
  span?: SpanValue
  /** Column span from the `sm` breakpoint up */
  spanSm?: SpanValue
  /** Column span from the `md` breakpoint up */
  spanMd?: SpanValue
  /** Column span from the `lg` breakpoint up */
  spanLg?: SpanValue
  /** Column span from the `xl` breakpoint up */
  spanXl?: SpanValue
  /** Base (mobile-first) column start position */
  start?: StartValue
  /** Column start from the `sm` breakpoint up */
  startSm?: StartValue
  /** Column start from the `md` breakpoint up */
  startMd?: StartValue
  /** Column start from the `lg` breakpoint up */
  startLg?: StartValue
  /** Column start from the `xl` breakpoint up */
  startXl?: StartValue
}

export function Column({
  className,
  span = 12,
  spanSm,
  spanMd,
  spanLg,
  spanXl,
  start = 'auto',
  startSm,
  startMd,
  startLg,
  startXl,
  ...props
}: ColumnProps) {
  return (
    <div
      data-slot="column"
      className={cn(
        'min-w-0',
        spanMap[span],
        spanSm && spanSmMap[spanSm],
        spanMd && spanMdMap[spanMd],
        spanLg && spanLgMap[spanLg],
        spanXl && spanXlMap[spanXl],
        startMap[start],
        startSm && startSmMap[startSm],
        startMd && startMdMap[startMd],
        startLg && startLgMap[startLg],
        startXl && startXlMap[startXl],
        className,
      )}
      {...props}
    />
  )
}
