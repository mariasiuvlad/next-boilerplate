import MenuPrimary from '@components/MenuPrimary'
import Logo from '@components/Logo'
import {MainNavigation, AuthLinks} from '@config'
import style from './Header.module.css'
import Button from '@components/common/Button'

export default function Header({isLoggedIn, logout}) {
  return (
    <nav className={style.nav}>
      <Logo />
      <MenuPrimary menu={MainNavigation} />
      {!isLoggedIn ? (
        <MenuPrimary menu={AuthLinks} />
      ) : (
        <Button variant="outline" onClick={logout} label="logout" />
      )}
    </nav>
  )
}
