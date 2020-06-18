import React from "react";
import styles from "./index.module.css";

export default function UseCaseContainer({ children }) {
    return <div className={styles.root}>{children}</div>;
}
