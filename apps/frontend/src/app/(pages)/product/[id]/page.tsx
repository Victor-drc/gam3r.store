import ItemBuyBanner from "@/components/product/ItemBuyBanner";
import ItemInfo from "@/components/product/ItemInfo";
import ItemNotFind from "@/components/product/ItemNotFind";
import ItemTitle from "@/components/product/ItemTitle";
import PriceMeter from "@/components/product/PriceMeter";
import ProReview from "@/components/product/ProReview";
import UsersReview from "@/components/product/UsersReview";
import products from "@gstore/core/src/constants/products";

export default function ProductPage(props: any) {
  const id = +props.params.id;
  const product = products.find((product) => product.id == id);
  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ItemTitle product={product} />
        <ItemInfo product={product} />
        <ItemBuyBanner product={product} />
        <PriceMeter product={product} />
      </div>
      <UsersReview product={product} />
      <ProReview product={product} />
    </div>
  ) : (
    <ItemNotFind />
  );
}
