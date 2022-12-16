import styles from "./buttonPrimary.module.css";
import clsx from "clsx";

function ButtonPrimary ({
    className
}) {
    return (
        <>
        <button className={clsx(className, styles.buttonPrimary)}>
            Tansfer Amount
        </button>
        </>
    )
}

export default ButtonPrimary;