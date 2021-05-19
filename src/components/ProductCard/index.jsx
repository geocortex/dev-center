import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";

export default function ProductCard({ imageUrl, title, description, link }) {
    return (
        <Link className={styles.product} to={link}>
            <div className={clsx("card col", styles.productCard)}>
                <div className={clsx("card__image", styles.productImage)}>
                    <img src={useBaseUrl(imageUrl)} alt={title} title={title} />
                </div>
                <div className="card__body">
                    <h3>
                        <Translate>{title}</Translate>
                    </h3>
                    <div>
                        <Translate>{description}</Translate>
                    </div>
                </div>
            </div>
        </Link>
    );
}
