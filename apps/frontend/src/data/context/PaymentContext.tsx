"use client";
import {
  OrderItem,
  Order,
  OrderDelivery,
  Status,
  PaymentMethod,
  CartItem,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";
import useCart from "../hooks/useCart";
import useAPI from "../hooks/useAPI";

export interface PaymentContextProps {
  paymentMethod: PaymentMethod;
  delivery: Partial<OrderDelivery>;
  alterPaymentMethod: (paymentMethod: PaymentMethod) => void;
  alterDelivery: (delivery: Partial<OrderDelivery>) => void;
  finishCheckout: () => void;
}

const PaymentContext = createContext<PaymentContextProps>({} as any);

export function PaymentProvider(props: any) {
  const { httpPost } = useAPI();
  const { items, totalCost, cleanCart } = useCart();
  const { saveItem, getItem } = useLocalStorage();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.PIX
  );
  const [delivery, setdelivery] = useState<Partial<OrderDelivery>>({});

  function alterPaymentMethod(paymentMethod: PaymentMethod) {
    saveItem("paymentMethod", paymentMethod);
    setPaymentMethod(paymentMethod);
  }

  function alterDelivery(delivery: Partial<OrderDelivery>) {
    saveItem("delivery", delivery);
    setdelivery(delivery);
  }

  async function finishCheckout() {
    const order: Partial<Order> = {
      date: new Date(),
      paymentMethod,
      totalCost,
      orderDelivery: delivery as OrderDelivery,
      status: Status.RECEBIDO,
      items: items.map(
        (item: CartItem) =>
          ({
            product: item.product,
            quantity: item.quantity,
            unitPrice: item.product.promotionalPrice,
          }) as OrderItem
      ),
    };

    await httpPost("/order", order);
    cleanCart();
    router.push("/checkout/success");
  }

  useEffect(() => {
    const delivery = getItem("delivery");
    const paymentMethod = getItem("paymentMethod");
    if (delivery) setdelivery(delivery);
    if (paymentMethod) setPaymentMethod(paymentMethod);
  }, [getItem]);

  return (
    <PaymentContext.Provider
      value={{
        delivery,
        paymentMethod,
        alterDelivery,
        alterPaymentMethod,
        finishCheckout,
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
}

export default PaymentContext;
