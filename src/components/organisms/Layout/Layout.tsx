import Header from '@organism/Header'
import Footer from '@molecule/Footer'
import Sidebar from '@molecule/Sidebar'
import style from './Layout.module.css'

function Layout({children}) {
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

export default Layout
