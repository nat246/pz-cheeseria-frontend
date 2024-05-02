import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useFetch";
import PriceCalculator from "../components/PriceCalculator";

const ProductPage = () => {
  const { id } = useParams();
  const product = useProduct(id ?? "");

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="flex gap-16">
        <img className="w-1/2" alt={product.name} src={product.image} />

        <span className="flex flex-col justify-around">
          <div>
            <h1 className="text-4xl">{product.name}</h1>
            <h3 className="text-lg">{`$${product.price.toFixed(2)}`}/kg</h3>

            <h3>Cheese color: {product.color}</h3>
          </div>

          <div>
            <PriceCalculator price={product.price} />

          </div>
        </span>
      </section>

      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
