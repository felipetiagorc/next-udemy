import Footer from './footer'
import Navbar from './navbar'
import Topbar from './topbar'

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
