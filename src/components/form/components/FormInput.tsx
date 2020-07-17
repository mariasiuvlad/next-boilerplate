import style from './Form.module.css'

const FormInput = ({id, type, name, placeholder = '', label, bind}) => (
  <input
    className={style.input}
    id={id}
    type={type}
    name={name}
    placeholder={placeholder || label}
    ref={bind}
  />
)

export default FormInput
