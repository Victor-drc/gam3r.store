import Priceable from "./Priceable";
import ProductSpecs from "./ProductSpecs";

export default interface Product extends Priceable {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  rate: number;
  videoReview: string;
  tags: string[];
  specifications: ProductSpecs;
}
