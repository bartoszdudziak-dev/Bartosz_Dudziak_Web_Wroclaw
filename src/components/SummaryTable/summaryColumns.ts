import type { CartItem } from "@/types/cart";
import type { Column } from "../Table";
import formatPrice from "@/utils/helpers/formatPrice";
import getTotalPrice from "@/utils/helpers/getTotalPrice";

const columns: Column<CartItem>[] = [
  { header: "Nazwa", accessor: ({ name }) => name, footer: () => "Razem" },

  {
    header: "Cena [PLN]",
    accessor: ({ price }) => formatPrice(+`${price.main}.${price.fractional}`),
  },

  {
    header: "Ilość",
    accessor: ({ quantity }) => quantity,
  },

  {
    header: "Suma [PLN]",
    accessor: ({ quantity, price }) => {
      return formatPrice(
        +formatPrice(+`${price.main}.${price.fractional}`) * quantity
      );
    },
    footer: (items) => getTotalPrice(items),
  },
];

export default columns;
