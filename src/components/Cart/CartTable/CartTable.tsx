import Table from "@/components/Table";
import { useCart } from "@/hooks/useCart";
import columns from "./cartColumns";

function CartTable() {
  const { items } = useCart();

  return <Table data={items} columns={columns} />;
}

export default CartTable;
