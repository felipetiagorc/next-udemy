import { AppProps } from 'next/app'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'
import './../styles/global.css'
import PrimeReact from 'primereact/api'
import Head from 'next/head'
PrimeReact.inputStyle = 'filled'
PrimeReact.ripple = true
import Layout from '../components/layout'

function App({ Component, pageProps }: AppProps) {
  return (
    // Layout 'persist' across all pages
    <Layout>
      <Head>
        <title>GPU-Next</title>
        <link rel="shortcut icon" href="/img/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
