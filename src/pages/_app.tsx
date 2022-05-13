import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
<<<<<<< HEAD
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' //theme
// import 'primereact/resources/primereact.min.css' //core css
// import 'primeicons/primeicons.css'
// import './../styles/global.css'
// import PrimeReact from 'primereact/api'
// PrimeReact.inputStyle = 'filled'
// PrimeReact.ripple = true
import GlobalStyles from 'styles/global'
import Layout from '../components/Layout/'
=======
import Layout from '../components/Layout'

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
>>>>>>> cfc9beb386e8f33888c928d81881b69962b0dbc0

function App({ Component, pageProps }: AppProps) {
  return (
    // Layout 'persist' across all pages
<<<<<<< HEAD
    <Layout>
=======
>>>>>>> cfc9beb386e8f33888c928d81881b69962b0dbc0
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
<<<<<<< HEAD
</Layout>
=======
>>>>>>> cfc9beb386e8f33888c928d81881b69962b0dbc0
  )
}

export default App
