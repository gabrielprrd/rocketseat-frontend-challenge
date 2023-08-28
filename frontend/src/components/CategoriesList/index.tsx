"use client";
import useCategories from "@/hooks/useCategories";
import useTranslation from "@/hooks/useTranslation";
import { StringParam, useQueryParam, withDefault } from "use-query-params";
import * as S from "./styles";

export default function CategoriesList() {
  const { categories } = useCategories();
  const { t } = useTranslation();
  const [category, setCategory] = useQueryParam(
    "category",
    withDefault(StringParam, undefined)
  );

  function handleCategoryClick(value?: string) {
    setCategory(value, "push");
  }

  return (
    <S.CategoriesList>
      <S.CategoryButton
        onClick={() => handleCategoryClick()}
        $active={!category}
      >
        Todos os produtos
      </S.CategoryButton>
      {!!categories?.length &&
        categories?.map((cat) => (
          <S.CategoryButton
            onClick={() => handleCategoryClick(cat)}
            key={crypto.randomUUID()}
            $active={category === cat}
          >
            {t(cat)}
          </S.CategoryButton>
        ))}
    </S.CategoriesList>
  );
}
