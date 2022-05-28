import Footer from './Footer'
import Navbar from './Navbar'
import Topbar from './Topbar'

export default function Layout({ children }) {
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
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
