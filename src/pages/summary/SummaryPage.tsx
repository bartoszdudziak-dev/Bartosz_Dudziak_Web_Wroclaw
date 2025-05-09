import LinkButton from "@/components/LinkButton";
import SummaryTable from "@/components/SummaryTable";
import { useCart } from "@/hooks/useCart";

function SummaryPage() {
  const { items = [] } = useCart();

  return (
    <section>
      <h1>Podsumowanie</h1>

      <LinkButton to="/cart">Wróć do koszyka</LinkButton>

      {items.length === 0 ? (
        <p>Nie znaleziono przedmiotów w koszyku</p>
      ) : (
        <>
          <SummaryTable items={items} />
          <LinkButton to="/">Złóż zamówienie</LinkButton>
        </>
      )}
    </section>
  );
}

export default SummaryPage;
