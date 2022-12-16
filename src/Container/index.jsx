import styles from "./container.module.css";
import clsx from 'clsx';

function Container ({
    className,
    children
}) {
    return (
        <>
            <section className={clsx(styles.container,className)}>
                {children}
            </section>
        </>
    )
}

export default Container;