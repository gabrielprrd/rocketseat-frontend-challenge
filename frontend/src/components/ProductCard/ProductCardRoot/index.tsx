"use client";
import { LinkProps } from "next/link";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
} & LinkProps;

export default function ProductCardRoot({ children, ...rest }: Props) {
  return <S.ProductCardRoot {...rest}>{children}</S.ProductCardRoot>;
}
