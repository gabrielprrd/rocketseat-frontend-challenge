"use client";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export default function ProductCardContent({ children }: Props) {
  return <S.ProductCardContent>{children}</S.ProductCardContent>;
}
