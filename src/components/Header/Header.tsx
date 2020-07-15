import {MenuPrimary} from '@components/MenuPrimary/MenuPrimary'
import LogStatus from '@components/LogStatus'
import Logo from '@components/Logo'

export default function Header() {
  return (
    <nav className="flex flex-row flex-no-wrap justify-around p-6">
      <div className="ml-16"></div>
      <div className="flex-grow">
        <Logo />
      </div>
      <div className="flex-grow">
        <MenuPrimary />
      </div>
      <div className="flex-grow">
        <LogStatus />
      </div>
    </nav>
  )
}
