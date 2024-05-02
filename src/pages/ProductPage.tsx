import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useFetch";
import PriceCalculator from "../components/PriceCalculator";

const ProductPage = () => {
  const { id } = useParams();
  const product = useProduct(id ?? '');

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <img alt={product.name} src={product.image} />
      <h2>{product.name}</h2>
      <h3>{`$${product.price.toFixed(2)}`}/kg</h3>
      <h3>Cheese color: {product.color}</h3>
      <p>{product.description}</p>

      <PriceCalculator price={product.price} />
    </div>
  );
};

export default ProductPage;
