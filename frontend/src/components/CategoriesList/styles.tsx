"use client";
import { styled } from "styled-components";

export const CategoriesList = styled.div`
  display: flex;
  gap: 1rem;
`;

type CategoryButtonProps = {
  $active?: boolean;
};

export const CategoryButton = styled.button<CategoryButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  color: ${(props) => (props.$active ? "black" : "var(--dark-gray)")};
  border-bottom: ${(props) =>
    props.$active ? "3px solid var(--orange-low)" : "none"};
  text-transform: uppercase;
  line-height: 150%;
`;

export const PaginationContainer = styled.div`
  align-self: flex-end;
`;

export const NothingFound = styled.p`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
`;
