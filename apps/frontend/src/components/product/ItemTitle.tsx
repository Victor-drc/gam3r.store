import { Product } from "@gstore/core";

export interface ItemTitleProps {
  product: Product;
}

export default function ItemTitle(props: ItemTitleProps) {
  const { product } = props;
  return (
    <div className="flex flex-col">
      <div className="text-2xl">{product?.name}</div>
      <div className="font-light text-zinc-400">{product?.description}</div>
    </div>
  );
}
