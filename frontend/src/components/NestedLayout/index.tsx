"use client";
import { ReactNode } from "react";
import Header from "@/components/Header";
import AppProvider from "@/components/AppProvider";
import Toast from "../Toast";

type Props = {
  children: ReactNode;
};

export default function NestedLayout({ children }: Props) {
  return (
    <AppProvider>
      <Header />
      {children}
      <Toast />
    </AppProvider>
  );
}
