"use client";

import Separator from "@/components/Separator";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import * as S from "./styles";

export default function CartSummary() {
  const { subtotal, shipping, total, clearCart } = useCart();
  const router = useRouter();

  function finishPurchase() {
    setTimeout(() => {
      // TODO: maybe add a loading spinner or something like that
      router.push("/cart/purchase-success");
    }, 2000);
    clearCart();
  }

  return (
    <S.CartSummary>
      <div>
        <S.CartSummaryTitle>Resumo do pedido</S.CartSummaryTitle>
        <S.JustifiedHorizontally>
          <p>Subtotal de produtos</p>
          <p>{subtotal}</p>
        </S.JustifiedHorizontally>

        <S.Shipping>
          <p>Entrega</p>
          <p>{shipping}</p>
        </S.Shipping>
        <Separator />
        <S.Total>
          <p>Total</p>
          <p>{total}</p>
        </S.Total>
        <S.BuyButton onClick={finishPurchase}>Finalizar compra</S.BuyButton>
      </div>

      <S.InfoLinksContainer>
        <S.InfoLink href="#">Ajuda</S.InfoLink>
        <S.InfoLink href="#">Reembolsos</S.InfoLink>
        <S.InfoLink href="#">Entregas e frete</S.InfoLink>
        <S.InfoLink href="#">Trocas e devoluções</S.InfoLink>
      </S.InfoLinksContainer>
    </S.CartSummary>
  );
}
