"use client";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import * as S from "./styles";

type Props = {
  numOfItems: number;
};

export default function SkeletonGrid({ numOfItems }: Props) {
  return (
    <S.SkeletonGrid>
      {Array.from({ length: numOfItems }).map((_, index) => (
        <ProductCardSkeleton.Root key={index}>
          <ProductCardSkeleton.Image />
          <ProductCardSkeleton.Content>
            <ProductCardSkeleton.Title />
            <ProductCardSkeleton.Price />
          </ProductCardSkeleton.Content>
        </ProductCardSkeleton.Root>
      ))}
    </S.SkeletonGrid>
  );
}
