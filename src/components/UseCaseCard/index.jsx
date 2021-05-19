import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import styles from "./index.module.css";

export default function UseCaseCard({ title, description, link }) {
    return (
        <div className={clsx("card-demo", styles.root)}>
            <div className="card">
                <div className="card__header">
                    <h3>
                        <Translate>{title}</Translate>
                    </h3>
                </div>
                <div className="card__body">
                    <p>
                        <Translate>{description}</Translate>
                    </p>
                </div>
                <div className="card__footer">
                    <Link
                        className="button button--secondary button--block"
                        to={link}
                    >
                        <Translate>lang-get-started</Translate>
                    </Link>
                </div>
            </div>
        </div>
    );
}
