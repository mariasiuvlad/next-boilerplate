import Link from 'next/link'
import Icon from '@components/Icon'
import style from './Sidebar.module.css'
import {SidebarNavigation} from '@config'

export default function Sidebar() {
  return (
    <div className={style.container}>
      {SidebarNavigation.map(({href, icon}) => (
        <Link key={href} href={href}>
          <Icon name={icon} className={style.icon} />
        </Link>
      ))}
    </div>
  )
}
