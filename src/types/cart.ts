import { type Product } from "./product";

export type CartItem = Product & { quantity: number };

export type CartState = {
  items: CartItem[];
};
export type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  isInCart: (id: number) => boolean;
};

export type CartAction =
  | ItemAdded
  | ItemRemoved
  | QuantityIcreased
  | QuantityDecreased;

type ItemAdded = { type: "item/added"; payload: { item: Product } };
type ItemRemoved = { type: "item/removed"; payload: number };
type QuantityIcreased = {
  type: "item/quantity/increased";
  payload: number;
};
type QuantityDecreased = {
  type: "item/quantity/decreased";
  payload: number;
};
