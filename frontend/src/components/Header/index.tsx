"use client";
import * as S from "./styles";
import SearchInput from "@/components/SearchInput";
import Bag from "@/components/Bag";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.Logo href="/" className={sairaStencilOne.className}>
          caputeeno
        </S.Logo>
        <S.InputAndShoppingCart>
          <SearchInput />
          <Bag />
        </S.InputAndShoppingCart>
      </S.Container>
    </S.Header>
  );
}
