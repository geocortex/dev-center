import React from "react";
import { MessageSchema } from "./schema";
import MessagingDefinition from "./MessagingDefinition";

interface MessagingDefinitionsSummaryProps {
    schema: MessageSchema;
}

export default function MessagingDefinitionsSummary(props: MessagingDefinitionsSummaryProps) {
    const { schema } = props;

    const filteredDefinitions: typeof schema.definitions = Object.entries(
        schema.definitions
    ).reduce((acc, [name, definition]) => {
        if (definition.type === "object") {
            return { ...acc, [name]: definition };
        }
        return acc;
    }, {});

    return (
        <div>
            {Object.keys(filteredDefinitions).map((name) => (
                <MessagingDefinition key={name} definitionName={name} schema={schema} />
            ))}
        </div>
    );
}
