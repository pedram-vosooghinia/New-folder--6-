import Link from "next/link";

const Footer = () => {
  const links = [
    {
      title: "مجموعه تتیسان",
      items: ["درباره ما", "تماس با ما", "قوانین و مقررات"],
    },
    {
      title: "راه های ارتباطی",
      items: ["instagram", "telegram", "whatsapp"],
    },
  ];

  return (
    <footer className="bg-pedram-4 relative w-full text-pedram-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-pedram-1 m-6 text-4xl font-bold">
          <Link href="/">TETISAN </Link>
        </div>
        <div className="flex md:flex-row  p-6 rtl w-full ">
          {links.map((category) => (
            <div key={category.title} className="text-lg p-6">
              <div className="text-pedram-1 font-bold">{category.title}</div>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`} className="hover:text-gray-400">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-pedram-5"></div>
      <div className="p-8 text-center text-pedram-1">
        <p>&copy; 2023 TETISAN</p>
      </div>
    </footer>
  );
};

export default Footer;
