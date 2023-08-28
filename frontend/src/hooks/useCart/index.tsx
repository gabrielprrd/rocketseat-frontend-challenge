"use client";
import { centsToReais } from "@/utils/centsToPrice";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import useLocalStorage from "../useLocalStorage";
import { ACTIONS } from "./actions";
import { reducer } from "./reducer";
import { Product } from "./types";

const defaultInitialState: { products: Product[] } = {
  products: [],
};

type CartContext = {
  addProduct: (payload: Product) => void;
  removeProduct: (id: Product) => void;
  clearCart: () => void;
  products: (Product | undefined)[];
  subtotal: string;
  shipping: string;
  total: string;
};

const CartContext = createContext<CartContext>({} as CartContext);

const DEFAULT_SHIPPING_COST = 4000;
const MINIMUM_FOR_FREE_SHIPPING = 90000;

export default function useCart() {
  return useContext(CartContext);
}

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [value, setValue] = useLocalStorage("products");
  const [state, dispatch] = useReducer(
    reducer,
    value?.products?.length > 0 ? value : defaultInitialState
  );

  useMemo(() => state, [state]);

  useEffect(() => {
    setValue(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function addProduct(payload: Product) {
    dispatch({ type: ACTIONS.add, payload });
  }

  function removeProduct(payload: Product) {
    dispatch({ type: ACTIONS.remove, payload });
  }

  function clearCart() {
    dispatch({ type: ACTIONS.clearCart });
  }

  const sortedProducts = state.products.sort((a, b) =>
    a!.id.localeCompare(b!.id)
  );

  const subtotalInCents = state.products
    .map((p) => p!.price_in_cents)
    .reduce((acc: number, current: number) => acc + current, 0);

  const shippingInCents =
    subtotalInCents > MINIMUM_FOR_FREE_SHIPPING ? 0 : DEFAULT_SHIPPING_COST;

  const subtotal = centsToReais(subtotalInCents);
  const shipping = centsToReais(shippingInCents);

  const total = centsToReais(subtotalInCents + shippingInCents);

  return (
    <CartContext.Provider
      value={{
        addProduct,
        clearCart,
        removeProduct,
        products: sortedProducts,
        subtotal,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
