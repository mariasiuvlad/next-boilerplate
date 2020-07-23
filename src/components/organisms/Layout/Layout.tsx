import Header from '@components/organisms/Header'
import Footer from '@components/molecules/Footer'
import Sidebar from '@components/molecules/Sidebar'
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
