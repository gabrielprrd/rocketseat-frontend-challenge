import { ACTIONS } from "./actions";
import { Action, Cart, Product } from "./types";

export function reducer(state: Cart, action: Action): Cart {
  switch (action.type) {
    case ACTIONS.add:
      return { ...state, products: [...state.products, action.payload] };
    case ACTIONS.remove:
      return {
        ...state,
        products: state.products.filter((product) => {
          if (product) return product.id !== action.payload?.id;
        }),
      };
    case ACTIONS.clearCart:
      return {
        ...state,
        products: [],
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
