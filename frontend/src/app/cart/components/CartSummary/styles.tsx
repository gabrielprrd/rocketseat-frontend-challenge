"use client";
import Link from "next/link";
import { styled } from "styled-components";

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
`;

export const CartSummaryTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const JustifiedHorizontally = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Shipping = styled(JustifiedHorizontally)`
  margin-bottom: 1rem;
`;

export const Total = styled(JustifiedHorizontally)`
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const BuyButton = styled.button`
  color: white;
  background-color: var(--success-green);
  border: none;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const InfoLinksContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoLink = styled(Link)`
  text-transform: uppercase;
  color: var(--dark-gray);
`;
