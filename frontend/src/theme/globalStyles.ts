"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Temporary solution since with server components we can't wrap the application with a theme context */
  :root {
    --background-color:  #f3f5f6;
    --orange-low:  #FFA585;
    --tomato: #DE3838;
    --light-gray: #E9E9F0;
    --gray: #737380;
    --dark-gray: #5d5d6d;
    --blue: #115D8C;
    --success-green: #609966;
  }

  body {
    background-color: var(--background-color);
  }

  button, 
  input {
    font-family: inherit;
  }
`;
