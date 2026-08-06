export const POST_TYPE_LABELS: Record<string, string> = {
  blog: 'Blog',
  'field-note': 'Field note',
  announcement: 'Announcement'
}

export function postTypeLabel(postType: string | null | undefined): string {
  if (!postType) return 'Field note'
  return POST_TYPE_LABELS[postType] ?? postType
}
