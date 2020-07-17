import style from './Form.module.css'

export default function SubmitButton({children, isSubmitting = false}) {
  return (
    <button className={style.submit} type="submit" disabled={isSubmitting}>
      {children}
    </button>
  )
}
