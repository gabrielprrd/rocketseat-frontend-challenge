import { Product } from "@/hooks/useCart/types";

type AggregatedProduct = Product & {
  quantity: number;
};

type ProductMap = {
  [id: string]: AggregatedProduct;
};

export function aggregateProducts(products: any) {
  const productMap: ProductMap = {};

  for (const product of products) {
    if (product.id in productMap) {
      productMap[product.id].quantity++;
    } else {
      productMap[product.id] = { ...product, quantity: 1 };
    }
  }

  const aggregatedProducts = Object.values(productMap);

  return aggregatedProducts as AggregatedProduct[];
}
