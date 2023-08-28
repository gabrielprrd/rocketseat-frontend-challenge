import * as Select from "@radix-ui/react-select";
import * as S from "./styles";
import ChevronDownIcon from "public/assets/images/icons/chevron-down.svg";

import { OPTIONS } from "./constants";
import useSortSelect from "./useSortSelect";

export default function SortProductsSelect() {
  const { selectValue, handleChange } = useSortSelect();

  return (
    <Select.Root
      value={selectValue}
      onValueChange={(value) => handleChange(value)}
    >
      <S.Trigger aria-label="Sort by">
        <Select.Value placeholder="Organizar por " />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </S.Trigger>
      <Select.Portal>
        <S.Content position="popper">
          <S.Viewport>
            <Select.Group>
              {OPTIONS.map((opt, index) => (
                <S.SelectItem value={opt.value} key={index}>
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </S.SelectItem>
              ))}
            </Select.Group>
          </S.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </S.Content>
      </Select.Portal>
    </Select.Root>
  );
}
