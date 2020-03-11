import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import React from "react";
import styles from "./productCard.module.css";
import Link from "@docusaurus/Link";

export default function ProductCard({ imageUrl, title, description, link }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <Link className={classnames(styles.product)} to={link}>
            <div className={classnames("card col", styles.productCard)}>
                <div className={classnames("card__image", styles.productImage)}>
                    <img src={imgUrl} alt={title} title={title} />
                </div>
                <div className="card__body">
                    <h4>{title}</h4>
                    <small>{description}</small>
                </div>
            </div>
        </Link>
    );
}
