export interface MenuItem {
  href: string
  label?: string
  icon?: string
}

export const MainNavigation: MenuItem[] = [
  {
    label: 'games',
    href: '#',
  },
  {
    label: 'live play',
    href: '#',
  },
  {
    label: 'jackpot',
    href: '#',
  },
  {
    label: 'chat',
    href: '#',
  },
  {
    label: 'promotions',
    href: '#',
  },
  {
    label: 'news',
    href: '#',
  },
]

export const FooterLinks: MenuItem[] = [
  {
    label: 'ABOUT',
    href: '#',
  },
  {
    label: 'CONTACT',
    href: '#',
  },
  {
    label: 'TERM OF USE',
    href: '#',
  },
  {
    label: 'HELP',
    href: '#',
  },
  {
    label: 'FAQ',
    href: '#',
  },
  {
    label: 'PRIVACY POLICY',
    href: '#',
  },
]

export const AuthLinks: MenuItem[] = [
  {
    label: 'login',
    href: '/login',
  },
  {
    label: 'sign up',
    href: '/signup',
  },
]

export const SidebarNavigation: MenuItem[] = [
  {
    href: '#',
    icon: 'menu',
  },
  {
    href: '/platform',
    icon: 'home',
  },
  {
    href: '#',
    icon: 'alien',
  },
  {
    href: '#',
    icon: 'rocket',
  },
  {
    href: '#',
    icon: 'facebook',
  },
  {
    href: '#',
    icon: 'instagram',
  },
  {
    href: '#',
    icon: 'youtube',
  },
  {
    href: '#',
    icon: 'info',
  },
]
