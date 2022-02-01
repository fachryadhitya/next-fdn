import { Provider } from 'react-redux';
import store from '../redux/store/store';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>FDN</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
