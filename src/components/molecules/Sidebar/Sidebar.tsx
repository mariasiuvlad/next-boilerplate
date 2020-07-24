import Link from 'next/link'
import Icon from '@atom/Icon'
import style from './Sidebar.module.css'
import {SidebarNavigation} from '@config'

export default function Sidebar() {
  return (
    <div className={style.container}>
      {SidebarNavigation.map(({href, icon}) => (
        <Link key={href + icon} href={href}>
          <a>
            <Icon name={icon} className={style.icon} />
          </a>
        </Link>
      ))}
    </div>
  )
}
