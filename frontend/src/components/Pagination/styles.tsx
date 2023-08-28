"use client";
import { ReactComponentElement } from "react";
import { styled } from "styled-components";

export const ListItem = styled.li`
  list-style-type: none;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: 0.1rem;
`;

type ButtonProps = {
  $active?: boolean;
  "aria-current"?: "page" | null;
};

export const Button = styled.button<ButtonProps>`
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  height: 100%;
  width: 100%;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$active ? "var(--background-color)" : "var(--light-gray)"};
  border: ${(props) =>
    props.$active ? "1px solid var(--orange-low)" : "none"};
  color: ${(props) =>
    props.$active ? "var(--orange-low)" : "var(--dark-gray)"};
`;
