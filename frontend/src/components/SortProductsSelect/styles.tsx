"use client";
import { styled } from "styled-components";
import * as Select from "@radix-ui/react-select";

export const Trigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  border: none;
  padding: 0.3rem;
  background-color: transparent;

  &:hover {
    opacity: 0.8;
  }
`;

export const Content = styled(Select.Content)`
  background-color: white;
  border-radius: 5px;
  padding: 0.3rem;
`;
export const Viewport = styled(Select.Viewport)`
  padding: 0.8rem;
`;

export const SelectItem = styled(Select.SelectItem)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: var(--dark-gray);
`;
