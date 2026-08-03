'use client'

import Image from 'next/image'

import { mediaLoader } from './media-loader'

type MediaImageProps = {
  alt: string
  height: number
  id: number
  updatedAt: string
  width: number
}

export function MediaImage({ alt, height, id, updatedAt, width }: MediaImageProps) {
  return (
    <Image
      loader={mediaLoader}
      src={`/media/${id}?v=${encodeURIComponent(updatedAt)}`}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw, 768px"
    />
  )
}
