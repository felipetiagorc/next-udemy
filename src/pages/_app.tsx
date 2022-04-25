import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from "styled-components"
// import Layout from '../components/layout'
import './../styles/global.css'

const GlobalStyle = createGlobalStyle`
* {
  margins: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #__next{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
}
`

const temaPadrao = {
  colors: {
    primary: '#0070f3'
  }
}



function App({ Component, pageProps }: AppProps) {
  return (
    // Layout 'persist' across all pages
    // <Layout>
    <>
    <GlobalStyle />
    
      <Head>
        <title>GPU-Next</title>
        <link rel="shortcut icon" href="/img/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/img/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092b" />
      </Head>

      <Component {...pageProps} />
    </>
    // </Layout>
  )
}

export default App
