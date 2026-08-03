import { getPayload } from 'payload'
import config from '@payload-config'

import { seed } from '@/endpoints/seed'

const run = async () => {
	const payload = await getPayload({ config })
	await seed({ payload })
	process.exit(0)
}

run().catch(error => {
	// eslint-disable-next-line no-console
	console.error(error)
	process.exit(1)
})
