import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import ProductSpecs from "../../components/product/ProductSpecs";
import ItemBuyBanner from "../../components/product/ItemBuyBanner";
import Colors from "@/src/data/constants/Colors";
import PriceMeter from "@/src/components/product/PriceMeter";
import UsersReview from "@/src/components/product/UsersReview";

export default function ProductDetails(props: any) {
  const { product } = props.route.params;
  if (!product) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productInfo}>
        <Text style={styles.tittle}>{product.name}</Text>
        <View style={styles.imageBackground}>
          <Image src={product.image} style={styles.image} />
        </View>
        <ProductSpecs product={product} />
      </View>
      <ItemBuyBanner product={product} />
      <PriceMeter product={product} />
      <UsersReview product={product} />
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    gap: 10,
    backgroundColor: Colors.BG_PRIMARY,
  },
  productInfo: {
    backgroundColor: Colors.BG_SECONDARY,
    padding: 20,
    gap: 20,
  },
  tittle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  imageBackground: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    padding: 20,
    height: 230,
  },
  image: {
    width: "80%",
    height: "100%",
    borderRadius: 10,
  },
});
