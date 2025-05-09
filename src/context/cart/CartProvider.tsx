import { useReducer, type PropsWithChildren } from "react";
import { cartReducer, initialCartState } from "./cardReducer";
import CartContext from "./CartContext";

function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
