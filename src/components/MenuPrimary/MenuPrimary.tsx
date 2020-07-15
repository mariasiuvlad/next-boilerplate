import Link from 'next/link'
import {PRIMARYMENU} from '@config/constants'

export const MenuPrimary = () => {
  const items: JSX.Element[] = PRIMARYMENU.map((item) => (
    <Link href={item.href} key={item.name}>
      <p className="menuItem">{item.name}</p>
    </Link>
  ))

  return <div className="primaryMenu">{items}</div>
}
