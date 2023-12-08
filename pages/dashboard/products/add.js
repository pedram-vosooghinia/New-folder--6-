import { useState } from "react";

import AddProductForm from "../../../components/dashboard/AddProductForm";
import Sidebar from "../../../components/dashboard/Sidebar";
const AddProduct = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rtl ">

      <Sidebar />
      <AddProductForm />
    </div>
  );
};
export default AddProduct;
