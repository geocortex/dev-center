import React from "react";
import classnames from "classnames";
import styles from "./useCaseContainer.module.css";

export default function UseCaseContainer({ children }) {
    return <div className={classnames(styles.root)}>{children}</div>;
}
