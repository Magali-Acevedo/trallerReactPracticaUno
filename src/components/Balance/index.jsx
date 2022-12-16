import styles from "./balance.module.css";
import clsx from "clsx";
//componentes
import Account from "../Account";
//img icon
import iconBalanceOne from "../../assets/iconoWalletOne.png";
import iconBalanceTwo from "../../assets/iconoWalletTwo.png";

function Balance({ className }) {
  return (
    <>
      <article className={clsx(styles.balance, className)}>
        <div className={styles.head}>
          <span>My Balance</span>
          <select>
            <option value="">Select range</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last-3-days">Last 3 days</option>
          </select>
        </div>
        <div className={styles.accounts}>
          <Account
            icon={iconBalanceOne}
            colorIcon="Blue"
            colorCurrency="Green"
            title="Available Balance"
            price="47,523"
            currency="USD"
            percent="↑2.0"
          />

          <Account
            icon={iconBalanceTwo}
            colorIcon="Pink"
            colorCurrency="Pink"
            title="Pending"
            price="865.00"
            currency="USD"
            percent="↓-4.0"
            active
          />
        </div>
      </article>
    </>
  );
}

export default Balance;
