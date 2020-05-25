import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

function SvgArrow() {
    return (
        <svg
            width="20"
            height="80"
            viewBox="0 0 20 80"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <marker
                    className={styles.marker}
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="2.5"
                    markerHeight="2.5"
                    orient="auto-start-reverse"
                >
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
            </defs>
            <line
                className={styles.line}
                strokeDashoffset="-2.5"
                strokeDasharray="10,5"
                x1="10"
                y1="10"
                x2="10"
                y2="60"
                markerEnd="url(#arrow)"
            />
        </svg>
    );
}

function IconContainer({ iconUrl, iconLabel }) {
    return (
        <div className={styles.iconContainer} onClick>
            <img src={useBaseUrl(iconUrl)} />
            <h2 className={styles.iconLabel}>{iconLabel}</h2>
        </div>
    );
}

export default function ExtensibilitySpectrum({ product }) {
    return (
        <div className={styles.container}>
            <IconContainer
                iconUrl="img/spectrum-config.png"
                iconLabel="Application Configuration"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-workflow.png"
                iconLabel="Geocortex Workflow"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-workflow.png"
                iconLabel="Custom Workflow Activities and Form Elements"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-code.png"
                iconLabel="Custom Code"
            />
        </div>
    );
}
