import React from 'react'
import {SelectOption} from './types'
import style from './Select.module.css'

interface SelectProps {
  name: string
  id: string
  options?: SelectOption[]
}

const Select = ({name, id, options = []}: SelectProps, ref: React.LegacyRef<HTMLSelectElement>) => {
  return (
    <select className={style.select} name={name} id={id} ref={ref}>
      {options.map(({value, label}) => (
        <option className="p-8" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default React.forwardRef<HTMLSelectElement, SelectProps>(Select)
