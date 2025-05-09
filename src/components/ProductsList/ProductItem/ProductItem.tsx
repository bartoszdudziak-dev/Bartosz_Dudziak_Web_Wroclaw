import type { Product } from "@/types/product";

type ProductItemProps = { product: Product };

function ProductItem({ product: { id, name, price } }: ProductItemProps) {
  return <li>{name}</li>;
}

export default ProductItem;
