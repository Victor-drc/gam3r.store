import { StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import HeaderCheckout from "@/src/components/checkout/HeaderCheckout";
import DeliveryForm from "@/src/components/checkout/payment/DeliveryForm";
import PaymentSummary from "@/src/components/checkout/payment/PaymentSummary";
import PaymentMethodSelect from "@/src/components/checkout/payment/PaymentMethodSelect";
import useCart from "@/src/data/hooks/useCart";
import usePayment from "@/src/data/hooks/usePayment";

export default function Payment() {
  const { installment, itemsQuantity, totalCost, fullTotalCost } = useCart();
  const {
    delivery,
    paymentMethod,
    alterDelivery,
    alterPaymentMethod,
    finishCheckout,
  } = usePayment();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderCheckout step="payment" />
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <Text style={styles.titulo}>Forma de Pagamento</Text>
        <PaymentMethodSelect
          paymentMethod={paymentMethod}
          paymentMethodChanged={alterPaymentMethod}
        />

        <Text style={styles.titulo}>Dados da Entrega</Text>
        <DeliveryForm delivery={delivery} deliveryChanged={alterDelivery} />
      </ScrollView>

      <PaymentSummary
        itemsQuantity={itemsQuantity}
        totalCost={totalCost}
        fullTotalCost={fullTotalCost}
        installment={installment}
        finishCheckout={finishCheckout}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E001D",
  },
  containerScroll: {
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
});
