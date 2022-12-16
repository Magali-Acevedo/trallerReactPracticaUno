import clsx from "clsx";
import styles from "../Account/account.module.css";


function Account({
  title,
  price,
  currency,
  percent,
  icon,
  colorIcon,
  colorCurrency,
  active = false,
}) {
  return (
    <>
      <div className={clsx(styles.account, {
        [styles.active]: active,
        })}>
        <figure className={colorIcon}>
          <img src={icon} alt="Logo" />
        </figure>

        <div className={styles.accountDetails}>
          <p>{title}</p>
          <div>
            <span className={styles.price}>$ {price}</span>
            <span className={styles.currency}>{currency}</span>
          </div>
          <a href="">view Transactions</a>
        </div>

        <div className={clsx(styles.percent, colorCurrency)}>{percent}</div>
      </div>
    </>
  );
}

export default Account;
