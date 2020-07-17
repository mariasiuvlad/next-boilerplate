import Link from 'next/link'
import {PRIMARYMENU} from '@config/constants'
import style from './MenuPrimary.module.css'

export const MenuPrimary = () => {
  const items: JSX.Element[] = PRIMARYMENU.map((item) => (
    <Link href={item.href} key={item.name}>
      <p className={style.item}>{item.name}</p>
    </Link>
  ))

  return <div className={style.container}>{items}</div>
}
