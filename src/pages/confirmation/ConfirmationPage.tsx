import SummaryTable from "@/components/SummaryTable";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { CartItem } from "@/types/cart";

function ConfirmationPage() {
  const { getItem } = useLocalStorage("items");

  const handleClick = () => {
    window.location.href = "/products";
  };

  const items: CartItem[] = getItem();

  if (!items || items.length === 0) window.location.href = "/products";

  return (
    <section>
      <h1>Potwierdzenie zamówienia</h1>

      <SummaryTable items={items} />

      <button onClick={handleClick}>Złóż nowe zamówienie</button>
    </section>
  );
}

export default ConfirmationPage;
