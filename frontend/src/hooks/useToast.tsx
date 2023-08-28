"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
type ToastContext = {
  openToast: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
import { Provider } from "@radix-ui/react-toast";

const ToastContext = createContext<ToastContext>({} as ToastContext);

export default function useToast() {
  return useContext(ToastContext);
}

type Props = {
  children: ReactNode;
};

export function ToastProvider({ children }: Props) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function openToast() {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  }

  return (
    <Provider swipeDirection="right">
      <ToastContext.Provider
        value={{
          openToast,
          open,
          setOpen,
        }}
      >
        {children}
      </ToastContext.Provider>
    </Provider>
  );
}
