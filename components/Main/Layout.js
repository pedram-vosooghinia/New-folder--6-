import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { NavbarWithSearch } from "../MTailwind/Navbar";
import { FooterWithSocialLinks } from "../MTailwind/footer";
import Footer from "./Footer";
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
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
