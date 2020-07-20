import Link from 'next/link'
import style from './MenuPrimary.module.css'

interface MenuPrimaryProps {
  /** `[{label: string, href: string}]` */
  menu?: MenuItem[]
  /** used to highlight current item */
  pathname?: string
}

interface MenuItem {
  href: string
  label: string
}

const MenuItem = ({label, href, active}) => (
  <li key={href} className={style.itemContainer}>
    <Link href={href}>
      <a className={[style.item, active && style.active].join(' ')}>{label}</a>
    </Link>
  </li>
)

export default function MenuPrimary({menu, pathname}: MenuPrimaryProps) {
  return (
    <ul className={style.container}>
      {menu.map(({label, href}) => (
        <MenuItem
          active={href === pathname}
          label={label}
          href={href}
          key={href}
        />
      ))}
    </ul>
  )
}
