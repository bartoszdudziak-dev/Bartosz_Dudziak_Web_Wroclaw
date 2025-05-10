import type { CartContextType } from "@/types/cart";
import { createContext } from "react";

const CartContext = createContext<CartContextType | undefined>(undefined);

export default CartContext;
