"use client";
import * as RadixToast from "@radix-ui/react-toast";
import { styled, keyframes } from "styled-components";

export const ToastViewport = styled(RadixToast.Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 2rem;
`;

const hide = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;

const slideIn = keyframes`
  from { transform: translateX(calc(100% + 2rem)) }
  to { transform: translateX(0) }
`;

const swipeOut = keyframes`
  from { transform: translateX(var(--radix-toast-swipe-end-x)) }
  to { transform: translateX(calc(100% + 2rem)) }
`;

export const ToastRoot = styled(RadixToast.Root)`
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: relative;
  padding: 1rem;
  border-radius: 5px;
  list-style-type: none;
  border-right: 10px solid var(--success-green);

  &[data-state="open"] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)
  }
  &[data-state="closed"] {
    animation: ${hide} 100ms ease-in
  }
  &[data-swipe="move"] {
    transform: translateX(var(--radix-toast-swipe-move-x))
  }
  &[data-swipe="cancel"] {
    transform: translateX(0)
    transition: transform 200ms ease-out
  }
  &[data-swipe="end"] {
    animation: ${swipeOut} 100ms ease-out
  }
`;

export const ToastTitle = styled(RadixToast.Title)`
  font-weight: 500;
`;
