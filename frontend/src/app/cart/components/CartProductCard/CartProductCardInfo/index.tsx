"use client";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export default function CartProductCardInfo({ children }: Props) {
  return <S.CartProductCardInfo>{children}</S.CartProductCardInfo>;
}
