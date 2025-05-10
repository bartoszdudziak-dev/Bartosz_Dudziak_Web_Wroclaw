import type { ProductsListType } from "@/types/product";
import productsApiUrl from "@/utils/consts/productsApiUrl";
import ProdcutsList from "@/components/ProductsList";
import LinkButton from "@/components/LinkButton";
import { useFetch } from "@/hooks/useFetch";
import { useCart } from "@/hooks/useCart";

function ProductsPage() {
  const { items = [] } = useCart();

  const {
    data: products,
    isLoading,
    error,
  } = useFetch<ProductsListType>(productsApiUrl);

  return (
    <section>
      <h1>Strona Produktów</h1>

      {isLoading && <p>Ładowanie...</p>}

      {!isLoading && error && <p>{error.message}</p>}

      {!isLoading && !error && (!products || products.length === 0) && (
        <p>Nie znaleziono produktów</p>
      )}

      {!isLoading && !error && products && products.length > 0 && (
        <ProdcutsList products={products} />
      )}

      <LinkButton to="/cart" disabled={items.length === 0}>
        Przejdź do koszyka
      </LinkButton>
    </section>
  );
}

export default ProductsPage;
