import { getProducts } from "../../fakeAPI";
import ProductsList from "../../components/App/ProductsList";
import { Outlet } from "react-router-dom";

const Products = () => {
  const product = getProducts();

  return (
    <>
      <ProductsList products={product} />

      <Outlet />
    </>
  );
};

export default Products;
