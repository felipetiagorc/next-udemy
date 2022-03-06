import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'
import './../styles/global.css'
import PrimeReact from 'primereact/api'
import Head from 'next/head'
PrimeReact.inputStyle = 'filled'
PrimeReact.ripple = true
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    // Layout 'persist' across all pages
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
