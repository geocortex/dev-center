import React from "react";
import { MessageSchema, Definition } from "./schema";
import { trimDefinitionsName } from "./utils";

interface MessagingRefProps {
    isArray?: boolean;
    name: string;
    schema: MessageSchema;
}

export default function MessagingRef(props: MessagingRefProps) {
    const { isArray, name, schema } = props;

    const trimmedName = trimDefinitionsName(name);
    const referencedDefinition: Definition | undefined = schema.definitions[trimmedName];

    // We'll only render definition tables for object types, everything else can be inlined.
    if (referencedDefinition && referencedDefinition.type === "object") {
        return (
            <code>
                <a href={`#definition-${trimmedName}`}>
                    {trimmedName}
                    {isArray && "[]"}
                </a>
            </code>
        );
    }

    return (
        <code>
            {trimmedName}
            {isArray && "[]"}
        </code>
    );
}
