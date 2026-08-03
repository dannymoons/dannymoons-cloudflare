import { RichTextBasic } from '@/components/content/richtext'
import React from 'react'

import { Width } from '../width'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export const Message: React.FC<{ message: DefaultTypedEditorState }> = ({ message }) => {
	return (
		<Width className='my-12' width='100'>
			{message && <RichTextBasic data={message} />}
		</Width>
	)
}
