import * as Icons from '@components/Icons'

export default function Icon({name, ...rest}) {
  const Icon = Icons[name]
  return <Icon {...rest} />
}
