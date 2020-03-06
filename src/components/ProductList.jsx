import classnames from "classnames";
import React from "react";
import styles from "./productList.module.css";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
    return (
        <section className={styles.productsContainer}>
            <div className={classnames(styles.products, "row")}>
                {products.map((props, idx) => (
                    <ProductCard key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}
