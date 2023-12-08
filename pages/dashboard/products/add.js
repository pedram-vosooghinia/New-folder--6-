import AddProductForm from "../../../components/dashboard/AddProductForm";
import Sidebar from "../../../components/dashboard/Sidebar";
const AddProduct = () => {
  return (
    <div className="flex rtl">
      <Sidebar />
      <AddProductForm />
    </div>
  );
};
export default AddProduct;
