// pages/index.js
import Layout from "../components/Main/Layout";
import ProductCard from "../components/Main/ProductCard";
import db from "../utils/db";
import Product from "../models/product";

function Home({ products }) {
  return (
    <Layout title="Home Page">
      <div className="md:mt-40 mt-20 relative pb-12 grid grid-cols-1 sm:justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
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

  // Fetch data from the MongoDB collection
  const products = await Product.find().lean();

  // Convert _id to string for each product
  const serializedProducts = products.map((product) => {
    return {
      ...product,
      _id: product._id.toString(),
    };
  });

  await db.disconnect();

  return {
    props: { products: serializedProducts },
  };
}
