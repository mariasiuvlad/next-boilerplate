import Header from './Header'
import {useAuth, useAuthActions} from '@context/auth'

export default function HeaderContainer() {
  const {initialized, isLoggedIn} = useAuth()
  const {logout} = useAuthActions()
  return <Header initialized={initialized} isLoggedIn={isLoggedIn} logout={logout} />
}
