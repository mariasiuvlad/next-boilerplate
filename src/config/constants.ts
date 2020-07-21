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

export const FOOTERMENU = [
  {
    name: 'ABOUT',
    href: '/',
  },
  {
    name: 'CONTACT',
    href: '/',
  },
  {
    name: 'TERM OF USE',
    href: '/',
  },
  {
    name: 'HELP',
    href: '/',
  },
  {
    name: 'FAQ',
    href: '/',
  },
  {
    name: 'PRIVACY POLICY',
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
