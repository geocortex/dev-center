import React from "react";
import { MessageSchema } from "./schema";
import MessagingTypeSummary from "./MessagingTypeSummary";
import MessagingDefinitionsSummary from "./MessagingDefinitionsSummary";

interface MessagingContentProps {
    schema: MessageSchema;
}

export default function MessagingContent(props: MessagingContentProps) {
    const { schema } = props;

    return (
        <>
            <h2>
                <a id="commands" href="#commands">
                    Commands
                </a>
            </h2>
            <MessagingTypeSummary schema={schema} type="command" />
            <h2>
                <a id="operations" href="#operations">
                    Operations
                </a>
            </h2>
            <MessagingTypeSummary schema={schema} type="operation" />
            <h2>
                <a id="events" href="#events">
                    Events
                </a>
            </h2>
            <MessagingTypeSummary schema={schema} type="event" />
            <h2>
                <a id="argument-definitions" href="#argument-definitions">
                    Commands
                </a>
            </h2>
            <MessagingDefinitionsSummary schema={schema} />
        </>
    );
}
