import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AdsBanner from '../components/ads-banner';
import ArticleCard from '../components/article-card';
import Header from '../components/header';
import ProductCard from '../components/product-card';
import ReviewCard from '../components/review-card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FDN</title>
      </Head>

      <Header />

      <div className="mx-auto container md:max-w-screen-md lg:max-w-screen-lg">
        <AdsBanner />
        <AdsBanner width="970" height="250" />

        <p className="mt-5">Editor's Choice</p>
        <p> Curated with love </p>

        <div className="flex flex-wrap gap-2 justify-between my-16">
          <ProductCard />
          <ProductCard />
          <ProductCard withProfileImage />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="bg-pink-200 flex justify-center items-center mx-auto py-6 my-4">
        <div>
          <div className="text-center mb-4">
            <p className="title-font text-2xl font-bold">Looking for product that are just simply perfect for you? </p>
            <p> Here are some product that we believe match your skin blala </p>
            <button className="capitalize text-md bg-red-400 py-2 px-4 text-white mt-2 rounded-lg">
              See my matches
            </button>
          </div>

          <div className="flex gap-2 justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>

      <div className="mx-auto container md:max-w-screen-md lg:max-w-screen-lg">
        <AdsBanner width="970" height="250" />

        <h3 className="title-font text-3xl font-bold"> Trending this week </h3>
        <div className="flex justify-between mb-4 items-center">
          <p className="text-md text-gray-600"> So you can make better purchase decision </p>
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

        <section className="flex justify-between mb-28">
          <div className="w-3/5">
            <h3 className="title-font text-3xl font-bold"> Trending this week </h3>{' '}
            <div className="flex justify-between mb-4 items-center">
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

        <section className="mb-6">
          <h3 className="title-font text-3xl font-bold"> Trending this week </h3>
          <p className="text-md text-gray-600"> So you can make better purchase decision </p>

          <div className="flex flex-wrap gap-2 justify-between my-10">
            <ProductCard noBorder />
            <ProductCard noBorder />
            <ProductCard noBorder />
            <ProductCard noBorder />
            <ProductCard noBorder />
          </div>
        </section>

        <section className="mb-6">
          <h3 className="title-font text-3xl font-bold capitalize"> top brands </h3>
          <p className="text-md text-gray-600"> So you can make better purchase decision </p>

          <div className="flex">
            <Image
              layout="responsive"
              width="600"
              height="600"
              src="http://assets.kompasiana.com/items/album/2018/05/09/innisfree-1-5af1eff3f1334434237dcf43.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
