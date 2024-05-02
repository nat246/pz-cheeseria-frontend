import { useEffect, useState } from "react";
import {
  fetchProduct,
  fetchProductFilterResults,
  fetchProducts,
} from "../services/productService";
import { Product } from "../data/product.interface";
import { CheeseColor } from "../data/cheese-color.enum";

export function useProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((res: Product[]) => {
        setProducts(res);
      })
      .catch((error: Error) => {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  }, []);

  return products;
}

export function useProduct(productId: string): Product | null {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProduct(productId)
      .then((res: Product) => setProduct(res))
      .catch((error: Error) => {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  });

  return product;
}

export function useProductFilterResults(
  search?: string,
  color?: CheeseColor
): Product[] {
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    fetchProductFilterResults(search, color)
      .then((res: Product[]) => {
        setResults(res);
      })
      .catch((error: Error) => {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  }, [search, color]);

  return results;
}
