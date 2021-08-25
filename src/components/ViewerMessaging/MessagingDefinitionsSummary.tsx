import React from "react";
import { MessageSchema } from "./schema";
import MessagingDefinition from "./MessagingDefinition";

interface MessagingDefinitionsSummaryProps {
    schema: MessageSchema;
}

// Note that we blindly render all definitions present in the schema.
// This would need to be refactored if we split up the
// commands/operations/events across multiple pages.
export default function MessagingDefinitionsSummary(
    props: MessagingDefinitionsSummaryProps
) {
    const { schema } = props;

    // Grab only the `object` type definitions, everything else can be inlined.
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
            {Object.keys(filteredDefinitions)
                // Rudimentary sort of components / services first and then the
                // properties should all come after TODO: Better sort so
                // components are in one section and services are in another
                .sort((a, b) => {
                    if (
                        a.toLocaleLowerCase().includes("modelproperties") &&
                        b.toLocaleLowerCase().includes("modelproperties")
                    ) {
                        return a.localeCompare(b);
                    }
                    if (a.toLocaleLowerCase().includes("modelproperties")) {
                        return -1;
                    }
                    if (b.toLocaleLowerCase().includes("modelproperties")) {
                        return 1;
                    }
                    return a.localeCompare(b);
                })
                .map((name) => (
                    <MessagingDefinition
                        key={name}
                        definitionName={name}
                        schema={schema}
                    />
                ))}
        </div>
    );
}
