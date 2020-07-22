import Header from '@components/Header'
import style from './Layout.module.css'
import Footer from '@components/Footer'

export default function Layout({children, noHeader = false}) {
  return (
    <div className={style.wrapper}>
      {!noHeader && <Header />}
      <main className="container flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
