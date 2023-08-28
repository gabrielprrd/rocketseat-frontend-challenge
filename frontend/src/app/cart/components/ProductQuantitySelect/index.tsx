import * as Select from "@radix-ui/react-select";
import * as S from "./styles";
import ChevronDownIcon from "public/assets/images/icons/chevron-down.svg";

type Props = Select.SelectProps;

export default function ProductQuantitySelect({ value, onValueChange }: Props) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <S.Trigger aria-label="Quantity">
        <Select.Value placeholder="Selecione a quantidade" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </S.Trigger>
      <Select.Portal>
        <S.Content>
          <Select.ScrollUpButton>
            <ChevronDownIcon />
          </Select.ScrollUpButton>
          <S.Viewport>
            <Select.Group>
              {Array.from({ length: 20 }).map((_, index) => (
                <S.SelectItem
                  value={(index + 1) as unknown as string}
                  key={index}
                >
                  <Select.ItemText>{index + 1}</Select.ItemText>
                  <S.ItemIndicator>
                    <S.ItemIndicatorBall />
                  </S.ItemIndicator>
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
