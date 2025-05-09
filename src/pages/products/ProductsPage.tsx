import type { ProductsListType } from "@/types/product";
import productsApiUrl from "@/utils/consts/productsApiUrl";
import ProdcutList from "@/components/ProductsList";
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

  const hadNoProducts = !products || products.length === 0;

  return (
    <section>
      <h1>Strona Produktów</h1>

      {isLoading && <p>Ładowanie...</p>}

      {error && <p>{error.message}</p>}

      {hadNoProducts && <p>Nie znaleziono produktów</p>}

      {products && !isLoading && !error && <ProdcutList products={products} />}

      <LinkButton to="/cart" disabled={items.length === 0}>
        Przejdź do koszyka
      </LinkButton>
    </section>
  );
}

export default ProductsPage;
