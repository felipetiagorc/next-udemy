import { AppProps } from 'next/app'
import Head from 'next/head'
// import Layout from '../components/layout'
import './../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    // Layout 'persist' across all pages
    // <Layout>
    <>
      <Head>
        <title>GPU-Next</title>
        <link rel="shortcut icon" href="/img/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/img/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092b" />
      </Head>
      {/* <GlobalStyles /> */}
      <Component {...pageProps} />
    </>
    // </Layout>
  )
}

export default App
