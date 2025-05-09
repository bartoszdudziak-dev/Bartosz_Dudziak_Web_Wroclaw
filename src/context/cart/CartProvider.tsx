import type { Product } from "@/types/product";
import CartContext from "./CartContext";
import { cartReducer, initialCartState } from "./cardReducer";
import { useReducer, type PropsWithChildren } from "react";

function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const isInCart = (id: number) => state.items.some((item) => item.id === id);

  const addToCart = (product: Product) => {
    dispatch({ type: "item/added", payload: { item: product } });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "item/removed", payload: id });
  };

  const increaseQuantity = (id: number) => {
    dispatch({ type: "item/quantity/increased", payload: id });
  };

  const decreaseQuantity = (id: number) => {
    dispatch({ type: "item/quantity/decreased", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        isInCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
