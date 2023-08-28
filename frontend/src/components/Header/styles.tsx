import { devices } from "@/theme/constants";
import styled from "styled-components";

export const Header = styled.header`
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;

  @media ${devices.md} {
    padding: 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${devices.md} {
    max-width: 80%;
  }
`;

export const Logo = styled.a`
  text-decoration: none;
  color: var(--dark-gray);
  font-weight: 400;
  line-height: 150%;
  font-size: 1.5rem;

  @media ${devices.md} {
    font-size: 3rem;
  }
`;

export const InputAndShoppingCart = styled.div`
  display: flex;
  gap: 1rem;
`;
