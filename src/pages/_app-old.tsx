import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout/index'
import './../styles/global.css'

const temaPadrao = {
  colors: {
    primary: '#0070f3'
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    // Layout 'persist' across all pages
    <>
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
    </>
  )
}

export default App
