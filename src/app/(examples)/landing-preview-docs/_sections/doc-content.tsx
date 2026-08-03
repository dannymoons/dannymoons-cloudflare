import { Lightbulb, TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'

function CodeBlock({
	label,
	children
}: {
	label?: string
	children: ReactNode
}) {
	return (
		<div className='my-5 overflow-hidden rounded-xl border border-border bg-[oklch(0.18_0.02_265)]'>
			{label ? (
				<div className='border-[oklch(1_0_0/0.08)] border-b px-4 py-2 font-[family-name:var(--font-mono)] text-[oklch(0.7_0.02_265)] text-xs'>
					{label}
				</div>
			) : null}
			<pre className='overflow-x-auto px-4 py-4 font-[family-name:var(--font-mono)] text-[0.85rem] text-[oklch(0.92_0.01_265)] leading-relaxed'>
				{children}
			</pre>
		</div>
	)
}

function Callout({
	kind,
	children
}: {
	kind: 'tip' | 'warning'
	children: ReactNode
}) {
	const tip = kind === 'tip'
	return (
		<div
			className={`my-5 flex gap-3 rounded-xl border p-4 text-sm ${
				tip
					? 'border-primary/30 bg-primary-50 text-foreground'
					: 'border-warning/30 bg-warning/10 text-foreground'
			}`}
		>
			{tip ? (
				<Lightbulb className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
			) : (
				<TriangleAlert className='mt-0.5 h-5 w-5 shrink-0 text-warning' />
			)}
			<div>{children}</div>
		</div>
	)
}

/** Future Payload mapping: richText (MDX-style article). */
export function DocContent() {
	return (
		<article className='mx-auto max-w-2xl'>
			<div className='flex items-center gap-2 text-muted-foreground text-sm'>
				<span>Getting started</span>
				<span>/</span>
				<span className='text-foreground'>Introduction</span>
			</div>

			<h1
				id='introduction'
				className='mt-4 scroll-mt-24 font-semibold text-4xl text-foreground tracking-tight'
			>
				Introduction
			</h1>
			<p className='mt-4 text-lg text-muted-foreground leading-relaxed'>
				Helix is a typed SDK for building realtime applications. It handles
				connections, retries and streaming so you can focus on your product.
				This guide gets you from zero to your first request in under five
				minutes.
			</p>

			<Callout kind='tip'>
				New to Helix? Start with the{' '}
				<a href='#quick-start' className='font-medium text-primary underline'>
					quick start
				</a>{' '}
				and copy the example project.
			</Callout>

			<h2
				id='installation'
				className='mt-12 scroll-mt-24 border-border border-b pb-2 font-semibold text-2xl text-foreground tracking-tight'
			>
				Installation
			</h2>
			<p className='mt-4 text-muted-foreground leading-relaxed'>
				Install the package with your favourite package manager.
			</p>
			<CodeBlock label='terminal'>{`pnpm add @helix/sdk
# or
npm install @helix/sdk`}</CodeBlock>

			<h2
				id='quick-start'
				className='mt-12 scroll-mt-24 border-border border-b pb-2 font-semibold text-2xl text-foreground tracking-tight'
			>
				Quick start
			</h2>
			<p className='mt-4 text-muted-foreground leading-relaxed'>
				Create a client with your API key and send your first request.
			</p>
			<CodeBlock label='app.ts'>{`import { Helix } from '@helix/sdk'

const helix = new Helix({ apiKey: process.env.HELIX_KEY })

const res = await helix.messages.create({
  channel: 'general',
  body: 'Hello, world',
})

console.log(res.id)`}</CodeBlock>

			<h2
				id='clients'
				className='mt-12 scroll-mt-24 border-border border-b pb-2 font-semibold text-2xl text-foreground tracking-tight'
			>
				Clients
			</h2>
			<p className='mt-4 text-muted-foreground leading-relaxed'>
				A client is the entry point to the API. Each client is configured once
				and reused across your app. The constructor accepts the following
				options:
			</p>

			<div className='my-5 overflow-x-auto rounded-xl border border-border'>
				<table className='w-full text-left text-sm'>
					<thead className='bg-muted/50'>
						<tr className='border-border border-b'>
							<th className='p-3 font-semibold'>Option</th>
							<th className='p-3 font-semibold'>Type</th>
							<th className='p-3 font-semibold'>Default</th>
						</tr>
					</thead>
					<tbody className='font-[family-name:var(--font-mono)] text-xs'>
						<tr className='border-border border-b'>
							<td className='p-3 text-primary'>apiKey</td>
							<td className='p-3 text-muted-foreground'>string</td>
							<td className='p-3 text-muted-foreground'>—</td>
						</tr>
						<tr className='border-border border-b'>
							<td className='p-3 text-primary'>timeout</td>
							<td className='p-3 text-muted-foreground'>number</td>
							<td className='p-3 text-muted-foreground'>10000</td>
						</tr>
						<tr>
							<td className='p-3 text-primary'>retries</td>
							<td className='p-3 text-muted-foreground'>number</td>
							<td className='p-3 text-muted-foreground'>3</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2
				id='authentication'
				className='mt-12 scroll-mt-24 border-border border-b pb-2 font-semibold text-2xl text-foreground tracking-tight'
			>
				Authentication
			</h2>
			<p className='mt-4 text-muted-foreground leading-relaxed'>
				Helix uses bearer tokens. Never expose your secret key in client-side
				code — proxy requests through your backend instead.
			</p>
			<Callout kind='warning'>
				Secret keys grant full access to your account. Rotate them immediately
				if one leaks.
			</Callout>

			<h2
				id='streaming'
				className='mt-12 scroll-mt-24 border-border border-b pb-2 font-semibold text-2xl text-foreground tracking-tight'
			>
				Streaming
			</h2>
			<p className='mt-4 text-muted-foreground leading-relaxed'>
				Long-running responses can be streamed token by token using async
				iterators.
			</p>
			<CodeBlock label='stream.ts'>{`const stream = await helix.completions.stream({
  prompt: 'Summarize this article',
})

for await (const chunk of stream) {
  process.stdout.write(chunk.text)
}`}</CodeBlock>

			<h2
				id='errors'
				className='mt-12 scroll-mt-24 border-border border-b pb-2 font-semibold text-2xl text-foreground tracking-tight'
			>
				Error handling
			</h2>
			<p className='mt-4 text-muted-foreground leading-relaxed'>
				All errors extend{' '}
				<code className='rounded bg-muted px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-sm'>
					HelixError
				</code>
				. Catch them to inspect the status code and request ID.
			</p>
			<CodeBlock label='errors.ts'>{`import { HelixError } from '@helix/sdk'

try {
  await helix.messages.create({ /* ... */ })
} catch (err) {
  if (err instanceof HelixError) {
    console.error(err.status, err.requestId)
  }
}`}</CodeBlock>
		</article>
	)
}
