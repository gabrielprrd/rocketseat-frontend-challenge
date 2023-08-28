import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: var(--light-gray);
  border-radius: 10px;
`;

export const Input = styled.input`
  border: none;
  height: 100%;
  background-color: transparent;
  width: 100%;
  padding: 0.6rem;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.6rem;

  &:hover {
    opacity: 0.5;
  }
`;
