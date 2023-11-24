import Layout from "../../components/Main/Layout";
import { useRouter } from "next/router";
import products from "../../data/products";
function ProductPage() {
  const router = useRouter();
  const findRoute = router.query.slug;
  const mainProduct = products.find((item) => item.slug === findRoute);
  console.log("mainProduct", mainProduct);
  return (
    <>
      <Layout>
        <div className="flex  flex-col justify-center md:flex-row-reverse ">
          <div className="max-w-xs object-cover m-8 ">
            <img
              src={mainProduct?.image}
              alt={mainProduct?.title}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-around overflow-hidden content-between shadow-lg  rtl ">
            <div className="px-6  ">
              <div className="font-bold text-xl mb-2">{mainProduct?.title}</div>
              <div>ویژگی ها</div>
              <p className="text-gray-700 text-base">
                {mainProduct?.description}
              </p>

              <div className="flex text-gray-700">
                <div className="rtl ">کد محصول</div>
                <div>{mainProduct?.code}</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between rounded-md bg-pedram-1 text-sm text-gray-100 px-4 py-4 m-4">
                <h3>{mainProduct?.price}</h3>
                <h3 className="rtl px-2">تومان</h3>
              </div>
              <button className="flex  mx-auto rounded-md bg-pedram-3 text-gray-100  m-2 p-3">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default ProductPage;
