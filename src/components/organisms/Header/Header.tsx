import Link from 'next/link'
import {MainNavigation, AuthLinks} from '@config'
import MenuPrimary from '@molecule/MenuPrimary'
import Logo from '@atom/Logo'
import Button from '@atom/Button'
import style from './Header.module.css'

export default function Header({isLoggedIn, logout}) {
  return (
    <nav className={style.nav}>
      <Link href="/">
        <a>
          <Logo />
        </a>
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
