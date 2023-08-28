"use client";
import * as S from "./styles";

type Props = {
  src: string;
  alt: string;
};

export default function ProductCardImage({ src, alt }: Props) {
  return (
    <S.ProductCardImageContainer>
      <S.ProductCardImage src={src} alt={alt} width={300} height={300} />
    </S.ProductCardImageContainer>
  );
}
