"use client";
import { styled } from "styled-components";
import * as Select from "@radix-ui/react-select";

export const Trigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 0.3rem;
  background-color: var(--light-gray);

  &:hover {
    opacity: 0.8;
  }
`;

export const Content = styled(Select.Content)`
  background-color: var(--light-gray);
  border-radius: 5px;
  padding: 0.3rem;
`;
export const Viewport = styled(Select.Viewport)`
  padding: 0.3rem;
`;

export const SelectItem = styled(Select.SelectItem)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ItemIndicator = styled(Select.ItemIndicator)`
  display: inline-flex;
  align-items: center;
`;

export const ItemIndicatorBall = styled.div`
  display: inline-block;
  background-color: var(--success-green);
  border-radius: 100%;
  height: 0.5rem;
  width: 0.5rem;
`;
