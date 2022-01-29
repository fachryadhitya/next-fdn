import Head from 'next/head';
import Link from 'next/link';
import AdsBanner from '../components/ads-banner';
import ArticleCard from '../components/article-card';
import Header from '../components/header';
import PopularCard from '../components/popular-card';
import ProductCard from '../components/product-card';
import ReviewCard from '../components/review-card';

export default function Home({ partnerImage }) {
  return (
    <div>
      <Head>
        <title>FDN</title>
      </Head>

      <Header />

      <div className="mx-auto container md:max-w-screen-md lg:max-w-screen-lg px-4">
        <AdsBanner />
        <AdsBanner width="970" height="250" />

        <h3 className="title-font text-3xl font-bold capitalize mt-2"> Editor's choices </h3>
        <p className="text-lg text-gray-400 capitalize">
          curated with <span className="hover:underline hover:text-black hover:font-bold"> love 💖 </span>
        </p>

        <div className="flex flex-wrap md:gap-2 md:justify-center lg:justify-between my-8">
          <ProductCard withProfileImage />
          <ProductCard withProfileImage />
          <ProductCard withProfileImage />
          <ProductCard withProfileImage />
          <ProductCard withProfileImage />
        </div>
      </div>

      <div className="bg-pink-200 flex justify-center items-center mx-auto py-6 px-4 my-4 flex-col">
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="mx-auto container md:max-w-screen-md lg:max-w-screen-lg px-4">
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
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
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
              <ReviewCard />
              <ReviewCard />
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
            <PopularCard />
            <PopularCard />

            <PopularCard />

            <PopularCard />
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
              <iframe
                src="https://www.youtube.com/embed/5HtJTDWrsR4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-200 md:h-415"
              ></iframe>
            </div>

            <div className="flex flex-col gap-4 grow">
              <iframe
                src="https://www.youtube.com/embed/5HtJTDWrsR4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
                style={{ height: '200px' }}
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/5HtJTDWrsR4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
                style={{ height: '200px' }}
              ></iframe>{' '}
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="title-font text-3xl font-bold"> Trending this week </h3>
          <p className="text-md text-neutral-500"> See our weekly most reviewed products! 🥰 </p>

          <div className="flex flex-wrap gap-2 md:justify-center lg:justify-between my-10">
            <ProductCard noBorder />
            <ProductCard noBorder />
            <ProductCard noBorder />
            <ProductCard noBorder />
            <ProductCard noBorder />
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
          <div className="flex justify-center">
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
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const partnerImage = [
    'http://assets.kompasiana.com/items/album/2018/05/09/innisfree-1-5af1eff3f1334434237dcf43.jpg',
    'https://image.femaledaily.com/dyn/250/images/brands-pics/brands_1628574463_0ba4c8f16e_800x800.png'
  ];
  return {
    props: {
      partnerImage
    }
  };
}
