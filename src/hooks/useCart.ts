import CartContext from "@/context/cart/CartContext";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("CartContext was used outside of CartProvider");

  return context;
}
