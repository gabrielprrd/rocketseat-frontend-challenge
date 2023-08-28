"use client";
import useCart from "@/hooks/useCart";
import * as S from "./styles";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import useClient from "@/hooks/useClient";
import BackLink from "@/components/BackLink";

export default function CartPage() {
  const { products, subtotal } = useCart();
  const { isClient } = useClient();

  if (isClient && products.length === 0) {
    return (
      <S.PageContainer>
        <S.Container>
          <S.EmptyCartMessage>Seu carrinho está vazio.</S.EmptyCartMessage>
        </S.Container>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      {isClient && (
        <S.Container>
          <S.Main>
            <BackLink />
            <S.ContentContainer>
              <div>
                <h1>Seu carrinho</h1>
                <p>
                  Total ({products.length} produtos) <strong>{subtotal}</strong>
                </p>
              </div>
              <ProductList />
            </S.ContentContainer>
          </S.Main>
          <S.CartSummaryContainer>
            <CartSummary />
          </S.CartSummaryContainer>
        </S.Container>
      )}
    </S.PageContainer>
  );
}
