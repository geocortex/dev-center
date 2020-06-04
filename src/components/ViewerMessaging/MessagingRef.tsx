import React from "react";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getArgumentDefinitionLinkId,
    getReferencedDefinition,
} from "./utils";

interface MessagingRefProps {
    isArray?: boolean;
    name: string;
    schema: MessageSchema;
}

export default function MessagingRef(props: MessagingRefProps) {
    const { isArray, name, schema } = props;

    const trimmedName = trimDefinitionsName(name);
    const referencedDefinition = getReferencedDefinition(name, schema);

    // We'll only render definition tables for object types, everything else can be inlined.
    if (referencedDefinition && referencedDefinition.type === "object") {
        return (
            <code>
                <a href={`#${getArgumentDefinitionLinkId(name)}`}>
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
