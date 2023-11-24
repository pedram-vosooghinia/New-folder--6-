import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { NavbarWithSearch } from "../MTailwind/Navbar";
import { FooterWithSocialLinks } from "../MTailwind/footer";
function Layout({ title, children }) {
  return (
    <>
     

      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>
      <NavbarWithSearch />
      <div className=" bg-slate-50	">
        <main>{children}</main>
      </div>
      <div className="mt-8 ">
        <FooterWithSocialLinks />
      </div>
    </>
  );
}

export default Layout;
