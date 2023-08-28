"use client";
import { devices } from "@/theme/constants";
import { styled } from "styled-components";

export const Main = styled.main`
  padding: 2rem 2rem 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${devices.md} {
    width: 80%;
  }
`;

export const CategoriesAndSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaginationContainer = styled.div`
  align-self: flex-end;
`;

export const NothingFound = styled.p`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
`;
