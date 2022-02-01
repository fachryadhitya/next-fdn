import { Provider } from 'react-redux';
import store from '../redux/store/store';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta
          name="description"
          content="Temukan Informasi terkini dan terlengkap seputar dunia kecantikan mulai dari skin care, makeup, review produk dan brand kecantikan lokal maupun internasional."
        />

        <meta property="og:url" content="https://femaledaily.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan" />
        <meta
          property="og:description"
          content="Temukan Informasi terkini dan terlengkap seputar dunia kecantikan mulai dari skin care, makeup, review produk dan brand kecantikan lokal maupun internasional."
        />
        <meta property="og:image" content="https://femaledaily.com/static/images/logo_FD.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="femaledaily.com" />
        <meta property="twitter:url" content="https://femaledaily.com/" />
        <meta name="twitter:title" content="Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan" />
        <meta
          name="twitter:description"
          content="Temukan Informasi terkini dan terlengkap seputar dunia kecantikan mulai dari skin care, makeup, review produk dan brand kecantikan lokal maupun internasional."
        />
        <meta name="twitter:image" content="https://femaledaily.com/static/images/logo_FD.png"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
