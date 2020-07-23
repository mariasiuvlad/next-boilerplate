import Header from './Header'
import {useAuth, useAuthActions} from '@context/auth'

export default function HeaderContainer() {
  const {isLoggedIn} = useAuth()
  const {logout} = useAuthActions()
  return <Header isLoggedIn={isLoggedIn} logout={logout} />
}
