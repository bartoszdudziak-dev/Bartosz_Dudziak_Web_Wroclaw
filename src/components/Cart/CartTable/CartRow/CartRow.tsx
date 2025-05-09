import type { CartItem } from "@/types/cart";
import formatPrice from "@/utils/helpers/formatPrice";
import CartActions from "../CartActions";
import "../CartTable.styles.css";

type CartRowProps = {
  item: CartItem;
};

function CartRow({ item: { id, name, price, quantity } }: CartRowProps) {
  const itemPrice = formatPrice(Number(`${price.main}.${price.fractional}`));
  const totalPrice = formatPrice(Number(itemPrice) * quantity);

  return (
    <tr className="row">
      <td className="cell">{name}</td>
      <td className="cell">{itemPrice}</td>
      <td className="cell">{quantity}</td>
      <td className="cell">{totalPrice}</td>
      <td className="cell cell-actions">
        <CartActions id={id} quantity={quantity} />
      </td>
    </tr>
  );
}

export default CartRow;
