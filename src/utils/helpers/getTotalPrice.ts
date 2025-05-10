import { type CartItem } from "@/types/cart";
import formatPrice from "./formatPrice";

export default function getTotalPrice(items: CartItem[]) {
  const totalPrice = items.reduce((acc, { price, quantity }) => {
    const itemPrice = +formatPrice(
      +formatPrice(+`${price.main}.${price.fractional}`) * quantity
    );

    return acc + +itemPrice;
  }, 0);

  return formatPrice(totalPrice);
}
