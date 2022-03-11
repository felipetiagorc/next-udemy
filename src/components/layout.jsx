import Topbar from './topbar'
import Navbar from './navbar'
import Content from './content'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
