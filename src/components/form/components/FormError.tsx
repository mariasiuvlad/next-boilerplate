import style from './Form.module.css'

const FormError = ({message}) => (
  <p className={style.error} role="alert">
    {message}
  </p>
)

export default FormError
