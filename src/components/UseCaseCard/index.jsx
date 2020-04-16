import Link from "@docusaurus/Link";
import React from "react";
import classnames from "classnames";
import styles from "./index.module.css";

export default function UseCaseCard({ title, description, link, linkText }) {
    if(!linkText){
        linkText = "Get Started";
    }

    return (
        <div className={classnames("card-demo", styles.root, !!description ? styles.tall : styles.short)}>
            <div className="card">
                <div className="card__header">
                    <h3>{title}</h3>
                </div>
                <div className="card__body">
                    <p>{description}</p>
                </div>
                <div className="card__footer">
                    <Link
                        className="button button--secondary button--block"
                        to={link}
                    >
                        {linkText}
                    </Link>
                </div>
            </div>
        </div>
    );
}
