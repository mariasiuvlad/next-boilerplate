import {useRouter} from 'next/router'
import MenuPrimary from './MenuPrimary'

export default function MenuPrimaryContainer({menu = []}) {
  const {pathname} = useRouter()
  return <MenuPrimary menu={menu} pathname={pathname} />
}
