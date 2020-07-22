import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'
import style from './Layout.module.css'

export default function Layout({children}) {
  return (
    <div className={style.wrapper}>
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="container flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
