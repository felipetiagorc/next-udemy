import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';

import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
