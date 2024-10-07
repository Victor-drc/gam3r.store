import { Product } from "@gstore/core";
import Image from "next/image";
import ItemSpecs from "./ItemSpecs";

export interface ItemInfoProps {
  product: Product;
}

export default function ItemInfo(props: ItemInfoProps) {
  const { product } = props;
  return product ? (
    <div className="flex items-center bg-violet-dark rounded-xl p-5">
      <div className="flex-1 relative flex justify-center h-96">
        <Image
          src={product.image!}
          fill
          className="object-cover p-7"
          alt="Imagem do Produto"
        />
      </div>
      <ItemSpecs product={product!} />
    </div>
  ) : null;
}
