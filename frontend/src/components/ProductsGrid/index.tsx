"use client";
import { ProductCard } from "@/components/ProductCard";
import { centsToReais } from "@/utils/centsToPrice";
import Separator from "../Separator";
import * as S from "./styles";

type Product = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price_in_cents: number;
};

type Props = {
  products: Product[];
};

export function ProductsGrid({ products }: Props) {
  return (
    <S.ProductsGrid>
      {products.map((product) => (
        <ProductCard.Root
          key={product.id}
          href={`/products/${product.id}`}
          aria-label={product.name}
        >
          <ProductCard.Image
            src={product.image_url}
            alt={product.description}
          />
          <ProductCard.Content>
            <ProductCard.Title>{product.name}</ProductCard.Title>
            <Separator />
            <ProductCard.Price>
              {centsToReais(product.price_in_cents)}
            </ProductCard.Price>
          </ProductCard.Content>
        </ProductCard.Root>
      ))}
    </S.ProductsGrid>
  );
}
