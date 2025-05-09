import type { Product } from "@/types/product";
import ProductItem from "./ProductItem";

type ProdcutListProps = { products: Product[] };

function ProdcutList({ products }: ProdcutListProps) {
  if (!products) return null;

  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProdcutList;
