import Footer from './Footer'
import Navbar from './Navbar/'
import Topbar from './Topbar'

export default function Layout({ children }) {
  const activeMenu = true
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
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
