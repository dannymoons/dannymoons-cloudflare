import type { ImageLoaderProps } from 'next/image'

const widths = [150, 480, 768, 1200, 1920]

export function mediaLoader({ src, width }: ImageLoaderProps) {
  const targetWidth = widths.find((candidate) => candidate >= width) ?? widths.at(-1)!
  const url = new URL(src, 'http://localhost')

  url.searchParams.set('w', String(targetWidth))

  return `${url.pathname}${url.search}`
}
