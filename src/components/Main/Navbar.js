import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";

const Navbar = () => {
  const lists = [
    {
      title: "درباره ما",
      linkTitle: "",
      icon: <MdOutlinePeopleOutline size={24} />,
    },
    {
      title: "تماس با ما",
      linkTitle: "",
      icon: <BsTelephoneInbound size={24} />,
    },
    {
      title: "حساب کاربری",
      linkTitle: "/dashboard",
      icon: <MdOutlineDashboard size={24} />,
    },
  ];
  return (
    <nav className="  rtl bg-pedram-4 p-4 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between pb-4">
        <div className="w-full relative px-8">
          <input
            type="text"
            placeholder="جستجو محصولات tetisan"
            className="w-full px-6 py-2 border rounded-md rtl text-black placeholder-gray-500 focus:outline-none focus:border-pedram-2"
            style={{ textAlign: "center" }}
          />
        </div>
        <div className="hidden md:flex w-1/5 text-pedram-1  text-4xl font-bold">
          <Link href="/">
            TETISAN
          </Link>
        </div>
      </div>
      <div className="flex  justify-between hidden md:flex">
        <div className="flex items-center mx-4">
          {lists.map((item) => (
            <Link key={item.title} href={item.linkTitle}>
              <div className="flex mx-4 items-center text-gray-700 text-l relative group">
                <span className="mx-2">{item.icon}</span>
                <span className="mx-2 pb-2">{item.title}</span>
                <div className="absolute  inset-x-0 bottom-0 h-0.5 bg-pedram-2 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex">
          <div className="mx-4 p-2 text-pedram-2  w-fit	text-gray-100 text-l rounded-lg font-bold bg-pedram-3">
            <Link href="/login">ورود / ثبت نام</Link>
          </div>

          <div >
            <div className="flex flex-col items-center text-pedram-2 font-bold text-xs">
              <Link href="/" className="flex items-center">
                <FaCartShopping size={24} />
              </Link>
              <Link href="/" className="mt-1">سبد خرید</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
