import Link from 'next/link';

function Header() {
  const nav = ['skincare', 'makeup', 'body', 'hair', 'fragrance', 'nails', 'tools', 'brands'];
  return (
    <nav className="flex justify-center gap-5 border-y-2 py-2">
      {nav?.map((item, i) => (
        <Link key={i} passHref href="/">
          <a className="uppercase text-black-300 font-bold">{item}</a>
        </Link>
      ))}
    </nav>
  );
}

export default Header;
