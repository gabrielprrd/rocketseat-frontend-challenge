"use client";
import BackIcon from "public/assets/images/icons/back.svg";
import * as S from "./styles";

export default function BackLink() {
  return (
    <S.BackLink aria-label="Voltar" href="/">
      <BackIcon />
      Voltar
    </S.BackLink>
  );
}
