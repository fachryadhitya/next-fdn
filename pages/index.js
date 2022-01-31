import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdsBanner from '../components/ads-banner';
import ArticleCard from '../components/article-card';
import Footer from '../components/footer';
import Header from '../components/header';
import PopularCard from '../components/popular-card';
import ProductCard from '../components/product-card';
import ReviewCard from '../components/review-card';
import YoutubeCard from '../components/youtube-card';
import Loading from '../components/loading';
import { getProducts } from '../redux/actions/productActions';
import { createDynamicArray } from '../utils/array';

export default function Home({ partnerImage }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.productList);

  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const data = await fetch('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp');
    const res = await data.json();
    dispatch(getProducts(res));
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />

      <div className="mx-auto container md:max-w-screen-md lg:max-w-screen-lg px-4 lg:px-0">
        <AdsBanner />
        <AdsBanner width="970" height="250" />

        <h3 className="title-font text-3xl font-bold capitalize mt-2"> Editor's choices </h3>
        <p className="text-lg text-gray-400 capitalize">
          curated with <span className="hover:underline hover:text-black hover:font-bold"> love 💖 </span>
        </p>

        <div className="flex flex-wrap md:gap-2 md:justify-center lg:justify-between my-8">
          {products["editor's choice"]?.map((item, i) => (
            <ProductCard key={i} withProfileImage data={item} />
          ))}
        </div>
      </div>

      <div className="bg-pink-200 flex justify-center items-center mx-auto py-6 px-4 lg:px-0 my-4 flex-col">
        <div className="text-center mb-2">
          <p className="title-font text-2xl font-bold leading-7 mb-2 capitalize">
            Looking for product that are just simply perfect for <span className="underline">you?</span>
          </p>
          <p className="text-md leading-6 mb-2 text-neutral-800">
            Here are some product that we believe matches with your skin!
          </p>
          <button className="capitalize text-md bg-red-600 py-2 px-4 text-neutral-100 mt-2 rounded-lg">
            See my matches
          </button>
        </div>

        <div className="flex gap-2 justify-center flex-wrap">
          {products["editor's choice"]?.slice(0, 3)?.map((item, i) => (
            <ProductCard key={i} data={item} matchSkin styles="xl:w-32%" />
          ))}
        </div>
      </div>

      <div className="mx-auto container md:max-w-screen-md lg:max-w-screen-lg px-4 lg:px-0">
        <AdsBanner width="970" height="250" />

        <section className="mb-10">
          <h3 className="title-font text-3xl font-bold capitalize"> latest articles </h3>
          <div className="flex md:justify-between mb-4 md:items-center flex-col md:flex-row mt-2">
            <p className="text-md text-gray-500"> So you can make better purchase decision </p>
            <Link href="/">
              <a className="text-md text-red-400"> See more {`>`}</a>
            </Link>
          </div>

          <div className="my-4 flex justify-evenly gap-4 flex-wrap mb-4">
            {products['latest articles']?.map((item, i) => (
              <ArticleCard key={i} data={item} />
            ))}
          </div>
        </section>

        <section className="flex justify-between mb-28 flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 order-last lg:order-none">
            <h3 className="title-font text-3xl font-bold capitalize"> latest reviews </h3>{' '}
            <div className="flex md:justify-between mb-4 md:items-center flex-col md:flex-row mt-2">
              <p className="text-md text-gray-600"> So you can make better purchase decision </p>
              <Link href="/">
                <a className="text-md text-red-400"> See more {`>`}</a>
              </Link>
            </div>
            <div className="flex gap-2">
              {products['latest review']?.slice(0, 2)?.map((item, i) => (
                <ReviewCard key={i} data={item} />
              ))}
            </div>
          </div>

          <AdsBanner width="300" height="250" />
        </section>

        <section className="mb-10">
          <h3 className="title-font text-3xl font-bold capitalize"> Popular Groups </h3>
          <div className="flex md:justify-between mb-4 md:items-center flex-col md:flex-row mt-2">
            <p className="text-md text-neutral-500">
              Where the beauty <span className="uppercase"> talk </span> are{' '}
            </p>
            <Link href="/">
              <a className="text-md text-red-400"> See more {`>`}</a>
            </Link>
          </div>

          <div className="flex lg:justify-between gap-2 flex-wrap lg:flex-nowrap">
            {createDynamicArray(4).map((_, i) => (
              <PopularCard key={i} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="title-font text-3xl font-bold capitalize"> latest videos </h3>
          <div className="flex md:justify-between mb-4 md:items-center flex-col md:flex-row mt-2">
            <p className="text-md text-neutral-500"> Watch and learn, ladies 😉 </p>
            <Link href="/">
              <a className="text-md text-red-400"> See more {`>`}</a>
            </Link>
          </div>

          <div className="flex gap-2 h-auto flex-col md:flex-row">
            <div className="w-full md:w-3/5 bg-gray-500">
              <YoutubeCard src={'https://www.youtube.com/embed/5HtJTDWrsR4'} title="Hello" className="h-200 md:h-415" />
            </div>

            <div className="flex flex-col gap-4 grow">
              <YoutubeCard src={'https://www.youtube.com/embed/KH6uAN-Xnzo'} title="Hello" className="h-200" />
              <YoutubeCard src={'https://www.youtube.com/embed/nfvMifoRKkc'} title="Hello" className="h-200" />
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="title-font text-3xl font-bold"> Trending this week </h3>
          <p className="text-md text-neutral-500"> See our weekly most reviewed products! 🥰 </p>

          <div className="flex flex-wrap gap-2 md:justify-center lg:justify-between my-10">
            {products["editor's choice"]?.map((item, i) => (
              <ProductCard key={i} data={item} noBorder />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="title-font text-3xl font-bold capitalize"> top brands </h3>
          <div className="flex md:justify-between mb-4 md:items-center flex-col md:flex-row mt-2">
            <p className="text-md text-neutral-500"> We all know and love 💓 </p>
            <Link href="/">
              <a className="text-md text-red-400"> See more {`>`}</a>
            </Link>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            {partnerImage?.map((item, i) => (
              <img
                key={i}
                className="w-40 max-w-full h-auto object-center object-contain"
                src={item}
                alt="partner logo"
              />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="title-font text-xl font-bold capitalize">
            Female Daily – find everything you want to know about beauty on Female Daily
          </h3>
          <p className="text-md text-neutral-500">
            We believe that beauty is for everyone and we’ re here to make sure everyone has a share. We prioritize
            honesty and we want to be responsible in our beauty education. We strive for a better beauty industry for
            all players, one swipe of lipstick at a time.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const partnerImage = [
    'https://image.femaledaily.com/dyn/250/images/brands-pics/brands_1628574463_0ba4c8f16e_800x800.png',
    'https://image.femaledaily.com/dyn/250/images/brands-pics/brands_1552546717_Nivea_Logo_800x800.png',
    'https://image.femaledaily.com/dyn/250/images/brands-pics/brands_1542081653_tbs_800x800.png',
    'https://image.femaledaily.com/dyn/250/images/brands-pics/brands_1455261593_SK_II_logo_800x800.png'
  ];
  return {
    props: {
      partnerImage
    }
  };
}
