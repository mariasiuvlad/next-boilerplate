import React from 'react'
import Icon from '@atom/Icon'
import style from './TextInput.module.css'

interface TextInputProps {
  id?: string
  icon?: string
  placeholder?: string
  name?: string
  type?: 'text' | 'email' | 'password'
}

const TextInput = (
  {id, icon, name, placeholder, type = 'text'}: TextInputProps,
  ref: React.LegacyRef<HTMLInputElement>
) => {
  return (
    <div className={style.container}>
      {icon && <Icon name={icon} className={style.icon} />}
      <input
        className={style.input}
        id={id}
        name={name}
        placeholder={placeholder}
        ref={ref}
        type={type}
      />
    </div>
  )
}

export default React.forwardRef<HTMLInputElement, TextInputProps>(TextInput)
