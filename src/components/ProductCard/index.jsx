import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import React from "react";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";

export default function ProductCard({ imageUrl, title, description, link }) {
    return (
        <Link className={classnames(styles.product)} to={link}>
            <div className={classnames("card col", styles.productCard)}>
                <div className={classnames("card__image", styles.productImage)}>
                    <img src={useBaseUrl(imageUrl)} alt={title} title={title} />
                </div>
                <div className="card__body">
                    <h3>{title}</h3>
                    <div>{description}</div>
                </div>
            </div>
        </Link>
    );
}
