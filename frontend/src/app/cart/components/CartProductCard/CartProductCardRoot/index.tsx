"use client";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export default function CartProductCardRoot({ children, ...rest }: Props) {
  return <S.CartProductCardRoot {...rest}>{children}</S.CartProductCardRoot>;
}
