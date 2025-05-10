import type { ProductsListType } from "@/types/product";
import ProductItem from "./ProductItem";
import "./ProductsList.styles.css";

type ProdcutsListProps = { products: ProductsListType };

function ProdcutsList({ products }: ProdcutsListProps) {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProdcutsList;
