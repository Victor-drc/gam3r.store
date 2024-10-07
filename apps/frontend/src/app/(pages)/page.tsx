import ItemList from "@/components/product/ItemList";
import ProductFilter from "@/components/product/ProductFilter";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col container gap-5 py-10">
      <ProductFilter />
      <ItemList />
    </div>
  );
}
