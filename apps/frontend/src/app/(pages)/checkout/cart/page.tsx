"use client";
import HeaderCheckout from "@/components/checkout/HeaderCheckout";
import ItemFromCart from "@/components/checkout/cart/ItemFromCart";
import EmptyCart from "@/components/checkout/cart/EmptyCart";
import CartTotal from "@/components/checkout/cart/CartTotal";
import useCart from "@/data/hooks/useCart";

export default function Page() {
  const {
    items,
    itemsQuantity,
    totalCost,
    addItem,
    removeItem,
    removeProduct,
  } = useCart();

  return (
    <div className="flex flex-col gap-5 container">
      <HeaderCheckout step="cart" />
      <div className="flex flex-col gap-4">
        {items.length === 0 && <EmptyCart />}
        {items.map((item: any) => (
          <ItemFromCart
            key={item.product.id}
            item={item}
            addItem={() => addItem(item.product)}
            removeItem={() => removeItem(item.product)}
            removeProduct={() => removeProduct(item.product)}
          />
        ))}
      </div>
      <CartTotal itemsQuantity={itemsQuantity} totalCost={totalCost} />
    </div>
  );
}
