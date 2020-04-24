import React from "react";
import { MessageSchema } from "./schema";
import MessagingTypeSummary from "./MessagingTypeSummary";
import MessagingDefinitionsSummary from "./MessagingDefinitionsSummary";

interface MessagingContentProps {
    schema: MessageSchema;
    type: "argument" | "command" | "event" | "operation";
}

export default function MessagingContent(props: MessagingContentProps) {
    const { schema, type } = props;

    return (
        <>
            {type === "argument" && (
                <MessagingDefinitionsSummary schema={schema} />
            )}
            {type === "command" && (
                <MessagingTypeSummary schema={schema} type="command" />
            )}
            {type === "event" && (
                <MessagingTypeSummary schema={schema} type="event" />
            )}
            {type === "operation" && (
                <MessagingTypeSummary schema={schema} type="operation" />
            )}
        </>
    );
}
