import React from 'react'
import style from './Button.module.css'
import Icon from '@atom/Icon'

export interface ButtonProps {
  label?: string
  disabled?: boolean
  icon?: 'facebook' | 'google' | 'coin' | 'twitter' | ''
  /** `primary` `secondary` `outline` `sharp` `default` */
  variant?: 'primary' | 'secondary' | 'outline' | 'sharp' | 'default'
  /**
   * Action handler
   * @param e MouseEvent
   */
  onClick?: (e) => void
}

export default function Button({
  label,
  variant = 'default',
  disabled = false,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick} className={style.button + ' ' + style[variant]}>
      {icon && <Icon name={icon} className={style.icon} />}
      {label && <span className={style.label}>{label}</span>}
    </button>
  )
}
