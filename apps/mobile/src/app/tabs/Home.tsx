import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import ItemProduct from "../../components/product/ItemProduct";
import useProduct from "@/src/data/hooks/useProduct";

export default function Home({ navigation }: any) {
  const { products } = useProduct();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, width: "100%" }}
      >
        {products.map((product) => (
          <ItemProduct
            key={product.id}
            product={product}
            selectedProduct={() => {
              navigation.navigate("ProductDetails", { product });
            }}
          />
        ))}
      </ScrollView>
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
});
