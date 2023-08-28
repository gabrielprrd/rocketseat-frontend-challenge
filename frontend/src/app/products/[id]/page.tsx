import { getRSCClient } from "@/lib/apolloRSCClient";
import { gql } from "@apollo/client";
import BackLink from "../../../components/BackLink";
import Product from "../components/Product";
import * as S from "./styles";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const GET_PRODUCT = gql`
    query Product {
      Product(id: "${params.id}") {
        name
        id
        image_url
        description
        price_in_cents
        category
      }
    }
  `;

  const { data, error } = await getRSCClient().query({
    query: GET_PRODUCT,
  });

  if (error)
    return (
      <S.Main>
        <S.Container>
          <p>{error.message}</p>
        </S.Container>
      </S.Main>
    );

  return (
    <S.Main>
      <S.Container>
        <S.BacklinkContainer>
          <BackLink />
        </S.BacklinkContainer>
        <Product product={data.Product} />
      </S.Container>
    </S.Main>
  );
}
