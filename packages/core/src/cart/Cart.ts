import CartItem from "./CartItem";
import { Product } from "../product";

export default class Cart {
  constructor(readonly items: CartItem[] = []) {}

  addItem(product: Product): Cart {
    const item = this.itemByProduct(product);
    if (item) {
      return new Cart(this.alterItemQuantity(this.items, product, 1));
    } else {
      return new Cart([...this.items, { product, quantity: 1 }]);
    }
  }

  removeItem(product: Product) {
    const item = this.itemByProduct(product);
    if (!item) return this;

    return new Cart(this.alterItemQuantity(this.items, product, -1));
  }

  removeProduct(product: Product) {
    const item = this.itemByProduct(product);
    if (!item) return this;

    return new Cart(
      this.items.filter((item) => item.product.id !== product.id)
    );
  }

  clear() {
    return new Cart();
  }

  get itemQuantity() {
    return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }

  get totalCost() {
    return this.items
      .map((item) => item.product.promotionalPrice * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  get fullTotalCost() {
    return this.items
      .map((item) => item.product.basePrice * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  private itemByProduct(product: Product): CartItem | undefined {
    return this.items.find((item) => item.product.id === product.id);
  }

  private alterItemQuantity(
    items: CartItem[],
    product: Product,
    diff: number
  ): CartItem[] {
    return items
      .map((i) =>
        i.product.id === product.id ? { ...i, quantity: i.quantity + diff } : i
      )
      .filter((i) => i.quantity > 0);
  }
}
