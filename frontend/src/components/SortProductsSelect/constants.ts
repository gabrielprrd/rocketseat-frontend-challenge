import { Option } from "./types";

export const OPTIONS: Option[] = [
  {
    label: "Novidades",
    value: "created_at_desc",
    params: { sortField: "created_at", sortOrder: "desc" },
  },
  {
    label: "Preço: Maior - menor",
    value: "price_desc",
    params: { sortField: "price_in_cents", sortOrder: "desc" },
  },
  {
    label: "Preço: Menor - maior",
    value: "price_asc",
    params: { sortField: "price_in_cents", sortOrder: "asc" },
  },
  {
    label: "Mais vendidos",
    value: "sales_desc",
    params: { sortField: "sales", sortOrder: "desc" },
  },
];
