import Header from '@components/Header'
import style from './Layout.module.css'

export default function Layout({children, noHeader = false}) {
  return (
    <div className={style.wrapper}>
      {!noHeader && <Header />}
      <main className="container">{children}</main>
    </div>
  )
}
