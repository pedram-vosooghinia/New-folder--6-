
import Link from "next/link";
import { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Sidebar = () => {
  const items = [
    {
      id: 1,
      label: "خانه",
      link: "/",
      submenu: null,
    },
    {
      id: 2,
      label: "پنل کابری",
      link: "/dashboard",
      submenu: null,
    },
    {
      id: 3,
      label: "سفارشات",
      link: "#",
      submenu: [
        { id: 31, label: "سفارشات در حال بررسی", link: "/orders/pending" },
        { id: 32, label: "سفارشات تکمیل شده", link: "/orders/completed" },
      ],
    },
    {
      id: 4,
      label: "محصولات",
      link: "#",
      submenu: [
        { id: 41, label: "تمامی محصولات", link: "/products/all" },
        { id: 42, label: "اضافه کردن محصول", link: "/dashboard/products/add" },
      ],
    },
  ];
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div
      className=" bg-pedram-4 w-full"
    >
      <div className=" items-center  justify-between p-4">
        <button onClick={toggleSidebar}>
        <BsFillMenuButtonWideFill />
        </button>
      </div>
      {open && (
        <nav>
          <ul className="mx-8 items-center space-y-1">
            {items.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

const SidebarItem = ({ item }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <li>
      <div
        className="flex rounded-lg bg-pedram-1 text-white items-center justify-between px-4 py-2 cursor-pointer "
        onClick={item.submenu ? toggleSubMenu : null}
      >
        <Link href={item.link}>
          <p className="flex items-center space-x-2">
            <span>{item.label}</span>
            {item.submenu && <div>{openSubMenu ? "-" : "+"}</div>}
          </p>
        </Link>
      </div>

      {item.submenu && openSubMenu && (
        <ul className="pl-8 ">
          {item.submenu.map((subItem) => (
            <li key={subItem.id} className="">
              <Link href={subItem.link}>
                <p className="block px-16 py-2 my-2 bg-pedram-3 rounded-lg ">{subItem.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
