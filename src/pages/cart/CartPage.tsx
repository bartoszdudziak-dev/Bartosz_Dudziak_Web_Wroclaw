import CartTable from "@/components/Cart/CartTable";
import LinkButton from "@/components/LinkButton";
import { useCart } from "@/hooks/useCart";

function CartPage() {
  const { items = [] } = useCart();

  return (
    <section>
      <h1>Koszyk</h1>

      <LinkButton to="/products">Wróć do listy produktów</LinkButton>

      {items.length > 0 ? (
        <>
          <CartTable />
          <LinkButton to="/summary">Przejdź do podsumowania</LinkButton>
        </>
      ) : (
        <p>Koszyk jest pusty</p>
      )}
    </section>
  );
}

export default CartPage;
