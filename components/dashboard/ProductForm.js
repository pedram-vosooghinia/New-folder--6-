// components/AddProductForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from 'react';

const AddProductForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("/api/products", values);
      console.log("Product added:", response.data);
      // Optionally, you can redirect the user or perform other actions after adding the product
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setSubmitting(false);
    }
  };
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };
  const inputItems = [
    { id: "productName", label: "نام محصول", type: "text", className: "block-inline" },
    { id: "price", label: "قیمت", type: "number", className: "inline" },
    { id: "inventory", label: "موجودی", type: "number", className: "block-inline" },
    { id: "barcode", label: "کد محصول", type: "number", className: "block-inline" },
    { id: "numberInPack", label: "تعداد در بسته", type: "number", className: "block-inline" },
    { id: "coloring", label: "تعداد رنگ بندی", type: "number", className: "block-inline" },
    { id: "image", label: "تصویر", type: "file", className: "block-inline" },
  ];

  return (
    <Formik
      initialValues={{
        productName: "",
        price: 0,
        inventory: 0,
        barcode: "",
        numberInPack: "",
        coloring: 0,
        
      }}
      validate={(values) => {
        // Implement custom validation if needed
        const errors = {};
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form className="rtl max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-lg">
      
        <div className="flex justify-between flex-wrap">
        {inputItems.map((item, index) => (
        <div className={`mb-4 ${index === 0 ? 'w-full' : ' w-1/2'} px-2 ${item.className}`} key={index}>
        <label
              htmlFor={item.id}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {item.label}:
            </label>
            {item.type === 'file' ? (
              <div className="block-inline">
                <input
                  type="file"
                  id={item.id}
                  name={item.id}
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor={item.id}
                  className="cursor-pointer w-full py-2 border rounded-md bg-blue-500 text-white text-center"
                >
                  انتخاب تصویر
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Selected"
                    className="mt-2 max-w-full h-auto"
                  />
                )}
              </div>
            ) : (
              <Field
                type={item.type}
                id={item.id}
                name={item.id}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            )}
            <ErrorMessage
              name={item.id}
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>
      ))}
        </div>

        <div className="flex justify-between">
          <div className="mb-4 px-2 w-1/2">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              دسته بندی:
            </label>
            <Field
              as="select"
              id="category"
              name="category"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">انتخاب کنید</option>
              <option value="رسری">روسری</option>
              <option value="شال">شال</option>
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>
          <div className="mb-4 px-2 w-1/2">
            <label
              htmlFor="seasion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              فصل:
            </label>
            <Field
              as="select"
              id="seasion"
              name="seasion"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">انتخاب کنید</option>
              <option value="رسری">بهار</option>
              <option value="شال">تابستان</option>
              <option value="پاییز">پاییز</option>
              <option value="زمستان">زمستان</option>
            </Field>
            <ErrorMessage
              name="seasion"
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className=" block text-gray-700 text-sm font-bold mb-2"
          >
            توضیحات:
          </label>
          <Field
            as="textarea"
            id="description"
            name="description"
            rows="4"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-red-500 text-sm mt-2"
          />
        </div>




        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            افزودن محصول
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddProductForm;
