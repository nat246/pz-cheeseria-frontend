import { API_URL } from "../data/constants";
import { Product } from "../data/product.interface";

export const fetchProducts = async (): Promise<Product[]> => {
  const url = `${API_URL}/products/cheese/all`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  return await res.json();
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const url = `${API_URL}/products/cheese/${id}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  return await res.json();
};
