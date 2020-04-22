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
            <h2>Commands</h2>
            <MessagingTypeSummary schema={schema} type="commands" />
            <h2>Operations</h2>
            <MessagingTypeSummary schema={schema} type="operations" />
            <h2>Events</h2>
            <MessagingTypeSummary schema={schema} type="events" />
            <h2>Argument Definitions</h2>
            <MessagingDefinitionsSummary schema={schema} />
        </>
    );
}
