import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import ProductContainer from "../components/ProductContainer";
import ProductCard from "../components/ProductCard";

const products = [
    {
        title: "VertiGIS Studio Web",
        imageUrl: "img/web-viewer-product-icon.svg",
        description:
            "Combine the 3D and 2D capabilities of Esri's latest JavaScript API to deliver cutting-edge mapping applications.",
        link: "docs/web/overview",
    },
    {
        title: "VertiGIS Studio Mobile",
        imageUrl: "img/mobile-viewer-product-icon.svg",
        description:
            "Develop field data collection apps and run them online or offline.",
        link: "docs/mobile/overview",
    },
    {
        title: "VertiGIS Studio Workflow",
        imageUrl: "img/workflow-product-icon.svg",
        description:
            "Extend your VertiGIS Studio and Web AppBuilder for ArcGIS® applications by turning sophisticated business processes into a set of simple, guided end-user interactions.",
        link: "docs/workflow/overview",
    },
    {
        title: "VertiGIS Studio Reporting",
        imageUrl: "img/reporting-product-icon.svg",
        description:
            "Create sophisticated, professional-looking reports that include spatial and non-spatial data from ArcGIS map services, tables, databases, and other data sources.",
        link: "docs/reporting/overview",
    },
];

function Home() {
    return (
        <Layout description="Developer documentation and code samples for VertiGIS Studio Products.">
            <header
                className={clsx("hero hero--dark", styles.heroBanner)}
                // TODO: Find out correct approach to use this in CSS file,
                // as it wasn't taking baseUrl into account.
                style={{
                    backgroundImage: `url("${useBaseUrl("img/rocket.png")}")`,
                }}
            >
                <div className="container">
                    <h1 className="hero__title">
                        VertiGIS Studio Developer Center
                    </h1>
                    <h2 className="hero__subtitle">
                        Extend your VertiGIS Studio applications to build
                        virtually anything!
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
