import style from './Form.module.css'

const FormLabel = ({id, label}) => (
  <label className={style.label} htmlFor={id}>
    {label}
  </label>
)

export default FormLabel
