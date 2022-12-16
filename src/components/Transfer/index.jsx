
import CashOut from "../CashOut";
import ButtonPrimary from "../ButtonPrimary";
//img logo
import iconConfig from "../../assets/configuracion.png";
import bank from "../../assets/banco.png";
import paypal from "../../assets/payPal.png";

import styles from "./transfer.module.css";
import clsx from "clsx";

function Transfer({ className }) {



  return (
    <>
      <article className={clsx(className, styles.transferContainer)}>
        <div className={styles.headCashOut}>
          <p>Cash Out</p>
          <figure>
            <img src={iconConfig} width={20} alt="icono de configuración" />
          </figure>
        </div>
        <form action="" className={styles.formCashOut}>
          <CashOut
            idCuenta="****8465"
            tipoCuenta="City Bank"
            icon={bank}
            iconSize="50"
            color="Green"
            
          />
          <CashOut
            idCuenta="troy_gem@yahoo..."
            tipoCuenta="Paypal"
            icon={paypal}
            iconSize="30"
            color="Blue"
            
          />

          <ButtonPrimary />
          <a className={styles.linkCashOut} href="">
            *you can transfer amount easily to any of <br /> the linked accounts
          </a>
        </form>
      </article>
    </>
  );
}

export default Transfer;
