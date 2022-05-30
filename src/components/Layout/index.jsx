import Footer from './Footer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children }) {
  //transformei esse useEffect em getCookie la no pages/index
  // porem, o index nao engloba a aplicação inteira...
  // e no _app acho que não pode rodar getServerSideProps...

  // useEffect(() => {
  //   const currentThemeColor = getCookie('colorMode')
  //   const currentThemeMode = getCookie('themeMode')
  //   if (currentThemeColor && currentThemeMode) {
  //     setCurrentColor(currentThemeColor)
  //     setCurrentMode(currentThemeMode)
  //   }
  // }, [])
  return (
    <>
      <Topbar />
      <Sidebar />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
