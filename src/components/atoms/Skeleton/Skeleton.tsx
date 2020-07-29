import style from './Skeleton.module.css'

type SkeletonProps = {
  type: 'avatar' | 'text'
  className?: string
}

export default function Skeleton({type, className = ''}: SkeletonProps) {
  return <div className={style[type] + ' ' + className} />
}
