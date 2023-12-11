import Layout from "@/components/Main/Layout";
import db from "@/utils/db";
import ProductModel from "@/models/productModel";

async function getProductBySlug(slug) {
    await db.connect();
    const product = await ProductModel.findOne({ slug }, { _id: 0 }).lean();
    return product;
  }
  function ProductPage({ product }) {
    console.log("product", product);
    const items = [
      { title: "description", content: "ویژگی ها" },
      { title: "barcode", content: "کد محصول" },
      { title: "category", content: "دسته بندی" },
      { title: "coloring", content: "تعداد رنگ" },
      { title: "numberInPack", content: "تعداد در جین" },
      { title: "seasion", content: "فصل" },
      { title: "size", content: "ابعاد" },
    ];
    return (
      <>
        <Layout>
          <div className="flex  md:mt-40 mt-20 flex-col justify-center md:flex-row-reverse ">
            <div className="max-w-xs object-cover m-8 ">
              <img
                src={product?.image}
                alt={product?.productName}
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-around overflow-hidden content-between shadow-lg  rtl ">
              <div className="px-6  ">
                <div className="font-bold text-xl mb-2">
                  {product?.productName}
                </div>
                {items.map((item) => (
                  <div
                    className="flex justify-between text-gray-700 font-bold py-2 items-center"
                    key={item.title}
                  >
                    <div className="rtl px-2 ">{item.content}</div>
                    <div>{product?.[item.title]}</div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex justify-between rounded-md bg-pedram-1 text-sm text-gray-100 px-4 py-4 m-4">
                  <h3>{product?.price}</h3>
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
  
  export async function getServerSideProps(context) {
    const slug = context.params.slug;
    const product = await getProductBySlug(slug);
    await db.disconnect(); 
    return {
      props: { product },
    };
  }
  
  export default ProductPage;
  