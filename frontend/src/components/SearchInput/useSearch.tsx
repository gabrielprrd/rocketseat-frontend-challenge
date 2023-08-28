"use client";
import { useRouter } from "next/navigation";
import { MutableRefObject, SyntheticEvent } from "react";

type Ref = MutableRefObject<HTMLInputElement | null>;

export default function useSearch(ref: Ref) {
  const router = useRouter();

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    router.push(`/?q=${ref?.current?.value}`);
  }

  return {
    handleSubmit,
  };
}
