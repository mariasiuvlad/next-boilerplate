import Link from 'next/link'
import {useAuthActions} from '@context/auth'
import Button from '@components/common/Button'

export default function LogStatus() {
  const {logout} = useAuthActions()

  return (
    <div className="flex flex-row nav-menu ml-32">
      <Link href={'/login'}>
        <span>LOG IN</span>
      </Link>
      <Link href={'/register'}>
        <span>REGISTER</span>
      </Link>
      <Button onClick={logout} variant="outline">
        Logout
      </Button>
    </div>
  )
}
