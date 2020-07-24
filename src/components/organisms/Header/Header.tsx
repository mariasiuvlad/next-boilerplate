import Link from 'next/link'
import {MainNavigation, AuthLinks} from '@config'
import MenuPrimary from '@components/molecules/MenuPrimary'
import Logo from '@components/atoms/Logo'
import Button from '@components/atoms/Button'
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
