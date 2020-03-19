import React from "react";
import classnames from "classnames";
import styles from "./index.module.css";

export default function UseCaseCard({ title, description, link }) {
    return (
        <div className={classnames("card-demo", styles.root)}>
            <div className="card">
                <div className="card__header">
                    <h3>{title}</h3>
                </div>
                <div className="card__body">
                    <p>{description}</p>
                </div>
                <div className="card__footer">
                    <a className="button button--secondary button--block" href={link}>
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}
