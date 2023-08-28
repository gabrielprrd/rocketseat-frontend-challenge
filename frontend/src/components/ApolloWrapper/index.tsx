"use client";
import { makeSSRClient } from "@/lib/apolloSSRClient";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeSSRClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
