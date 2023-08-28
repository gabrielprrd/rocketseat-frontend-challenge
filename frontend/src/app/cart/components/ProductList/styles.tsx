"use client";
import Link from "next/link";
import { styled } from "styled-components";

export const ProductCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RemoveProductButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const JustifiedHorizontally = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductTitle = styled(Link)`
  text-decoration: none;
  color: var(--dark-gray);
  font-size: 1.2rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
`;

export const ProductPrice = styled.p`
  font-weight: 600;
`;
