import { LinearGradient } from "expo-linear-gradient";
import { Currency, Product } from "@gstore/core";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReviewRate from "../shared/ReviewRate";
import useCart from "../../data/hooks/useCart";
import useInstallment from "../../data/hooks/useInstallment";
import Colors from "@/src/data/constants/Colors";

export interface ProductItemProps {
  product: Product;
  selectedProduct?: (product: Product) => void;
}

export default function ProductItem(props: ProductItemProps) {
  const { addItem } = useCart();
  const installment = useInstallment(props.product.promotionalPrice);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.product}
        onPress={() => props.selectedProduct?.(props.product)}
      >
        <Image
          src={props.product.image}
          style={styles.image}
          alt="Imagem do Produto"
        />
        <View style={{ flex: 1 }}>
          <View style={styles.reviewContainer}>
            <ReviewRate rate={props.product.rate} />
          </View>
          <Text style={styles.name}>{props.product.name}</Text>
          <Text style={styles.fullPrice}>
            de {Currency.format(props.product.basePrice)}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={{ color: "white" }}>por</Text>
            <Text style={styles.price}>
              {Currency.format(props.product.promotionalPrice)}
            </Text>
          </View>
          <Text style={styles.installment}>
            ou {installment.installmentQuantity}x de{" "}
            {Currency.format(installment.installmentCost)}
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={(e) => {
          e.preventDefault();
          addItem(props.product);
        }}
      >
        <Ionicons name="cart-outline" size={22} style={styles.buttonText} />
        <Text style={styles.buttonText}>Adicionar</Text>
      </Pressable>
      <LinearGradient
        colors={["transparent", "#7811F5", "transparent"]}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        style={styles.bottomMargin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    maxWidth: Dimensions.get("window").width,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  reviewContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  fullPrice: {
    fontSize: 14,
    color: "#AAA",
    textDecorationLine: "line-through",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  price: {
    fontSize: 24,
    color: "#34d399",
    fontWeight: "bold",
  },
  installment: {
    fontSize: 14,
    color: "#FFF",
  },
  button: {
    color: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    alignSelf: "center",
    borderRadius: 9999,
    height: 40,
    paddingHorizontal: 80,
    gap: 8,
  },
  buttonText: {
    color: "#FFF",
  },
  bottomMargin: {
    marginTop: 20,
    height: 2,
    width: Dimensions.get("window").width,
  },
});
