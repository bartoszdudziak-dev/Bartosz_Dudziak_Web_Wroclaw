import { useReducer, type PropsWithChildren } from "react";
import { cartReducer, initialCartState } from "./cardReducer";
import CartContext from "./CartContext";
import type { Product } from "@/types/product";

function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const isInCart = (id: number) => state.items.some((item) => item.id === id);

  const addToCart = (product: Product) => {
    dispatch({ type: "item/added", payload: { item: product } });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "item/removed", payload: id });
  };

  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, removeFromCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
