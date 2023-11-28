// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  const lists = [
    {
      title: "درباره ما",
      linkTitle: "",
    },
    {
      title: "تماس با ما",
      linkTitle: "",
    },
    {
      title: "سبد خرید",
      linkTitle: "",
    },
    {
      title: "حساب کاربری",
      linkTitle: "",
    },
  ];

  return (
    <nav className="bg-pedram-4 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:inline-block">
          <Link href="/">
            <a className="text-pedram-1 m-6 text-4xl font-bold">TETISAN</a>
          </Link>
        </div>
        <div className=" flex items-center hidden md:flex items-center space-x-4 rtl">
          {lists.map((item) => (
            <Link key={item.title} href={item.linkTitle}>
              <a className=" text-pedram-2 text-xl font-bold px-4">
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="md:py-4 md:px-12 text-right">
        <input
          type="text"
          placeholder=" جستجو محصولات"
          className="w-full md:w-1/3 mx-auto px-6 py-2 border rounded-md rtl"
          style={{ '::placeholder': { color: '#' } }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
