import React, {FunctionComponent} from 'react'

interface ButtonPropTypes {
  onClick(): void
  className: string
  id?: string
  children: string
}

export const Button: FunctionComponent<ButtonPropTypes> = ({
  onClick,
  className,
  id,
  children,
}) => {
  return (
    <button onClick={onClick} className={className} id={id}>
      {children}
    </button>
  )
}
