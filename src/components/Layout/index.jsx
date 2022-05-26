import { useStateContext } from '../../contexts/ThemeProvider'
import Footer from './Footer'
import Navbar from './Navbar'
import Topbar from './Topbar'

export default function Layout({ children }) {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,1
    setThemeSettings
  } = useStateContext()

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode')
    const currentThemeMode = localStorage.getItem('themeMode')
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor)
      setCurrentMode(currentThemeMode)
    }
  }, [])
  return (
    <>
      <Topbar />
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-darg-bg bg-white">
          <Navbar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">Sidebar Oculta</div>
      )}

      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? 'md:ml-72' : 'flex-2'
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          Navbar
        </div>
      </div>

      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
