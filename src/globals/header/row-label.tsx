'use client'

import { useRowLabel } from '@payloadcms/ui'

export const RowLabel = () => {
	const { data, rowNumber } = useRowLabel<{ link?: { label?: string } }>()

	const label = data?.link?.label
		? data.link.label
		: `Nav item ${String((rowNumber ?? 0) + 1).padStart(2, '0')}`

	return <span>{label}</span>
}
