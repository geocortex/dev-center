import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect, useState } from "react";
import MessagingContent from "./MessagingContent";
import { MessageSchema } from "./schema";

interface ViewerMessagingProps {
    product: "mobile" | "web";
    type: "argument" | "command" | "event" | "operation";
}

export default function ViewerMessagingWrapper(props: ViewerMessagingProps) {
    // `BrowserOnly` prevents children from being rendered statically during build
    return <BrowserOnly>{() => <ViewerMessaging {...props} />}</BrowserOnly>;
}

const cachedRequests: Record<
    ViewerMessagingProps["product"],
    Promise<Response> | undefined
> = {
    mobile: undefined,
    web: undefined,
};

function ViewerMessaging(props: ViewerMessagingProps) {
    const { product, type } = props;
    const [messagingJson, setMessagingJson] = useState<any>();

    // Fetch schema
    useEffect(() => {
        let didCancel = false;

        (async () => {
            if (!cachedRequests[product]) {
                cachedRequests[product] = fetch(
                    `https://apps.geocortex.com/webviewer/messaging-${product}.schema.json`
                );
            }

            const response = await cachedRequests[product]!;
            if (didCancel) {
                return;
            }
            // Clone to avoid error when reading json multiple times
            const responseJson: MessageSchema = await response.clone().json();
            if (didCancel) {
                return;
            }

            setMessagingJson(responseJson);
        })();

        return () => {
            didCancel = true;
        };
    }, [product]);

    // Scroll to element if id present in URL hash
    useEffect(() => {
        if (!messagingJson) {
            return;
        }

        // Decode entities in the URL
        // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
        const hash = window.decodeURIComponent(window.location.hash);
        if (hash) {
            document.getElementById(hash.substring(1))?.scrollIntoView();
        }
    }, [messagingJson]);

    return messagingJson ? (
        <MessagingContent schema={messagingJson} type={type} />
    ) : (
        <div>Loading...</div>
    );
}
