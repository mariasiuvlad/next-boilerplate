import Header from './Header'

export default function Layout({children}) {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="container p-16">{children}</div>
    </div>
  )
}
