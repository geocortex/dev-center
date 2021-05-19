import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import ProductContainer from "../components/ProductContainer";
import ProductCard from "../components/ProductCard";

const products = [
    {
        title: "Geocortex Web",
        imageUrl: "img/web-viewer-product-icon.svg",
        description: "lang-web-description",
        link: "docs/web/overview",
    },
    {
        title: "Geocortex Mobile",
        imageUrl: "img/mobile-viewer-product-icon.svg",
        description: "lang-mobile-description",
        link: "docs/mobile/overview",
    },
    {
        title: "Geocortex Workflow",
        imageUrl: "img/workflow-product-icon.svg",
        description: "lang-workflow-description",
        link: "docs/workflow/overview",
    },
    {
        title: "Geocortex Reporting",
        imageUrl: "img/reporting-product-icon.svg",
        description: "lang-report-description",
        link: "docs/reporting/overview",
    },
];

function Home() {
    return (
        <Layout description="Developer documentation and code samples for Geocortex Products.">
            <header
                className={clsx("hero hero--dark", styles.heroBanner)}
                // TODO: Find out correct approach to use this in CSS file,
                // as it wasn't taking baseUrl into account.
                style={{
                    backgroundImage: `url("${useBaseUrl(
                        "img/geocortex-rocket.png"
                    )}")`,
                }}
            >
                <div className="container">
                    <h1 className="hero__title">
                        <Translate>lang-dev-center-title</Translate>
                    </h1>
                    <h2 className="hero__subtitle">
                        <Translate>lang-dev-center-description</Translate>
                    </h2>
                </div>
            </header>
            <main>
                <ProductContainer>
                    {products.map((props, idx) => (
                        <ProductCard key={idx} {...props} />
                    ))}
                </ProductContainer>
            </main>
        </Layout>
    );
}

export default Home;
