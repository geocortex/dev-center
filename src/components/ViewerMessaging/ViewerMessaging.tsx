import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect, useState } from "react";
import { createDocumentation, MessageSchema } from "./messagingParser";
import MessagingContent from "./MessagingContent";

interface ViewerMessagingProps {
    type: "mobile" | "web";
}

export default function ViewerMessagingWrapper(props: ViewerMessagingProps) {
    return <BrowserOnly>{() => <ViewerMessaging {...props} />}</BrowserOnly>;
}

function ViewerMessaging(props: ViewerMessagingProps) {
    const { type } = props;
    const [messagingJson, setMessagingJson] = useState<any>();
    const [messagingHtml, setMessagingHtml] = useState<string>();

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
            setMessagingHtml(createDocumentation(responseJson));
        })();

        return () => {
            didCancel = true;
        };
    }, [type]);

    return messagingJson ? <MessagingContent schema={messagingJson} /> : null;
}
