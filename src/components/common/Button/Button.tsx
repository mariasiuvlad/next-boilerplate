import React, {FunctionComponent} from 'react'
import style from './Button.module.css'

interface ButtonPropTypes {
  onClick(): void
  id?: string
  children: string
  variant: 'outline' | 'primary' | 'default'
}

export const Button: FunctionComponent<ButtonPropTypes> = ({
  onClick,
  id,
  children,
  variant = 'default',
}) => {
  return (
    <button onClick={onClick} className={style[variant]} id={id}>
      {children}
    </button>
  )
}
