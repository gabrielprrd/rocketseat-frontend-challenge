"use client";
import Link from "next/link";
import { styled } from "styled-components";

export const Main = styled.main`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;

export const SuccessMessage = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  color: var(--dark-gray);
`;

export const BackToHomepageLink = styled(Link)`
  color: var(--dark-gray);
`;
