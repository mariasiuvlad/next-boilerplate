import style from './Loading.module.css'

type LoadingProps = {
  size?: 'small' | 'medium' | 'large'
}

export default function Loading({size = 'medium'}: LoadingProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className={[style.loading, style[size]].join(' ')} />
    </div>
  )
}
