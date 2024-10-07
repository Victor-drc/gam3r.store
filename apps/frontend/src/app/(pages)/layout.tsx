import Page from "@/components/template/Page";
import { CartProvider } from "@/data/context/CartContext";
import { PaymentProvider } from "@/data/context/PaymentContext";
import { ProductProvider } from "@/data/context/ProductContext";

export default function Layout(props: any) {
  return (
    <ProductProvider>
      <CartProvider>
        <PaymentProvider>
          <Page>{props.children}</Page>
        </PaymentProvider>
      </CartProvider>
    </ProductProvider>
  );
}
