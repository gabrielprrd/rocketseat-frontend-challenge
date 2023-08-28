"use client";
import { useQueryParam, withDefault, NumberParam } from "use-query-params";

export default function usePagination() {
  const [page, setPage] = useQueryParam("page", withDefault(NumberParam, 1));

  function handleNextClick() {
    const nextPage = page + 1;
    setPage(nextPage);
  }

  function handleBackClick() {
    const previousPage = page - 1;
    setPage(previousPage);
  }

  function handlePageClick(pageToPush: number) {
    setPage(pageToPush);
  }

  function handleVisuallyHidden(index: number, length: number) {
    if (index === 0) return "(first page)";

    if (index === length - 1) return "(last page)";

    return "page";
  }
  return {
    page,
    handleNextClick,
    handleBackClick,
    handlePageClick,
    handleVisuallyHidden,
  };
}
