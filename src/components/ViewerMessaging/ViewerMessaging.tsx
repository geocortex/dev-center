import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect, useState } from "react";
import MessagingContent from "./MessagingContent";
import { MessageSchema, Definition } from "./schema";

interface ViewerMessagingProps {
    product: "mobile" | "web";
    type: "argument" | "command" | "event" | "operation";
}

export default function ViewerMessagingWrapper(props: ViewerMessagingProps) {
    // `BrowserOnly` prevents children from being rendered statically during build
    return <BrowserOnly>{() => <ViewerMessaging {...props} />}</BrowserOnly>;
}

// Cache the requests to allow this component to be rendered
// multiple times for the different types: "command", "event", etc.
// We need to be able to render the headers within markdown so it
// plays nicely with the docusaurus right TOC component.
const cachedRequests: Record<
    ViewerMessagingProps["product"],
    Record<"action" | "event", Promise<Response> | undefined>
> = {
    web: { action: undefined, event: undefined },
    mobile: { action: undefined, event: undefined },
};

function ViewerMessaging(props: ViewerMessagingProps) {
    const { product, type } = props;
    const [messagingJson, setMessagingJson] = useState<any>();

    // Fetch schema
    useEffect(() => {
        let didCancel = false;
        const schemaType =
            type === "command" || type === "operation"
                ? "action"
                : type === "event"
                ? "event"
                : undefined;

        (async () => {
            if (schemaType && !cachedRequests[product][schemaType]) {
                cachedRequests[product][schemaType] = fetch(
                    `https://apps.geocortex.com/webviewer/${product}-${schemaType}.schema.json`
                );
            }

            const actionResponse = await cachedRequests[product].action!;
            const eventResponse = await cachedRequests[product].event!;
            if (didCancel) {
                return;
            }
            // Clone to avoid error when reading json multiple times
            const actionResponseJson: MessageSchema = await actionResponse
                .clone()
                .json();
            const eventResponseJson: MessageSchema = await eventResponse
                .clone()
                .json();
            if (didCancel) {
                return;
            }

            const actionObject: Definition = {
                properties: {
                    name: {
                        description: "The name of a command or operation.",
                        type: "string",
                    },
                    arguments: {
                        description:
                            "The arguments for the command or operation.",
                        type: "object",
                    },
                },
                required: ["name", "arguments"],
                type: "object",
            };
            const actionObjectRef: Definition = {
                $ref: "#/definitions/viewer-spec.ActionObject",
            };
            const actionString: Definition = {
                type: "string",
            };

            const actionOverrideDef: Definition = {
                description: `An action to execute in the viewer; can be an action name, an action object, or a command chain (https://developers.geocortex.com/docs/${product}/configuration-commands-operations/#command-chains). The list of valid action names are the names of the commands and operations listed in this document`,
                // Basic definition of a command chain
                anyOf: [
                    actionString,
                    actionObjectRef,
                    {
                        items: {
                            anyOf: [actionString, actionObjectRef],
                        },
                        type: "array",
                    },
                ],
            };

            const schema = {
                definitions: {
                    ...actionResponseJson.definitions,
                    ...eventResponseJson.definitions,
                    "viewer-spec.ActionObject": actionObject,
                    "viewer-spec.Action": actionOverrideDef,
                },
            };

            setMessagingJson(schema);
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
