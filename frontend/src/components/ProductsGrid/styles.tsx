import { devices } from "@/theme/constants";
import { styled } from "styled-components";

export const ProductsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
