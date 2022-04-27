import Footer from './Footer'
import Navbar from './Navbar'
import Topbar from './Topbar'

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
