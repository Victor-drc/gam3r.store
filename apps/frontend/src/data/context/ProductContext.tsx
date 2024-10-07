"use client";
import { createContext, useCallback, useEffect, useState } from "react";
import { Product } from "@gstore/core";
import { ProductFilter } from "@gstore/core/src/product";
import useAPI from "../hooks/useAPI";

export interface ProductContextProps {
  products: Product[];
  search: string;
  setSearch: (search: string) => void;
  findById: (id: number) => Product | null;
}

const ProductContext = createContext<ProductContextProps>({} as any);

export function ProductProvider(props: any) {
  const { httpGet } = useAPI();
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = useCallback(async () => {
    const products = await httpGet("/product");
    setProducts(products ?? []);
  }, [httpGet]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <ProductContext.Provider
      value={{
        search,
        get products() {
          if (!search) return products;
          return new ProductFilter().filter(search, products);
        },
        setSearch,
        findById: (id: number) =>
          products.find((product) => product.id === id) ?? null,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
