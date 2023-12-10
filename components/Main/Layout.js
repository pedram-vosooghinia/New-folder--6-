import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Layout({ title, children }) {
  return (
    <>
     

      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>
      <Navbar/>
      <div className="	">
        <main>{children}</main>
      </div>
      <div className=" ">
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
