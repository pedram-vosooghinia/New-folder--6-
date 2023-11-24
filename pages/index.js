import Layout from "../components/Main/Layout";
import products from "../data/products";
import { EcommerceCard } from "../components/Main/ProductCard";
import ProductCard from "../components/Main/ProductCard";
function Home() {
  return (
    <Layout title="Home Page" >
      <div className=" grid grid-cols-1 sm:justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};
export default Home;
// {products.map((item) => (
//   ))}