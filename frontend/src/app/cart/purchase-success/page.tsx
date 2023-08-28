import * as S from "./styles";

export default function CartPage() {
  return (
    <S.Main>
      <S.SuccessMessage>Compra efetuada com sucesso!</S.SuccessMessage>
      <S.BackToHomepageLink href="/">
        Voltar para página principal
      </S.BackToHomepageLink>
    </S.Main>
  );
}
