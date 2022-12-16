import { useState } from "react";
import verificacion from "../../assets/verificacion.svg";
import styles from "./cashOut.module.css";
import clsx from "clsx";


function CashOut({ 
  className,
  idCuenta, 
  tipoCuenta, 
  icon, 
  color, 
  iconSize,
  
}) {
  const [activo, setActivo] = useState(false);


    return (
    <>
      <button 
        className={clsx(styles.cashOut, className)}
        type="button" 
        onClick={()=> setActivo(!activo)}
        >
        <figure className={color}>
          <img src={icon} alt="icono banco" width={iconSize} />
          {/* como hacer para que me habilite una sola opción? */}
          <div className={clsx(styles.circleVerifi, {[styles.activeOption]: !activo})}>  
            <img src={verificacion} alt="icono check" width={10} />
          </div>
        </figure>
        <div className={styles.cashOutDescription}>
          <span>{idCuenta} </span>
          <p>{tipoCuenta} </p>
        </div>
      </button>
    </>
  );
}

export default CashOut;
