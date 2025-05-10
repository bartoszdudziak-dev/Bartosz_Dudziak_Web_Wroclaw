import type { CartItem, CartAction, CartState } from "@/types/cart";

const initialCartState: CartState = {
  items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "item/added": {
      const item: CartItem = { ...action.payload.item, quantity: 1 };

      return { ...state, items: [...state.items, item] };
    }

    case "item/removed": {
      const id = action.payload;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== id),
      };
    }

    case "item/quantity/increased": {
      const id = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }

    case "item/quantity/decreased": {
      const id = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    }

    default:
      throw new Error("Unknown action type");
  }
}

export { initialCartState, cartReducer };
