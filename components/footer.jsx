import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import AdsBanner from './ads-banner';

function Footer() {
  return (
    <footer className="border-t-2">
      <div className="container px-5 pt-10 pb-4 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <Link href="/" passHref>
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="text-gray-600 hover:text-gray-800">Feedback</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="text-gray-600 hover:text-gray-800">Content</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <Link href="/" passHref>
                  <a className="text-gray-600 hover:text-gray-800">Terms &amp; Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="text-gray-600 hover:text-gray-800">Help</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <Link href="/" passHref>
                  <a className="text-gray-600 hover:text-gray-800">Awards</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="text-gray-600 hover:text-gray-800">Newsletter</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Download Our Mobile App</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start gap-2">
              <a href="https://itunes.apple.com/id/app/female-daily-beauty-review/id1160742672?l=id&mt=8">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/btn_appstore.png"
                  alt="app store download"
                  className="w-25 h-auto max-w-full"
                />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.fdbr.android&hl=en_GB">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/btn_playstore.png"
                  alt="play store download"
                  className="w-25 h-auto max-w-full"
                />
              </a>
            </div>

            <div className="inline-flex text-3xl mt-6 gap-4">
              <AiFillFacebook className="text-blue-800" />
              <AiFillTwitterCircle className="text-blue-400" />
              <AiFillInstagram className="text-red-200" />
              <AiFillYoutube className="text-red-600" />
            </div>
          </div>
        </div>
        <AdsBanner width={970} height={50} />
      </div>
    </footer>
  );
}

export default Footer;
