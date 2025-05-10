import LinkButton from "@/components/LinkButton";
import SummaryTable from "@/components/SummaryTable";
import { useCart } from "@/hooks/useCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";

function SummaryPage() {
  const { setItem } = useLocalStorage("items");
  const { items = [] } = useCart();

  const handlePlaceOrder = () => {
    setItem(items);
    window.location.href = "/confirmation";
  };

  return (
    <section>
      <h1>Podsumowanie</h1>

      <LinkButton to="/cart">Wróć do koszyka</LinkButton>

      {items.length === 0 ? (
        <p>Nie znaleziono przedmiotów w koszyku</p>
      ) : (
        <>
          <SummaryTable items={items} />
          <button onClick={handlePlaceOrder}>Złóż zamówienie</button>
        </>
      )}
    </section>
  );
}

export default SummaryPage;
