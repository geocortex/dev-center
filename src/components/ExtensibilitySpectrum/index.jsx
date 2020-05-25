import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

function SvgLineWithArrow() {
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
            <svg xmlns="http://www.w3.org/2000/svg">
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

export default function ExtensibilitySpectrum({
    configLink,
    workflowLink,
    customWorkflowLink,
    customCodeLink,
}) {
    return (
        <div className={styles.container}>
            <IconContainer
                iconUrl="img/spectrum-config.svg"
                iconLabel="Application Configuration"
                linkUrl={configLink}
            />
            <SvgLineWithArrow />
            <IconContainer
                iconUrl="img/spectrum-workflow.svg"
                iconLabel="Geocortex Workflow"
                linkUrl={workflowLink}
            />
            <SvgLineWithArrow />
            <IconContainer
                iconUrl="img/spectrum-workflow.svg"
                iconLabel="Custom Activities and Form Elements"
                linkUrl={customWorkflowLink}
            />
            <SvgLineWithArrow />
            <IconContainer
                iconUrl="img/spectrum-code.svg"
                iconLabel="Custom Code"
                linkUrl={customCodeLink}
            />
        </div>
    );
}
