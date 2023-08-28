"use client";
import { devices } from "@/theme/constants";
import { styled } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1rem 1rem 1rem;
  color: var(--dark-gray);
`;

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;

  @media ${devices.md} {
    max-width: 80%;
  }
`;

export const Main = styled.main`
  flex-basis: 250%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CartSummaryContainer = styled.aside`
  height: 100%;
  width: 100%;
`;

export const EmptyCartMessage = styled.h1`
  width: 100%;
  text-align: center;
`;
