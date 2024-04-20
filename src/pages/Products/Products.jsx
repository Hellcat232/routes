import { getProducts } from "../../fakeAPI";
import ProductsList from "../../components/App/ProductsList";

const Products = () => {
  const product = getProducts();

  return (
    <>
      <ProductsList products={product} />
    </>
  );
};

export default Products;
