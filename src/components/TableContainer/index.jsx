import clsx from "clsx";
import styles from "./tableContainer.module.css";

function TableContainer({ children, className }) {
  return (
    <>
      <section className={clsx(className, styles.tableContainer)}>
        <thead>
        <tr className={styles.tableTitle}>
          <td></td>
          <td>Type</td>
          <td>Date ⇵</td>
          <td>Transaction ID ⇵</td>
          <td>Amount ⇵</td>
          <td>Status ⇵</td>
          <td>Expect Payment</td>
        </tr>
        </thead>
        <tbody>
        {children}
        </tbody>
      
      </section>
    </>
  );
}
export default TableContainer;
