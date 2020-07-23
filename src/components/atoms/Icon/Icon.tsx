import * as Icons from '@assets/Icons'

export default function Icon({name, ...rest}) {
  const Icon = Icons[name]
  return <Icon {...rest} />
}
