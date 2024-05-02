import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useFetch";

const BrowsePage = () => {
  const products = useProducts();
  return (
    <div>
      This is Browse Page
      {/* Add search bar */}
      {/* Add fitlers */}
      {
        /* Cards */
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            color={product.color}
          />
        ))
      }
    </div>
  );
};

export default BrowsePage;
