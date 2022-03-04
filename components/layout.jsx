import Navbar from './navbar';
import Topbar from './topbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
}
