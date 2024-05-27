import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.row}>Type</th>
            <th className={css.row}>Amount</th>
            <th className={css.row}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.data} key={id}>
              <td className={css.type}>{type}</td>
              <td className={css.type}>{amount}</td>
              <td className={css.type}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
