import { useCart } from "@/hooks/useCart";
import CartRow from "./CartRow";
import { Link } from "react-router";
import "./CartTable.styles.css";

function CartTable() {
  const { items, getTotalPrice } = useCart();

  return (
    <>
      <Link to="/products">
        <button>Wróć do listy produktów</button>
      </Link>

      {items.length === 0 ? (
        <p>Koszyk jest pusty</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th className="cell cell-head">Nazwa</th>
                <th className="cell cell-head">Cena [PLN]</th>
                <th className="cell cell-head">Ilość</th>
                <th className="cell cell-head">Suma [PLN]</th>
                <th className="cell cell-head">Akcje</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <CartRow key={item.id} item={item} />
              ))}
            </tbody>

            <tfoot>
              <tr className="row">
                <th>Suma</th>
                <td></td>
                <td></td>
                <td></td>
                <td className="cell cell-total">{getTotalPrice()} PLN</td>
              </tr>
            </tfoot>
          </table>

          <Link to="/summary">
            <button>Idź do podsumowania</button>
          </Link>
        </>
      )}
    </>
  );
}

export default CartTable;
