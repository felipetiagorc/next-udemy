import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout/'
import { ThemeProvider } from './../contexts/ThemeProvider'
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' //theme
// import 'primereact/resources/primereact.min.css' //core css
// import 'primeicons/primeicons.css'
// import './../styles/global.css'
// import PrimeReact from 'primereact/api'
// PrimeReact.inputStyle = 'filled'
// PrimeReact.ripple = true
// import GlobalStyles from 'styles/global'
import './../styles/global.css' //tailwind

function App({ Component, pageProps }: AppProps) {
  return (
    // Layout 'persist' across all pages
    <>
      <ThemeProvider>
        <Layout>
          <Head>
            <title>GPU-Next</title>
            <link rel="shortcut icon" href="/img/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/img/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />

            <meta name="theme-color" content="#06092b" />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
