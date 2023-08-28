"use client";
import * as S from "./styles";

type Props = {
  onClick: () => void;
};

export default function AddToCartButton({ onClick }: Props) {
  return (
    <S.AddToCartButton onClick={onClick}>
      Adicionar ao Carrinho
    </S.AddToCartButton>
  );
}
