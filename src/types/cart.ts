import { type Product } from "./product";

export type CartItem = Product & { quantity: number };

export type CartState = {
  items: CartItem[];
};
export type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export type CartAction =
  | ItemAdded
  | ItemRemoved
  | QuantityIcreased
  | QuantityDecreased;

type ItemAdded = { type: "item/added"; payload: { item: Product } };
type ItemRemoved = { type: "item/removed"; payload: { id: number } };
type QuantityIcreased = {
  type: "item/quantity/increased";
  payload: { id: number };
};
type QuantityDecreased = {
  type: "item/quantity/decreased";
  payload: { id: number };
};
