import SummaryTable from "@/components/SummaryTable";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { CartItem } from "@/types/cart";
import baseName from "@/utils/consts/baseName";

const productsUrl = `${baseName}/products`;

function ConfirmationPage() {
  const { getItem } = useLocalStorage("items");

  const handleClick = () => {
    window.location.href = productsUrl;
  };

  const items: CartItem[] = getItem();

  if (!items || items.length === 0) window.location.href = productsUrl;

  return (
    <section>
      <h1>Potwierdzenie zamówienia</h1>

      <SummaryTable items={items} />

      <button onClick={handleClick}>Złóż nowe zamówienie</button>
    </section>
  );
}

export default ConfirmationPage;
