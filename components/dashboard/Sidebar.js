// components/Sidebar.js

import Link from "next/link";
import { useState } from "react";
import {ChevronLeft , Bars3} from "@heroicons/react"
const Sidebar = () => {
  const items = [
    {
      id: 1,
      label: "داشبرد",
      link: "/dashboard",
      submenu: null,
    },
    {
      id: 2,
      label: "سفارشات",
      link: "#",
      submenu: [
        { id: 21, label: "سفارشات در حال بررسی", link: "/orders/pending" },
        { id: 22, label: "سفارشات تکمیل شده", link: "/orders/completed" },
      ],
    },
    {
      id: 3,
      label: "محصولات",
      link: "#",
      submenu: [
        { id: 31, label: "تمامی محصولات", link: "/products/all" },
        { id: 32, label: "اضافه کردن محصول", link: "/dashboard/products/add" },
      ],
    },
  ];
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`rtl bg-pedram-4  w-64 h-screen ${
        open ? "" : "hidden"
      } md:block md:w-16 lg:w-64`}
    >
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar} className="md:hidden">
          {open ? (
             <ChevronLeft />
            
          ) : (
            
            <p></p>
          )}
        </button>
        <Link href="/">
          <a className="text-lg font-bold flex items-center space-x-2">tetis</a>
        </Link>
      </div>

      <nav>
        <ul className="space-y-1">
          {items.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
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
        <span>{item.label}</span>
        {item.submenu && <div>{openSubMenu ? "-" : "+"}</div>}
      </div>

      {item.submenu && openSubMenu && (
        <ul className="pl-8">
          {item.submenu.map((subItem) => (
            <li key={subItem.id}>
              <Link href={subItem.link}>
                <a className="block px-4 py-2">{subItem.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
