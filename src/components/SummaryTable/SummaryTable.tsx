import type { CartItem } from "@/types/cart";
import Table from "@/components/Table";
import summaryColumns from "./summaryColumns";

type SummaryTableProps = {
  items: CartItem[];
};

function SummaryTable({ items }: SummaryTableProps) {
  return <Table columns={summaryColumns} data={items} />;
}

export default SummaryTable;
