import React from 'react'
import style from './Button.module.css'
import CoinIcon from '@components/Icons/ptw_coin2.svg'

export interface ButtonPropTypes {
  children: string
  disabled?: boolean
  icon?: SVGElement
  /** `outline` `primary` `sharp` `default` */
  variant?: 'outline' | 'primary' | 'sharp' | 'default'
  /**
   * Action handler
   * @param e MouseEvent
   */
  onClick: (e) => void
}

export default function Button({
  children,
  variant = 'default',
  disabled = false,
  icon,
  onClick,
}: ButtonPropTypes) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={style.button + ' ' + style[variant]}
    >
      <span className="whitespace-no-wrap truncate">{children}</span>
      {icon && <CoinIcon className={style.icon} />}
    </button>
  )
}
