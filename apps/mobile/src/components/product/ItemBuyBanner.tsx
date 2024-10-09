import { Ionicons } from "@expo/vector-icons";
import { Currency, Product } from "@gstore/core";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "@/src/data/constants/Colors";
import useCart from "../../data/hooks/useCart";
import useInstallment from "../../data/hooks/useInstallment";

export interface ItemBuyBannerProps {
  product: Product;
}

export default function ItemBuyBanner(props: ItemBuyBannerProps) {
  const { product } = props;
  const { addItem } = useCart();
  const installment = useInstallment(product.promotionalPrice);

  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            borderRightWidth: 3,
            borderRightColor: Colors.PRIMARY,
          }}
        >
          <Text style={styles.fullCost}>de R$ {product?.basePrice}</Text>
          <View style={styles.promotionalPrice}>
            <Text style={styles.cost}>por</Text>
            <Text style={styles.costHighlight}>
              {Currency.format(product?.promotionalPrice)}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.cost}>
            até {installment.installmentQuantity}x de
          </Text>
          <Text style={styles.cost}>
            {Currency.format(installment.installmentCost)}
          </Text>
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Pressable
          onPress={() => addItem(product)}
          style={{ ...styles.button, backgroundColor: Colors.PRIMARY }}
        >
          <Ionicons style={styles.buttonText} name="cart-outline" size={20} />
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            ...styles.button,
            backgroundColor: Colors.SECONDARY,
          }}
        >
          <Ionicons style={styles.buttonText} name="card-outline" size={20} />
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 30,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fullCost: {
    textDecorationLine: "line-through",
    color: "#C4C4C4",
  },
  promotionalPrice: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  cost: {
    fontSize: 16,
    color: "white",
  },
  costHighlight: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.TEXT_HIGHLIGHT_1,
  },
  button: {
    color: "#FFF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 9999,
    height: 35,
    paddingHorizontal: 80,
    gap: 8,
  },
  buttonText: {
    color: "#FFF",
  },
});
