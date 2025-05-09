import "./Table.styles.css";

export type Column<T> = {
  header: string;
  accessor: (row: T) => React.ReactNode;
  footer?: (data: T[]) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

function Table<T>({ columns, data }: TableProps<T>) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i} className="cell cell-head">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="row">
            {columns.map((col, i) => (
              <td key={i} className="cell">
                {col.accessor(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

      {columns.some((column) => column.footer) && (
        <tfoot>
          <tr className="row">
            {columns.map((col, idx) => (
              <td className="cell cell-footer" key={idx}>
                {col.footer ? col.footer(data) : null}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
}

export default Table;
