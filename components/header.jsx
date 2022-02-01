import Link from 'next/link';

function Header() {
  const nav = ['skincare', 'makeup', 'body', 'hair', 'fragrance', 'nails', 'tools', 'brands'];

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-between">
          <a
            href="https://femaledaily.com"
            target="_blank"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="http://app.femaledaily.com/wp-content/uploads/2018/07/FD-Logo-Pink.png"
              alt=""
              className="w-40 h-auto max-w-full"
            />
          </a>

          <input
            type="text"
            className="w-full lg:w-2/3 border-2 p-1 rounded"
            placeholder="search products, articles, brands. . ."
          />
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 bg-red-700 text-white hover:text-red-600">
            Login / Sign up
          </button>
        </div>
        <nav className="flex px-4 md:px-0 md:justify-center gap-5 border-y-2 py-2 overflow-auto  w-full">
          {nav?.map((item, i) => (
            <Link key={i} passHref href="/">
              <a className="uppercase text-black-300 font-bold hover:text-red-400">{item}</a>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Header;
