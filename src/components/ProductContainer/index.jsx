import classnames from "classnames";
import React from "react";
import styles from "./productContainer.module.css";

export default function ProductContainer({ children }) {
    return (
        <section className={styles.productsContainer}>
            <div className={classnames(styles.products, "row")}>{children}</div>
        </section>
    );
}
