"use client";
import { devices } from "@/theme/constants";
import { styled } from "styled-components";

export const CartProductCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.6em;
  background-color: white;
  color: var(--dark-gray);

  @media ${devices.md} {
    flex-direction: row;
  }
`;
