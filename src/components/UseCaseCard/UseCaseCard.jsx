import React from "react";
import classnames from "classnames";
import styles from "./useCaseCard.module.css";

export default function UseCaseCard({ title, description, link }) {
    return (
        <div class={classnames("card-demo", styles.root)}>
            <div class="card">
                <div class="card__header">
                    <h3>{title}</h3>
                </div>
                <div class="card__body">
                    <p>{description}</p>
                </div>
                <div class="card__footer">
                    <button class="button button--secondary button--block">
                        <a href={link}>Get Started</a>
                    </button>
                </div>
            </div>
        </div>
    );
}
