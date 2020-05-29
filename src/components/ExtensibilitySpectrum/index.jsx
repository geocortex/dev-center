import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

function AppConfigSvg() {
    return (
        <>
            <path fill="#fff" d="M68.4 89.2h151v110.2h-151z" />
            <path
                className={styles.svgFillBlue}
                d="M219.4 202.7h-151c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3h151c1.8 0 3.3 1.5 3.3 3.3v110.2c0 1.8-1.5 3.3-3.3 3.3zm-147.7-6.6h144.4V92.5H71.7v103.6z"
            />
            <path
                className={styles.svgFillBlue}
                d="M218.4 112.4h-150c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h150c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3z"
            />
            <g>
                <path
                    className={styles.svgFillBlue}
                    d="M191.5 111.1c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v18.6c0 1.8-1.5 3.3-3.3 3.3z"
                />
            </g>
            <g>
                <path
                    className={styles.svgFillBlue}
                    d="M141.8535 153.36022l5.42124-3.76464 19.6788 28.3383-5.42124 3.76464z"
                />
                <path
                    className={styles.svgFillBlue}
                    d="M129.4 170.3l-3.9-46.2 42 19.7z"
                />
            </g>
        </>
    );
}

function WorkflowSvg() {
    return (
        <path
            className={styles.svgFillBlue}
            d="M15 7H9V1h6v6zM7 17H1v6h6v-6zm8 0H9v6h6v-6zm8 0h-6v6h6v-6zm-10-6V8h-2v3H3v5h2v-3h6v3h2v-3h6v3h2v-5h-8z"
        />
    );
}

function CustomCodeSvg() {
    return (
        <>
            <path fill="#fff" d="M68.4 89.2h151v110.2h-151z" />
            <path
                className={styles.svgFillBlue}
                d="M219.4 202.7h-151c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3h151c1.8 0 3.3 1.5 3.3 3.3v110.2c0 1.8-1.5 3.3-3.3 3.3zm-147.7-6.6h144.4V92.5H71.7v103.6z"
            />
            <path
                className={styles.svgFillBlue}
                d="M218.4 112.4h-150c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h150c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3z"
            />
            <g>
                <path
                    className={styles.svgFillBlue}
                    d="M191.5 111.1c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v18.6c0 1.8-1.5 3.3-3.3 3.3z"
                />
            </g>
            <g>
                <path
                    className={classNames(
                        styles.svgFillBlue,
                        styles.svgStrokeBlue
                    )}
                    d="M125.6 176l-29.2-20.8v-5.1l29.2-22.6v9.2l-21.3 15.7v.2l21.3 14.2v9.2zM154.9 126.1l-16.6 59.2h-5l16.5-59.2h5.1zM192.3 154.9l-29.2 20.8v-9.2l21.4-14.1v-.3l-21.4-15.7v-9.2l29.2 22.5v5.2z"
                />
            </g>
        </>
    );
}

function SvgLineWithArrow() {
    return (
        <svg
            className={styles.svgDashedLine}
            height="80"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <marker
                    className={classNames(
                        styles.svgFillBlue,
                        styles.svgStrokeBlue
                    )}
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
                className={classNames(styles.arrowLine, styles.svgStrokeBlue)}
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

function IconContainer(props) {
    const circleRadius = 2.5;

    return (
        <a className={styles.iconContainer} href={props.linkUrl}>
            <svg xmlns="http://www.w3.org/2000/svg">
                <circle
                    className={styles.iconCircle}
                    cx={`${circleRadius}em`}
                    cy={`${circleRadius}em`}
                    r={`${circleRadius}em`}
                />
                <svg
                    height={`${circleRadius * 2}em`}
                    width={`${circleRadius * 2}em`}
                >
                    {props.children}
                </svg>
            </svg>
            <h2 className={styles.iconLabel}>{props.iconLabel}</h2>
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
                iconLabel="Application Configuration"
                linkUrl={configLink}
            >
                <svg viewBox="-10 -10 300 300">
                    <AppConfigSvg />
                </svg>
            </IconContainer>
            <SvgLineWithArrow />
            <IconContainer
                iconLabel="Geocortex Workflow"
                linkUrl={workflowLink}
            >
                <svg viewBox="-12 -11 48 48">
                    <WorkflowSvg />
                </svg>
            </IconContainer>
            <SvgLineWithArrow />
            <IconContainer
                iconLabel="Custom Workflow Activities and Form Elements"
                linkUrl={customWorkflowLink}
            >
                <svg viewBox="-12 -11 48 48">
                    <WorkflowSvg />
                </svg>
                <svg viewBox="-200 -190 500 500">
                    <CustomCodeSvg />
                </svg>
            </IconContainer>
            <SvgLineWithArrow />
            <IconContainer
                iconLabel="Custom Components and Services"
                linkUrl={customCodeLink}
            >
                <svg viewBox="-10 -10 300 300">
                    <CustomCodeSvg />
                </svg>
            </IconContainer>
        </div>
    );
}
