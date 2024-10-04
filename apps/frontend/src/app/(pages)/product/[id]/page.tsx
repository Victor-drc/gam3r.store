import products from "@/core/constants/products";
import ItemNotFind from "@/components/product/ItemNotFind";
import ItemTitle from "@/components/product/ItemTitle";
import ItemInfo from "@/components/product/ItemInfo";
import ItemBuyBanner from "@/components/product/ItemBuyBanner";
export default function ProductPage(props: any) {
  const id = +props.params.id;
  const product = products.find((product) => product.id == id);
  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ItemTitle product={product} />
        <ItemInfo product={product} />
        <ItemBuyBanner product={product} />
      </div>
    </div>
  ) : (
    <ItemNotFind />
  );
}
