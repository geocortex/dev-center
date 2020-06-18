import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

export default function ProductContainer({ children }) {
    return (
        <section className={styles.productsContainer}>
            <div className={clsx(styles.products, "row")}>{children}</div>
        </section>
    );
}
