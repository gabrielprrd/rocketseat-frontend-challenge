import { styled } from "styled-components";

export const AddToCartButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  background-color: var(--blue);
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
