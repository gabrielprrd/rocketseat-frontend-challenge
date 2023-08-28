"use client";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export default function ProductCardRoot({ children }: Props) {
  return <S.ProductCardSkeletonRoot>{children}</S.ProductCardSkeletonRoot>;
}
