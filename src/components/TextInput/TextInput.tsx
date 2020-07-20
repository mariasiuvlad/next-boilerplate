import style from './TextInput.module.css'
import React from 'react'

interface TextInputProps {
  id?: string
  placeholder?: string
  name: string
  type: 'email' | 'password'
}

export default React.forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
  ({id, name, placeholder, type}: TextInputProps, ref) => {
    return (
      <div className={style.container}>
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
)
