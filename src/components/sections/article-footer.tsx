import { Heading } from '@/components/content/heading'
import { PostCard, type PostCardProps } from '@/components/cards/post-card'
import { Container } from '@/components/layout/container'

export interface ArticleFooterAuthor {
  name: string
  role?: string
  bio?: string
  avatar?: string
}

export interface ArticleFooterProps {
  author?: ArticleFooterAuthor
  tags?: string[]
  relatedPosts?: Omit<PostCardProps, 'className'>[]
}

export function ArticleFooter({ author, tags, relatedPosts }: ArticleFooterProps) {
  return (
    <section className="border-border border-b bg-surface/35 py-section-lg">
      <Container size="wide">
        {tags && tags.length > 0 && (
          <div className="mb-12 flex flex-wrap gap-2 border-border border-b pb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-[0.12em]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {author && (
          <div className="mb-14 max-w-2xl rounded-[var(--radius-xl)] border border-border bg-surface p-7">
            <div className="flex items-start gap-4">
              {author.avatar && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="size-14 shrink-0 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-semibold text-foreground text-sm">{author.name}</p>
                {author.role && (
                  <p className="mt-1 font-mono text-[0.65rem] text-primary uppercase tracking-[0.12em]">
                    {author.role}
                  </p>
                )}
                {author.bio && (
                  <p className="mt-3 text-muted-foreground text-sm leading-6">{author.bio}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {relatedPosts && relatedPosts.length > 0 && (
          <div>
            <div className="mb-10 grid gap-5 lg:grid-cols-[0.4fr_1fr] lg:items-end">
              <div className="flex items-center gap-4 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                <span className="text-primary">Next</span>
                <span className="h-px w-8 bg-border" />
                <span className="text-muted-foreground">From the notebook</span>
              </div>
              <Heading
                headingLevel="h2"
                size="lg"
                color="foreground"
                className="font-medium tracking-[-0.04em]"
              >
                Continue reading.
              </Heading>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((post) => (
                <PostCard key={post.href} {...post} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
