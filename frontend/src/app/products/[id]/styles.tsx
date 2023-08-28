"use client";
import { devices } from "@/theme/constants";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: var(--dark-gray);
  height: 90vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;

  @media ${devices.md} {
    max-width: 80%;
  }
`;

export const BacklinkContainer = styled.div`
  align-self: flex-start;
`;
