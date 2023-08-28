"use client";
import ChevronRight from "public/assets/images/icons/chevron-right.svg";
import ChevronLeft from "public/assets/images/icons/chevron-left.svg";
import * as S from "./styles";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import usePagination from "@/hooks/usePagination";

type Props = {
  pages: number;
};

export default function Pagination({ pages }: Props) {
  const {
    page: current,
    handleBackClick,
    handleNextClick,
    handlePageClick,
    handleVisuallyHidden,
  } = usePagination();
  const isFirst = current === 1;
  const isLast = current === pages;

  return (
    <nav aria-label="pagination">
      <S.ButtonsList>
        {Array.from({ length: pages }).map((_, index) => (
          <S.ListItem key={crypto.randomUUID()}>
            <S.Button
              onClick={() => handlePageClick(index + 1)}
              $active={index + 1 === current}
              aria-current={index + 1 === current ? "page" : null}
            >
              <>
                <VisuallyHidden.Root>
                  {handleVisuallyHidden(index, pages)}
                </VisuallyHidden.Root>
                {index + 1}
              </>
            </S.Button>
          </S.ListItem>
        ))}
        <S.ListItem>
          <S.Button
            disabled={isFirst}
            onClick={handleBackClick}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </S.Button>
        </S.ListItem>
        <S.ListItem>
          <S.Button
            disabled={isLast}
            onClick={handleNextClick}
            aria-label="Next page"
          >
            <ChevronRight />
          </S.Button>
        </S.ListItem>
      </S.ButtonsList>
    </nav>
  );
}
