"use client";
import * as S from "./styles";

type Props = {
  src: string;
  alt: string;
};

export default function CartProductCardImage({ src, alt }: Props) {
  return (
    <S.CartProductCardImage src={src} alt={alt} width={300} height={300} />
  );
}
