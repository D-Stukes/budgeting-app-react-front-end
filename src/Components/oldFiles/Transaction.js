import { Link } from "react-router-dom";



function Transaction ({ transaction, index }) {
  return (
    <tr>

      <td>
        <a href={transaction/index} target="_blank" rel="no transaction">
          {transaction.item_name}
        </a>
      </td>
      <td>
        <Link to={`/transactions/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Transaction;
