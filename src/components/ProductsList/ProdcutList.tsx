import type { ProductsListType } from "@/types/product";
import ProductItem from "./ProductItem";
import "./ProductList.style.css";

type ProdcutListProps = { products: ProductsListType };

function ProdcutList({ products }: ProdcutListProps) {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProdcutList;
