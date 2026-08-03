import { Apple, Play } from 'lucide-react'

/** Future Payload mapping: ctaDownload. */
export function CtaDownload() {
	return (
		<section id='download' className='px-5 py-24 sm:px-8 sm:py-32'>
			<div
				className='va-reveal relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--line)] p-10 text-center sm:p-16'
				style={{
					background:
						'linear-gradient(135deg, color-mix(in oklch, var(--mint) 22%, var(--panel)), color-mix(in oklch, var(--violet) 18%, var(--panel)))'
				}}
			>
				<h2 className='mx-auto max-w-2xl font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,6vw,4rem)] leading-[0.98] tracking-[-0.03em]'>
					Your new account is one tap away.
				</h2>
				<p className='mx-auto mt-4 max-w-md text-[var(--mute)] text-lg'>
					Join millions who switched to money that finally makes sense.
				</p>
				<div className='mt-8 flex flex-wrap justify-center gap-3'>
					<a
						href='#top'
						className='inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-[oklch(0.16_0.03_265)] [background:var(--text)]'
					>
						<Apple className='h-5 w-5' /> Download for iOS
					</a>
					<a
						href='#top'
						className='inline-flex items-center gap-2 rounded-xl border border-[oklch(0.16_0.03_265)]/30 px-6 py-3.5 font-semibold text-[oklch(0.16_0.03_265)]'
					>
						<Play className='h-5 w-5' /> Download for Android
					</a>
				</div>
			</div>
		</section>
	)
}
