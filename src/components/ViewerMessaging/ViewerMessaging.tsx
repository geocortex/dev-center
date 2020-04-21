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

    return messagingJson ? <MessagingContent schema={messagingJson} /> : null;
}
