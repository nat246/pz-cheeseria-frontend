import { useEffect, useState } from "react";
import { fetchProduct, fetchProducts } from "../services/productService";
import { Product } from "../data/product.interface";

export function useProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((res: Product[]) => {
      setProducts(res);
    });
  }, []);

  return products;
}

export function useProduct(productId: string): Product | null {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProduct(productId).then((res: Product) => setProduct(res));
  });

  return product;
}