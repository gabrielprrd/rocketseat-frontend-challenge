"use client";
import * as S from "./styles";
import BagIcon from "public/assets/images/icons/bag.svg";
import useCart from "@/hooks/useCart";
import useClient from "@/hooks/useClient";

export default function Bag() {
  const { products } = useCart();
  const { isClient } = useClient();

  return (
    <S.Bag href="/cart" aria-label="Go to cart">
      <BagIcon alt="Bag icon" />
      <S.BagItemsCounter>{isClient && products.length}</S.BagItemsCounter>
    </S.Bag>
  );
}
