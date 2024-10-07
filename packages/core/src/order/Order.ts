import OrderDelivery from "./OrderDelivery";
import OrderItem from "./OrderItem";
import { PaymentMethod } from "./PaymentMethod";
import { Status } from "./Status";

export default interface Order {
  id: number;
  date: Date;
  items: OrderItem[];
  totalCost: number;
  status: Status;
  paymentMethod: PaymentMethod;
  orderDelivery: OrderDelivery;
}
