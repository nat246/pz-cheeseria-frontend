import { useEffect, useState } from "react";
import CheeseFilter from "../components/CheeseFilter";
import ProductCard from "../components/ProductCard";
import { useProductFilterResults, useProducts } from "../hooks/useFetch";
import { CheeseColor } from "../data/cheese-color.enum";
import { Product } from "../data/product.interface";
import SearchBar from "../components/SearchBar";
import { SearchProps } from "../data/search-prop.interface";

const BrowsePage = ({ searchQuery, setSearchQuery }: SearchProps) => {
  const [color, setColor] = useState<CheeseColor>(CheeseColor.ALL);
  const allProducts = useProducts();
  const filteredProducts = useProductFilterResults(searchQuery, color);
  const [displayedProducts, setDisplayedProducts] =
    useState<Product[]>(allProducts);

  // Filter cheese by search and color
  useEffect(() => {
    if (color === CheeseColor.ALL && searchQuery === "") {
      setDisplayedProducts(allProducts);
    } else {
      setDisplayedProducts(filteredProducts);
    }
  }, [color, allProducts, filteredProducts, searchQuery]);

  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-4xl">Browse Cheese</h1>
      {/* Add search bar */}
      <span className="flex w-full gap-4">
        <SearchBar setSearchQuery={setSearchQuery} />
        {/* Add fitlers */}
        {/* <Label>Choose color: </Label> */}
        <CheeseFilter color={color} setColor={setColor} />
      </span>

      <section className="flex flex-wrap">
        {
          /* Cards */
          displayedProducts.map((product) => (
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
      </section>
    </div>
  );
};

export default BrowsePage;
