import { CheeseColor } from "../data/cheese-color.enum";
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

export const fetchProductFilterResults = async (
  search?: string,
  color?: CheeseColor
): Promise<Product[]> => {
  let url = `${API_URL}/products/cheese/?`;

  // Negate CheeseColor.ALL from being appended to the URL since 'ALL' is not a color
  if (search && (color === CheeseColor.ALL || !color)) {
    url += `search=${search}`;
  } else if (color && color !== CheeseColor.ALL && !search) {
    url += `color=${color}`;
  } else if (search && color && color !== CheeseColor.ALL) {
    url += `search=${search}&color=${color}`;
  } else {
    return [];
  }

  const res = await fetch(url, {
    method: "GET",
    redirect: "follow",
    headers: {
      accept: "application/json",
    },
  });

  return await res.json();
};
