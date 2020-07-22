export interface MenuItem {
  label: string
  href: string
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
