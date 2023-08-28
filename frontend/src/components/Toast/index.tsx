"use client";
import useToast from "@/hooks/useToast";
import * as S from "./styles";

export default function Toast() {
  const { open, setOpen } = useToast();

  return (
    <>
      <S.ToastRoot open={open} onOpenChange={setOpen}>
        <S.ToastTitle>Added product to cart</S.ToastTitle>
      </S.ToastRoot>
      <S.ToastViewport />
    </>
  );
}
