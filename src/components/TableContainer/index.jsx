import clsx from "clsx";
import styles from "./tableContainer.module.css";

function TableContainer({ children, className }) {
  return (
    <>
      <table className={clsx(className, styles.tableContainer)}>
      
        <tr className={styles.tableTitle}>
          <td></td>
          <td>Type</td>
          <td>Date ⇵</td>
          <td>Transaction ID ⇵</td>
          <td>Amount ⇵</td>
          <td>Status ⇵</td>
          <td>Expect Payment</td>
        </tr>
        
      
        {children}
       
      
      </table>
    </>
  );
}
export default TableContainer;
