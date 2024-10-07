"use client";
import useProduct from "@/data/hooks/useProduct";
import ItemProduct from "./ItemProduct";
import ItemNotFind from "./ItemNotFind";

export default function ItemList() {
  const { products } = useProduct();
  return products.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <ItemProduct product={product} key={product.id} />
      ))}
    </div>
  ) : (
    <ItemNotFind withoutBackBtn />
  );
}
