import Link from 'next/link'
import {MainNavigation, AuthLinks} from '@config'
import MenuPrimary from '@components/MenuPrimary'
import Logo from '@components/Logo'
import Button from '@components/common/Button'
import style from './Header.module.css'

export default function Header({isLoggedIn, logout}) {
  return (
    <nav className={style.nav}>
      <Link href="/">
        <Logo />
      </Link>
      <MenuPrimary menu={MainNavigation} />
      {!isLoggedIn ? (
        <MenuPrimary menu={AuthLinks} />
      ) : (
        <Button variant="outline" onClick={logout} label="logout" />
      )}
    </nav>
  )
}
