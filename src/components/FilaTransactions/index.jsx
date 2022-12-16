import clsx from "clsx";
import styles from "./filaTransactions.module.css";

//img icons
import check from "../../assets/verificacion.svg";

function filaContainers({ 
  icon, 
  iconSize, 
  iconColor,
  btnColor,
  type,
  detailType,
  date,
  time,
  idTransaction,
  amount,
  status,
  expectPayment,

}) {
  return (
    <>
      <tr className={styles.filaContainer}>
        <td>
        <figure className={styles.checkbox}>
          <img src={check} alt="chek" width={18}/>
        </figure>
        </td>


        <td className={styles.transactionIcon}>
          <figure className={iconColor}>
            <img src={icon} alt="icono" width={iconSize} />
          </figure>

          <div>
            <p>{type}</p>
            <p className={styles.detalle}>{detailType}</p>
          </div>
        </td>

        <td className={styles.transactionDate}>
          <div>
            <p>{date} </p>
            <p className={styles.detalleDate}>{time}</p>
          </div>
        </td>
        <td className={styles.transactionId}>{idTransaction}</td>
        <td className={styles.transactionAmount}>${amount} </td>
        <td className={styles.btnState}>
          <span className={clsx(styles.btnEstado, btnColor)}>{status} </span>
        </td>
        <td className={styles.transactionPayment}>{expectPayment} </td>
      </tr>
    </>
  );
}

export default filaContainers;
