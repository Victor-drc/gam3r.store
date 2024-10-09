import {
  OrderItem,
  Order,
  OrderDelivery,
  Status,
  PaymentMethod,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
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

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.PIX
  );
  const [delivery, setDelivery] = useState<Partial<OrderDelivery>>({});

  function alterPaymentMethod(paymentMethod: PaymentMethod) {
    saveItem("paymentMethod", paymentMethod);
    setPaymentMethod(paymentMethod);
  }

  function alterDelivery(delivery: Partial<OrderDelivery>) {
    saveItem("delivery", delivery);
    setDelivery(delivery);
  }

  async function finishCheckout() {
    const order: Partial<Order> = {
      date: new Date(),
      paymentMethod,
      totalCost,
      orderDelivery: delivery as OrderDelivery,
      status: Status.RECEBIDO,
      items: items.map(
        (item) =>
          ({
            product: item.product,
            quantity: item.quantity,
            unitPrice: item.product.promotionalPrice,
          }) as OrderItem
      ),
    };

    await httpPost("/order", order);
    cleanCart();
  }

  useEffect(() => {
    getItem("delivery").then((delivery) => {
      setDelivery(delivery ?? {});
    });
    getItem("payment").then((paymentMethod) => {
      setPaymentMethod(paymentMethod ?? PaymentMethod.PIX);
    });
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
