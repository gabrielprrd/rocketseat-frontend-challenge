export type OptionParams = {
  sortField: string;
  sortOrder: "asc" | "desc";
};

export type Option = {
  label: string;
  value: string;
  params: OptionParams;
};
