import { Provider } from 'react-redux';
import store from '../redux/store/store';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>FDN</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
