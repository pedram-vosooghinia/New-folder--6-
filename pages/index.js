// pages/index.js
import Layout from "../components/Main/Layout";
import ProductCard from "../components/product/ProductCard";
import db from "../utils/db";
import Product from "../models/productModel";

function Home({ products }) {
  return (
    <Layout title="Home Page">
      <div className="mt-28 md:mt-40	 relative pb-12 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;

export async function getServerSideProps() {
  await db.connect();

  const products = await Product.find({}, { _id: 0 }).lean();

  await db.disconnect();

  return {
    props: { products },
  };
}
