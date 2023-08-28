"use client";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export default function ProductCardPrice({ children }: Props) {
  return <S.ProductCardPrice>{children}</S.ProductCardPrice>;
}
