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

function IconContainer({ iconUrl, iconLabel, linkUrl }) {
    const circleSize = 2.5;
    return (
        <a className={styles.iconContainer} href={linkUrl}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle
                    class={styles.iconCircle}
                    cx={`${circleSize}em`}
                    cy={`${circleSize}em`}
                    r={`${circleSize}em`}
                />
                <use
                    class={styles.icon}
                    x={`${circleSize / 2}em`}
                    y={`${circleSize / 2}em`}
                    width={`${circleSize}em`}
                    height={`${circleSize}em`}
                    href={`${useBaseUrl(iconUrl)}#icon`}
                ></use>
            </svg>
            <h2 className={styles.iconLabel}>{iconLabel}</h2>
        </a>
    );
}

// TODO - should these be links at all? should they be links to headers? Should they be links to external content or throw you right in?

export default function ExtensibilitySpectrum({ product }) {
    return (
        <div className={styles.container}>
            <IconContainer
                iconUrl="img/spectrum-config.svg"
                iconLabel="Application Configuration"
                linkUrl="key-concepts"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-workflow.svg"
                iconLabel="Geocortex Workflow"
                linkUrl="https://docs.geocortex.com/workflow/latest/help/Default.htm"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-workflow.svg"
                iconLabel="Custom Activities and Form Elements"
                linkUrl="../workflow/overview"
            />
            <SvgArrow />
            <IconContainer
                iconUrl="img/spectrum-code.svg"
                iconLabel="Custom Code"
                linkUrl="sdk-overview"
            />
        </div>
    );
}
