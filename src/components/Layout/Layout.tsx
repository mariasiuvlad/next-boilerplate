import Header from '@components/Header'

export default function Layout({children}) {
  return (
    <div className="h-screen w-screen">
      <Header />

      <div className="flex-grow">
        <main className="container p-16">{children}</main>
      </div>
    </div>
  )
}
