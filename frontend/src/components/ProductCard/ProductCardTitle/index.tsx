"use client";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export default function ProductCardTitle({ children }: Props) {
  return <S.ProductCardTitle>{children}</S.ProductCardTitle>;
}
