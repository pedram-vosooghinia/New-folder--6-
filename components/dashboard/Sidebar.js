// components/Sidebar.js

import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

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
      className={`rtl bg-pedram-4 h-screen ${
        open ? "w-64" : "hidden"
      } md:block`}
    >
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar}>
          <IoMenu />
        </button>
      </div>
      {open && (
        <nav>
          <ul className="space-y-1">
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
        className="flex items-center justify-between px-4 py-2 cursor-pointer"
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
        <ul className="pl-8">
          {item.submenu.map((subItem) => (
            <li key={subItem.id}>
              <Link href={subItem.link}>
                <p className="block px-4 py-2">{subItem.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
