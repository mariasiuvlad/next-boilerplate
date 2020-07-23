import Link from 'next/link'
import style from './MenuPrimary.module.css'
import {MenuItem} from '@config'

interface MenuPrimaryProps {
  /** `[{label: string, href: string, icon: string}]` */
  menu?: MenuItem[]
  /** used to highlight current item */
  pathname?: string
}

const Item = ({label, href, active}) => (
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
        <Item active={href === pathname} label={label} href={href} key={href} />
      ))}
    </ul>
  )
}
