import React from "react";
import { MessageSchema } from "./schema";

interface MessagingDefinitionsSummaryProps {
    schema: MessageSchema;
}

export default function MessagingDefinitionsSummary(props: MessagingDefinitionsSummaryProps) {
    const { schema } = props;

    return (
        <div>
            {Object.keys(schema.definitions).map((defKey) => (
                <div key={defKey}>
                    <h3>{defKey}</h3>
                </div>
            ))}
        </div>
    );
}
