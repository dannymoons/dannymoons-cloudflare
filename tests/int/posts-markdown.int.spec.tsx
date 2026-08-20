import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { normalizeCodeBlocks } from '../../src/collections/posts'
import { RichTextBasic } from '../../src/components/content/richtext'

describe('post Markdown rich text', () => {
  it('normalizes TSX code fences to the supported TypeScript language', () => {
    const content = {
      root: {
        children: [
          {
            fields: {
              blockType: 'Code',
              code: "alt={media.alt || ''}",
              language: 'tsx',
            },
            type: 'block',
          },
        ],
      },
    }

    const normalized = normalizeCodeBlocks(content) as typeof content

    expect(normalized.root.children[0].fields.language).toBe('typescript')
  })

  it('renders converted Markdown tables semantically', () => {
    render(
      <RichTextBasic
        data={{
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [{ text: 'Check', type: 'text', version: 1 }],
                            type: 'paragraph',
                            version: 1,
                          },
                        ],
                        headerState: 1,
                        type: 'tablecell',
                        version: 1,
                      },
                    ],
                    type: 'tablerow',
                    version: 1,
                  },
                ],
                type: 'table',
                version: 1,
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        } as never}
      />,
    )

    expect(screen.getByRole('table')).toBeTruthy()
    expect(screen.getByRole('table').querySelector('tbody')).toBeTruthy()
    expect(screen.getByRole('columnheader', { name: 'Check' })).toBeTruthy()
  })
})
