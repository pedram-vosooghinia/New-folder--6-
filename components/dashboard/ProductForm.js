// components/AddProductForm.js
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const AddProductForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('/api/products', values);
      console.log('Product added:', response.data);
      // Optionally, you can redirect the user or perform other actions after adding the product
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        productName: '',
        description: '',
        inventory: 0,
        category: '',
        color: '',
        quantityInCarton: 0,
        price: 0,
        productCode: '',
        season: '',
        material: '',
      }}
      validate={(values) => {
        // Implement custom validation if needed
        const errors = {};
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="productName">نام محصول:</label>
          <Field type="text" id="productName" name="productName" />
          <ErrorMessage name="productName" component="div" />
        </div>

        <div>
          <label htmlFor="description">توضیحات:</label>
          <Field as="textarea" id="description" name="description" />
          <ErrorMessage name="description" component="div" />
        </div>

        <div>
          <label htmlFor="inventory">موجودی:</label>
          <Field type="number" id="inventory" name="inventory" />
          <ErrorMessage name="inventory" component="div" />
        </div>

        <div>
          <label htmlFor="category">دسته بندی:</label>
          <Field as="select" id="category" name="category">
            <option value="">انتخاب کنید</option>
            <option value="رسری">رسری</option>
            <option value="شال">شال</option>
            {/* Add more categories as needed */}
          </Field>
          <ErrorMessage name="category" component="div" />
        </div>

        {/* Add other fields similarly */}

        <div>
          <button type="submit">افزودن محصول</button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddProductForm;
