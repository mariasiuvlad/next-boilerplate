export interface MenuItem {
  href: string
  label?: string
  icon?: string
}

export const MainNavigation: MenuItem[] = [
  {
    label: 'games',
    href: '/games',
  },
  {
    label: 'live play',
    href: '/live',
  },
  {
    label: 'jackpot',
    href: '/jackpot',
  },
  {
    label: 'chat',
    href: '/chat',
  },
  {
    label: 'promotions',
    href: '/promotions',
  },
  {
    label: 'news',
    href: '/news',
  },
]

export const FooterLinks: MenuItem[] = [
  {
    label: 'ABOUT',
    href: '/',
  },
  {
    label: 'CONTACT',
    href: '/',
  },
  {
    label: 'TERM OF USE',
    href: '/',
  },
  {
    label: 'HELP',
    href: '/',
  },
  {
    label: 'FAQ',
    href: '/',
  },
  {
    label: 'PRIVACY POLICY',
    href: '/',
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
    href: '#',
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
