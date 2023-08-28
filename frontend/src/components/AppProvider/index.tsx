import { ReactNode } from "react";
import { CartProvider } from "@/hooks/useCart";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";
import { ApolloWrapper } from "../ApolloWrapper";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/theme/globalStyles";
import { ToastProvider } from "@/hooks/useToast";

type Props = {
  children: ReactNode;
};

export default function AppProvider({ children }: Props) {
  return (
    <ApolloWrapper>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <QueryParamProvider adapter={NextAdapterApp}>
          <ToastProvider>
            <CartProvider>{children}</CartProvider>;
          </ToastProvider>
        </QueryParamProvider>
      </StyledComponentsRegistry>
    </ApolloWrapper>
  );
}
