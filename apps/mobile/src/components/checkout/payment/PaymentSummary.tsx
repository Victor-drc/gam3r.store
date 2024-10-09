import { Ionicons } from "@expo/vector-icons";
import { Currency, Installment } from "@gstore/core";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "@/src/data/constants/Colors";

export interface PaymentSummaryProps {
  itemsQuantity: number;
  totalCost: number;
  fullTotalCost: number;
  installment: Installment;
  finishCheckout: () => void;
  className?: string;
}

export default function PaymentSummary(props: PaymentSummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.itemCost}>
        <Text style={{ color: "white" }}>
          Valor total ({props.itemsQuantity} itens):{" "}
        </Text>
        <Text style={styles.itemCostHighlight}>
          {Currency.format(props.totalCost)}
        </Text>
      </View>
      <Pressable style={styles.button} onPress={() => props.finishCheckout?.()}>
        <Ionicons name="cart-outline" size={22} style={styles.buttonText} />
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    paddingHorizontal: 60,
    paddingVertical: 20,
    backgroundColor: "#241440",
    borderRadius: 10,
    gap: 10,
  },
  itemCost: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemCostHighlight: {
    color: "#34d399",
    fontWeight: "bold",
  },
  button: {
    color: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    borderRadius: 9999,
    height: 40,
    paddingHorizontal: 45,
    gap: 8,
  },
  buttonText: {
    color: "#FFF",
  },
});
