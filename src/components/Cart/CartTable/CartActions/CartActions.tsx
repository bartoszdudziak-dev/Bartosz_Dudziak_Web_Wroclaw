import { useCart } from "@/hooks/useCart";

type CartActionsProps = {
  id: number;
  quantity: number;
};

function CartActions({ id, quantity }: CartActionsProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      removeFromCart(id);
    } else {
      decreaseQuantity(id);
    }
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <>
      <button onClick={handleDecrease} disabled={quantity === 1}>
        ➖
      </button>
      <button onClick={handleIncrease}>➕</button>
      <button onClick={handleRemove}>🗑️</button>
    </>
  );
}

export default CartActions;
