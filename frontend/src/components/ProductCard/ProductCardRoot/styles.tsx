import Link from "next/link";
import styled from "styled-components";

export const ProductCardRoot = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 0.6em;
  background-color: white;
  text-decoration: none;
  color: var(--dark-gray);
  transition: transform 0.2s;

  &:hover {
    transform: translate(0, -0.5rem);
  }
`;
