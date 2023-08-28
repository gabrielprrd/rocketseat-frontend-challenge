"use client";
import CategoriesList from "@/components/CategoriesList";
import Pagination from "@/components/Pagination";
import { ProductsGrid } from "@/components/ProductsGrid";
import SkeletonList from "@/components/SkeletonGrid";
import SortProductsSelect from "@/components/SortProductsSelect";
import usePagination from "@/hooks/usePagination";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { StringParam, useQueryParams } from "use-query-params";
import * as S from "./styles";

const PER_PAGE = 12;

const GET_PRODUCTS = gql`
  query Products($page: Int, $category: String, $q: String, $sortField: String, $sortOrder: String) {
    allProducts(page: $page, perPage: ${PER_PAGE}, sortField: $sortField, sortOrder: $sortOrder, filter: { category: $category, q: $q }) {
      name
      id
      image_url
      description
      price_in_cents
      category
    }
    _allProductsMeta(filter: { category: $category, q: $q }) {
      count,
    }
  }
`;

export default function Home() {
  const [query, setQuery] = useQueryParams({
    q: StringParam,
    category: StringParam,
    sortOrder: StringParam,
    sortField: StringParam,
  });
  const { q, category, sortOrder, sortField } = query;
  const { page } = usePagination();
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { category, page: page - 1, q, sortField, sortOrder },
  });

  if (loading) {
    return (
      <S.Main>
        <S.Container>
          <S.CategoriesAndSortContainer>
            <CategoriesList />
            <SortProductsSelect />
          </S.CategoriesAndSortContainer>
          <SkeletonList numOfItems={PER_PAGE} />;
        </S.Container>
      </S.Main>
    );
  }

  if (error) {
    return (
      <S.Main>
        <S.Container>
          <p>{error.message}</p>
        </S.Container>
      </S.Main>
    );
  }

  const pages = Math.floor(data._allProductsMeta.count / PER_PAGE);

  return (
    <S.Main>
      <S.Container>
        <S.CategoriesAndSortContainer>
          <CategoriesList />
          <SortProductsSelect />
        </S.CategoriesAndSortContainer>

        {!!data.allProducts.length ? (
          <>
            <S.PaginationContainer>
              <Pagination pages={pages} />
            </S.PaginationContainer>
            <ProductsGrid products={data.allProducts} />

            <S.PaginationContainer>
              <Pagination pages={pages} />
            </S.PaginationContainer>
          </>
        ) : (
          <S.NothingFound>Nenhum produto encontrado</S.NothingFound>
        )}
      </S.Container>
    </S.Main>
  );
}
