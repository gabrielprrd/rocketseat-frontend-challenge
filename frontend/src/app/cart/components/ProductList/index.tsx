"use client";
import useCart from "@/hooks/useCart";
import { CartProductCard as ProductCard } from "../CartProductCard";
import TrashIcon from "public/assets/images/icons/trash-can.svg";
import * as S from "./styles";
import { centsToReais } from "@/utils/centsToPrice";
import ProductQuantitySelect from "../ProductQuantitySelect";
import { aggregateProducts } from "@/utils/aggregateProducts";
import { Product } from "@/hooks/useCart/types";

export default function ProductList() {
  const { products, removeProduct, addProduct } = useCart();

  const aggregatedProducts = aggregateProducts(products);

  function handleQuantityChange(product: Product, value: string) {
    removeProduct(product);

    for (let i = 0; i < +value; i++) {
      addProduct(product);
    }
  }

  return (
    <S.ProductCardList>
      {aggregatedProducts.map((product) => (
        <ProductCard.Root key={crypto.randomUUID()}>
          <ProductCard.Image src={product.image_url} alt={product.name} />
          <ProductCard.Info>
            <S.JustifiedHorizontally>
              <S.ProductTitle href={`/products/${product.id}`}>
                {product.name}
              </S.ProductTitle>
              <S.RemoveProductButton onClick={() => removeProduct(product)}>
                <TrashIcon />
              </S.RemoveProductButton>
            </S.JustifiedHorizontally>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            <S.JustifiedHorizontally>
              <ProductQuantitySelect
                value={product.quantity as unknown as string}
                onValueChange={(value) => handleQuantityChange(product, value)}
              />
              <S.ProductPrice>
                {centsToReais(product.price_in_cents)}
              </S.ProductPrice>
            </S.JustifiedHorizontally>
          </ProductCard.Info>
        </ProductCard.Root>
      ))}
    </S.ProductCardList>
  );
}
