"use client";
import HeaderCheckout from "@/components/checkout/HeaderCheckout";
import DeliveryForm from "@/components/checkout/payment/DeliveryForm";
import PaymentSummary from "@/components/checkout/payment/PaymentSummary";
import SelectPaymentMethod from "@/components/checkout/payment/SelectPaymentMethod";
import useCart from "@/data/hooks/useCart";
import usePayment from "@/data/hooks/usePayment";

export default function Page() {
  const { installment, itemsQuantity, totalCost, fullTotalCost } = useCart();
  const {
    delivery,
    paymentMethod,
    alterDelivery,
    alterPaymentMethod,
    finishCheckout,
  } = usePayment();

  return (
    <div className="flex flex-col gap-7 container">
      <HeaderCheckout step="payment" />
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <SelectPaymentMethod
            paymentMethod={paymentMethod}
            paymentMethodChanged={alterPaymentMethod}
          />
          <DeliveryForm delivery={delivery} deliveryChanged={alterDelivery} />
        </div>
        <PaymentSummary
          itemsQuantity={itemsQuantity}
          totalCost={totalCost}
          fullTotalCost={fullTotalCost}
          installment={installment}
          finishCheckout={finishCheckout}
          className="mt-12"
        />
      </div>
    </div>
  );
}
