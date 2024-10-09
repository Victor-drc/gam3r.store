import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CartItem } from "@gstore/core";
import HeaderCheckout from "@/src/components/checkout/HeaderCheckout";
import ItemFromCart from "../../components/checkout/cart/ItemFromCart";
import EmptyCart from "@/src/components/checkout/cart/EmptyCart";
import Colors from "@/src/data/constants/Colors";
import useCart from "@/src/data/hooks/useCart";

export default function Cart({ navigation }: any) {
  const { items, itemsQuantity, addItem, removeItem, removeProduct } =
    useCart();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderCheckout step="cart" />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, width: "100%" }}
      >
        {items.length === 0 && <EmptyCart />}
        {items.map((item: CartItem) => (
          <ItemFromCart
            key={item.product.id}
            item={item}
            addItem={() => addItem(item.product)}
            removeItem={() => removeItem(item.product)}
            removeProduct={() => removeProduct(item.product)}
          />
        ))}
      </ScrollView>
      {itemsQuantity > 0 && (
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Payment");
          }}
        >
          <Ionicons name="card-outline" size={22} style={styles.buttonText} />
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E001D",
    width: "100%",
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
    marginVertical: 20,
    paddingHorizontal: 50,
    gap: 8,
  },
  buttonText: {
    color: "#FFF",
  },
});
