"use client";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export default function ProductCardSkeletonContent({ children }: Props) {
  return (
    <S.ProductCardSkeletonContent>{children}</S.ProductCardSkeletonContent>
  );
}
