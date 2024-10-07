import Product from "./Product";

export default class ProductFilter {
  filter(searchTerm: string, product: Product[]): Product[] {
    const terms = searchTerm.toLowerCase().split(" ");
    return product.filter((product) => {
      const text = `
                ${product.name}
                ${product.description}
                ${Object.values(product.specifications).join(" ")}
                ${product.brand}
            `.toLowerCase();
      return terms.every((term) => text.includes(term));
    });
  }
}
