import React from "react";
import Link from "next/link";
const ProductCard = ({ product }) => {
 console.log("product",product)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 rtl">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-64 object-cover"
        />
      </Link>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.productName}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="flex justify-between rounded-md  bg-pedram-1 text-sm text-gray-100 px-2 py-4 mx-2">
        <div className="flex">
          <div className="rtl px-2">کد</div>
          <div>{product.barcode}</div>
        </div>
        <div className="flex">
          <div>{product.price}</div>
          <div className="rtl px-2">تومان</div>
        </div>
      </div>
      <Link href={`/product/${product.slug}`}>
        <button className="flex  mx-auto rounded-md bg-pedram-2 text-gray-100 text-xm m-2 p-3">
          مشاهده بیشتر
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
