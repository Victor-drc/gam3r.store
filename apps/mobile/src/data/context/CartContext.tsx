import {
  InstallmentCalc,
  Cart,
  CartItem,
  Installment,
  Product,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface CartContextProps {
  items: CartItem[];
  itemsQuantity: number;
  fullTotalCost: number;
  totalCost: number;
  installment: Installment;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  removeProduct: (product: Product) => void;
  cleanCart: () => void;
}

const CartContext = createContext<CartContextProps>({} as any);

export function CartProvider(props: any) {
  const { saveItem, getItem } = useLocalStorage();
  const [cart, setCart] = useState<Cart>(new Cart());

  function addItem(product: Product) {
    alterCart(cart.addItem(product));
  }

  function removeItem(product: Product) {
    alterCart(cart.removeItem(product));
  }

  function removeProduct(product: Product) {
    alterCart(cart.removeProduct(product));
  }

  function cleanCart() {
    alterCart(cart.clear());
  }

  function alterCart(cart: Cart) {
    saveItem("cart", cart.items);
    setCart(cart);
  }

  useEffect(() => {
    getItem("cart").then((savedItems: CartItem[]) => {
      if (savedItems) setCart(new Cart(savedItems));
    });
  }, [getItem]);

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        itemsQuantity: cart.itemQuantity,
        totalCost: cart.totalCost,
        fullTotalCost: cart.fullTotalCost,
        installment: new InstallmentCalc().calc(cart.totalCost),
        addItem,
        removeItem,
        removeProduct,
        cleanCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
