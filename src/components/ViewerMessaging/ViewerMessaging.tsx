import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect, useState } from "react";
import MessagingContent from "./MessagingContent";
import { MessageSchema } from "./schema";

interface ViewerMessagingProps {
    type: "mobile" | "web";
}

export default function ViewerMessagingWrapper(props: ViewerMessagingProps) {
    return <BrowserOnly>{() => <ViewerMessaging {...props} />}</BrowserOnly>;
}

function ViewerMessaging(props: ViewerMessagingProps) {
    const { type } = props;
    const [messagingJson, setMessagingJson] = useState<any>();

    // Fetch schema
    useEffect(() => {
        let didCancel = false;

        (async () => {
            const response = await fetch(
                `https://apps.geocortex.com/webviewer/messaging-${type}.schema.json`
            );
            const responseJson: MessageSchema = await response.json();

            if (didCancel) {
                return;
            }

            setMessagingJson(responseJson);
        })();

        return () => {
            didCancel = true;
        };
    }, [type]);

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

    return messagingJson ? <MessagingContent schema={messagingJson} /> : <div>Loading...</div>;
}
