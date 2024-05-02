import { useEffect, useState } from "react";
import CheeseFilter from "../components/CheeseFilter";
import ProductCard from "../components/ProductCard";
import { useProductFilterResults, useProducts } from "../hooks/useFetch";
import { CheeseColor } from "../data/cheese-color.enum";
import { Product } from "../data/product.interface";
import SearchBar from "../components/SearchBar";
import { SearchProps } from "../data/search-prop.interface";
import { Label } from "reactstrap";

const BrowsePage = ({searchQuery, setSearchQuery}: SearchProps) => {
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
    <div>
      {/* Add search bar */}
      <Label>Search: </Label>
      <SearchBar setSearchQuery={setSearchQuery} />
      {/* Add fitlers */}
      <Label>Choose color: </Label>
      <CheeseFilter color={color} setColor={setColor} />
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
    </div>
  );
};

export default BrowsePage;
