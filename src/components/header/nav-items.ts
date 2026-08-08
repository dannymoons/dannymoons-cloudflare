export interface HeaderNavItem {
  label: string
  href: string
}

export const navItems: HeaderNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Notes', href: '/posts' },
  { label: 'Work', href: '/#work' },
  { label: 'Questions', href: '/#faq' },
  { label: 'About', href: '/#about' }
]
