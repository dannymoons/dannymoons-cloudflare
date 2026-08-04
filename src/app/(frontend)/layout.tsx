import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type React from 'react'

import { AdminBar } from '@/components/payload/admin-bar'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/theme/init-theme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { headers } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const { isEnabled } = await draftMode()
	const headersList = await headers()
	const locale = headersList.get('x-locale') || 'en'

	return (
		<html
			className={cn(GeistSans.variable, GeistMono.variable)}
			lang={locale}
			suppressHydrationWarning
		>
			<head>
				<InitTheme />
				<link href='/favicon.svg' rel='icon' type='image/svg+xml' />
			</head>
			<body>
				<Providers>
					<AdminBar
						adminBarProps={{
							preview: isEnabled
						}}
					/>

					{children}
				</Providers>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	metadataBase: new URL(getServerSideURL()),
	openGraph: mergeOpenGraph(),
	twitter: {
		card: 'summary_large_image'
	}
}
