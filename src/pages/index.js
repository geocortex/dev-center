import React from "react";
import classNames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import ProductContainer from "../components/ProductContainer";
import ProductCard from "../components/ProductCard";

const products = [
    {
        title: "Geocortex Web",
        imageUrl: "img/web-viewer-product-icon.svg",
        description:
            "Combine the 3D and 2D capabilities of Esri’s latest JavaScript API to deliver cutting-edge mapping applications.",
        link: "docs/web/overview",
    },
    {
        title: "Geocortex Mobile",
        imageUrl: "img/mobile-viewer-product-icon.svg",
        description: "Develop field data collection apps and run them online or offline.",
        link: "docs/mobile/overview",
    },
    {
        title: "Geocortex Workflow",
        imageUrl: "img/workflow-product-icon.svg",
        description:
            "Extend your Geocortex and Web AppBuilder for ArcGIS® applications by turning sophisticated business processes into a set of simple, guided end-user interactions.",
        link: "docs/workflow/overview",
    },
];

function Home() {
    const { siteConfig = {} } = useDocusaurusContext();
    return (
        <Layout description="Developer documentation and code samples for Geocortex Products.">
            <header
                className={classNames("hero hero--dark", styles.heroBanner)}
                // TODO: Find out correct approach to use this in CSS file,
                // as it wasn't taking baseUrl into account.
                style={{ backgroundImage: `url("${useBaseUrl("img/geocortex-rocket.png")}")` }}
            >
                <div className="container">
                    <h1 className="hero__title">Geocortex Developer Center</h1>
                    <h2 className="hero__subtitle">
                        Extend your Geocortex applications to build virtually anything!
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
