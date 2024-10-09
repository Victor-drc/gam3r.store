import { PaymentMethod } from "@gstore/core";
import { View, Text, Pressable, StyleSheet } from "react-native";

export interface PaymentMethodSelectProps {
  paymentMethod?: PaymentMethod;
  paymentMethodChanged?: (value: PaymentMethod) => void;
  className?: string;
}

export default function PaymentMethodSelect(props: PaymentMethodSelectProps) {
  function renderItem(label: string, paymentMethod: PaymentMethod) {
    const selected = props.paymentMethod === paymentMethod;
    return (
      <Pressable
        key={paymentMethod}
        style={styles.optionContainer}
        onPress={() => props.paymentMethodChanged?.(paymentMethod)}
      >
        <View style={styles.selectorOption}>
          {selected && <View style={styles.selection} />}
        </View>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {renderItem("Pagamento no PIX", PaymentMethod.PIX)}
      {renderItem("Boleto Bancário", PaymentMethod.BOLETO)}
      {renderItem("Cartão de Crédito", PaymentMethod.CARTAO)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  selectorOption: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8247E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selection: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#8247E5",
  },
  text: {
    fontSize: 16,
    color: "#FFF",
  },
});
