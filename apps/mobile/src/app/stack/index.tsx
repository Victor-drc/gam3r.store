import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { CartProvider } from "@/src/data/context/CartContext";
import { PaymentProvider } from "@/src/data/context/PaymentContext";
import { ProductProvider } from "@/src/data/context/ProductContext";
import Payment from "./Payment";
import ProductDetails from "./ProductDetails";
import Tabs from "../tabs";
import LastPurchases from "./LastPurchases";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function StackPage() {
  return (
    <ProductProvider>
      <CartProvider>
        <PaymentProvider>
          <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator initialRouteName="Tabs">
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{
                  title: "Detalhes do Produto",
                  headerBackTitle: "Voltar",
                  headerShown: true,
                  headerStyle: { backgroundColor: "#0D001E" },
                  headerTintColor: "#FFF",
                }}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
                options={{
                  title: "Detalhes do Pagamento",
                  headerBackTitle: "Voltar",
                  headerShown: true,
                  headerStyle: { backgroundColor: "#0D001E" },
                  headerTintColor: "#FFF",
                }}
              />
              <Stack.Screen
                name="LastPurchases"
                component={LastPurchases}
                options={{
                  title: "Últimas Compras",
                  headerBackTitle: "Voltar",
                  headerShown: true,
                  headerStyle: { backgroundColor: "#0D001E" },
                  headerTintColor: "#FFF",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaymentProvider>
      </CartProvider>
      <StatusBar style="light" />
    </ProductProvider>
  );
}
