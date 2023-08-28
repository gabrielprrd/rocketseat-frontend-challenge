"use client";
import { OPTIONS } from "./constants";
import { StringParam, useQueryParams } from "use-query-params";
import { useEffect, useState } from "react";

export default function useSortSelect() {
  const [selectValue, setSelectValue] = useState<string | undefined>();
  const [query, setQuery] = useQueryParams({
    sortOrder: StringParam,
    sortField: StringParam,
  });

  function handleChange(value: string) {
    const option = OPTIONS.find((opt) => opt.value === value);
    setQuery({
      sortField: option?.params.sortField,
      sortOrder: option?.params.sortOrder,
    });
  }

  useEffect(() => {
    const option = OPTIONS.find((opt) => Object.is(opt.params, query));
    setSelectValue(option?.value);
  }, [query]);

  return { selectValue, handleChange };
}
