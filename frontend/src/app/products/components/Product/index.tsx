"use client";
import useCart from "@/hooks/useCart";
import useToast from "@/hooks/useToast";
import useTranslation from "@/hooks/useTranslation";
import { centsToReais } from "@/utils/centsToPrice";
import AddToCartButton from "../AddToCartButton";
import * as S from "./styles";

type Product = {
  id: string;
  name: string;
  image_url: string;
  description: string;
  price_in_cents: number;
  category: string;
};

type Props = {
  product: Product;
};

export default function Product({ product }: Props) {
  const { name, image_url, description, price_in_cents, category } = product;
  const { addProduct } = useCart();
  const { t } = useTranslation();
  const { openToast } = useToast();

  function addToCart(product: Product) {
    addProduct(product);
    openToast();
  }

  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <S.ProductImage src={image_url} alt={name} fill />
      </S.ImageContainer>

      <S.ProductInfoContainer>
        <div>
          <S.ProductCategory href={`categories/${category}`}>
            {t(category)}
          </S.ProductCategory>

          <S.ProductName>{name}</S.ProductName>
          <S.ProductPrice>{centsToReais(price_in_cents)}</S.ProductPrice>
          <S.ShippingMessage>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.*
          </S.ShippingMessage>
          <S.ProductDescriptionContainer>
            <S.ProductDescriptionTitle>Descrição</S.ProductDescriptionTitle>
            <S.ProductDescription>{description}</S.ProductDescription>
          </S.ProductDescriptionContainer>
        </div>

        <AddToCartButton onClick={() => addToCart(product)} />
      </S.ProductInfoContainer>
    </S.ProductContainer>
  );
}
