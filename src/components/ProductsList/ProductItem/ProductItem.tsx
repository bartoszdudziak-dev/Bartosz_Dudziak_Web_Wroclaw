import type { Product } from "@/types/product";
import "./ProductItem.style.css";
import { useCart } from "@/hooks/useCart";

type ProductItemProps = { product: Product };

function ProductItem({ product: { id, name, price } }: ProductItemProps) {
  const { addToCart, removeFromCart, isInCart } = useCart();

  const handleClick = () => {
    if (isInCart(id)) {
      removeFromCart(id);
    } else {
      addToCart({ id, name, price });
    }
  };

  return (
    <li className="product-item">
      <div>{name}</div>
      <div>
        {price.main}.{price.fractional} PLN
      </div>
      <div>
        <button onClick={handleClick}>
          {isInCart(id) ? "Usuń z koszyka" : "Dodaj do koszyka"}
        </button>
      </div>
    </li>
  );
}

export default ProductItem;
