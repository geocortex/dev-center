import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export default function UseCaseCard({ title, description, link }) {
    return (
        <div className={clsx("card-demo", styles.root)}>
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
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
