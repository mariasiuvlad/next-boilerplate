import Link from 'next/link'
import {MainNavigation, AuthLinks} from '@config'
import MenuPrimary from '@molecule/MenuPrimary'
import Logo from '@atom/Logo'
import Button from '@atom/Button'
import style from './Header.module.css'
import Loading from '@atom/Loading'

const AuthFallback = () => <Loading size="small" />

const Auth = ({isLoggedIn, logout}) =>
  !isLoggedIn ? (
    <MenuPrimary menu={AuthLinks} />
  ) : (
    <Button variant="outline" onClick={logout} label="logout" />
  )

export default function Header({initialized, isLoggedIn, logout}) {
  return (
    <nav className={style.nav}>
      <div className="mx-16">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="flex-grow">
        <MenuPrimary menu={MainNavigation} />
        <div className={style.spinner} />
      </div>
      <div className="w-1/6 flex justify-center items-center">
        {initialized ? <Auth isLoggedIn={isLoggedIn} logout={logout} /> : <AuthFallback />}
      </div>
    </nav>
  )
}
