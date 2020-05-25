import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

function SvgArrow() {
    return (
        <svg
            className={styles.svgDashedLine}
            width="25"
            height="80"
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

// TODO - centering is slightly off?

function IconContainer({ iconUrl, iconLabel }) {
    const circleSize = 2.5;
    return (
        <div className={styles.iconContainer} onClick>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx={`${circleSize}em`}
                    cy={`${circleSize}em`}
                    r={`${circleSize}em`}
                    fill="#f0f5f9"
                    stroke="lightgray"
                />
                <image
                    x={`${circleSize / 2}em`}
                    y={`${circleSize / 2}em`}
                    width={`${circleSize}em`}
                    height={`${circleSize}em`}
                    xlinkHref={useBaseUrl(iconUrl)}
                />
            </svg>
            <h2 className={styles.iconLabel}>{iconLabel}</h2>
        </div>
    );
}

// TODO - move fill styling out of individual SVG files

export default function ExtensibilitySpectrum({ product }) {
    return (
        <div className={styles.container}>
            <IconContainer
                iconUrl="img/spectrum-config.svg"
                iconLabel="Application Configuration"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-workflow.svg"
                iconLabel="Geocortex Workflow"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-workflow.svg"
                iconLabel="Custom Activities and Form Elements"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-code.svg"
                iconLabel="Custom Code"
            />
        </div>
    );
}
