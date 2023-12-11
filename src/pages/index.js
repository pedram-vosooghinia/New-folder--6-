import { Inter } from 'next/font/google'
import db from '@/utils/db'
import ProductModel from '@/models/productModel'
import ProductCard from '@/components/Main/product/ProductCard'
import Layout from '@/components/Main/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {
  return (
    <main
      className={` ${inter.className}`}
    >
        <Layout title="Home Page">

    <div className="mt-28 md:mt-40	 relative pb-12 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      </Layout>

    
    </main>
  )
}
export async function getServerSideProps() {
  await db.connect();

  const products = await ProductModel.find({}, { _id: 0 }).lean();

  await db.disconnect();

  return {
    props: { products },
  };
}
