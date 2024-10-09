import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderCheckoutProps {
  step: "cart" | "payment";
}

export default function HeaderCheckout(props: HeaderCheckoutProps) {
  function renderItem(step: "cart" | "payment", index: number, tittle: string) {
    return (
      <View style={styles.containerStep}>
        <View
          style={
            props.step === step ? styles.activeCircle : styles.inactiveCircle
          }
        >
          <Text
            style={
              props.step === step
                ? styles.activeCircleText
                : styles.inactiveCircleText
            }
          >
            {index}
          </Text>
        </View>
        <Text
          style={props.step === step ? styles.textActive : styles.textInactive}
        >
          {tittle}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderItem("cart", 1, "Carrinho")}
      <View style={styles.separator} />
      {renderItem("payment", 2, "Pagamento")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  containerStep: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FF57A0",
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircleText: {
    color: "white",
    fontSize: 12,
  },
  inactiveCircleText: {
    color: "#000",
    fontSize: 12,
  },
  textActive: {
    color: "#FF57A0",
    marginLeft: 10,
    fontWeight: "400",
  },
  textInactive: {
    color: "#888",
    marginLeft: 10,
    fontWeight: "400",
  },
  separator: {
    width: 40,
    height: 1,
    backgroundColor: "#888",
    marginHorizontal: 15,
  },
});
