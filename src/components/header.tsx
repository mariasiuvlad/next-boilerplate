import Link from 'next/link'
import Router from 'next/router'
import {logout} from '../lib/auth'
import {useContext} from 'react'
import AuthStore from '@state/auth'
import {Logout} from '@state/auth/actions'

const Header = () => {
  const {dispatch} = useContext(AuthStore)

  const onLogout = async () => {
    await logout()
    dispatch(Logout())
    Router.push('/login')
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/platform">
              <a>App</a>
            </Link>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:first-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  )
}

export default Header
