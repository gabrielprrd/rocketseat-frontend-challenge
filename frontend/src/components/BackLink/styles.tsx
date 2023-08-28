import Link from "next/link";
import styled from "styled-components";

export const BackLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--dark-gray);

  &:hover {
    text-decoration: underline;
  }
`;
