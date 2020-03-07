import classnames from "classnames";
import React from "react";
import styles from "./productList.module.css";

export default function ProductList({ children }) {
    return (
        <section className={styles.productsContainer}>
            <div className={classnames(styles.products, "row")}>{children}</div>
        </section>
    );
}
