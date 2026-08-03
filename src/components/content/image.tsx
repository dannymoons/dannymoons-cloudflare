import { cn } from '@/utilities/ui'
import type { Media } from '@/payload-types'

interface ImageProps extends Media {
	className?: string
	loading?: 'eager' | 'lazy'
}

/**
 * Plain <img> helper. On Cloudflare we serve responsive variants via
 * `/media/[id]?w=` (see Cloudflare Images route) rather than Payload imageSizes.
 */
const Image = (props: ImageProps) => {
	const { className, id, url, alt, height, width, loading, updatedAt } = props

	const src =
		id != null
			? `/media/${id}?w=1200&v=${encodeURIComponent(updatedAt || '')}`
			: url || ''

	const defaultSize = `
	(max-width: 768px) 100vw,
	(max-width: 980px) 100vw,
	(min-width: 981px) and (max-width: 1200px) 50vw,
	(min-width: 1201px) and (max-width: 1600px) 33.33vw,
	25vw
  `
		.replace(/\s+/g, ' ')
		.trim()

	return (
		<img
			className={cn('w-full rounded-xl object-cover', className)}
			src={src}
			loading={'lazy'}
			height={height || 768}
			width={width || 768}
			alt={alt || ''}
			sizes={defaultSize}
			decoding="async"
			fetchPriority={loading === 'lazy' ? 'low' : 'high'}
		/>
	)
}

export { Image }
