"use client";
import * as S from "./styles";
import SearchIcon from "public/assets/images/icons/search.svg";
import { useId, useRef } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Label from "@radix-ui/react-label";
import useSearch from "./useSearch";

export default function SearchInput() {
  const ref = useRef<HTMLInputElement | null>(null);
  const id = useId();
  const { handleSubmit } = useSearch(ref);

  return (
    <S.Form onSubmit={(e) => handleSubmit(e)}>
      <VisuallyHidden.Root>
        <Label.Root htmlFor={id}>Search products</Label.Root>
      </VisuallyHidden.Root>
      <S.Input
        type="search"
        id={id}
        ref={ref}
        placeholder="Procurando por algo específico?"
      />
      <S.SubmitButton type="submit" aria-label="Search">
        <SearchIcon alt="Lens icon" />
      </S.SubmitButton>
    </S.Form>
  );
}
