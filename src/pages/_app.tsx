import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../templates/Layout/index'

const colors = {
  azul: {
    600: '#1CADF4',
    900: '#003366'
  },
  cinza: {
    300: '#eeeeee',
    600: '#737373',
    900: '#505050'
  },
  preto: {
    900: '#000000'
  },

  verde: {
    300: '#008200',
    600: '#205527'
  },

  vermelho: {
    600: '#db0011'
  }
}

const theme = extendTheme({ colors })

function App({ Component, pageProps }: AppProps) {
  return (
    // Layout 'persist' across all pages
    <>
      <ChakraProvider theme={theme}>
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
      </ChakraProvider>
    </>
  )
}

export default App
