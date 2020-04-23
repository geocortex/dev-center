import React from "react";
import { Definition, MessageSchema } from "./schema";
import MessagingRef from "./MessagingRef";
import { trimDefinitionsName } from "./utils";

interface MessagingArgumentProps {
    definition: Definition | string;
    schema: MessageSchema;
}

function getReferencedDefinition(name: string, schema: MessageSchema): Definition | undefined {
    const trimmedName = trimDefinitionsName(name);
    return schema.definitions[trimmedName];
}

export default function MessagingArgument(props: MessagingArgumentProps) {
    const { schema } = props;

    let definition: Definition | string | undefined = props.definition;

    if (typeof definition === "string") {
        definition = getReferencedDefinition(name, schema);
    }

    // TODO: What about enums types?

    if (!definition) {
        return <code>null</code>;
    } else if (definition.$ref) {
        const referencedDef = getReferencedDefinition(definition.$ref, schema);

        // We only hyperlink to object type definitions, everything else can be inlined.
        if (referencedDef && referencedDef.type === "object") {
            return <MessagingRef name={definition.$ref} schema={schema} />;
        } else if (referencedDef) {
            return <MessagingArgument definition={referencedDef} schema={schema} />;
        } else {
            return <code>{trimDefinitionsName(definition.$ref)}</code>;
        }
    } else if (definition.type) {
        if (definition.type !== "array") {
            return <code>{definition.type}</code>;
        } else if (definition.items && (definition.items as Definition).$ref) {
            const itemsRef = (definition.items as Definition).$ref!;
            return <MessagingRef isArray name={itemsRef} schema={schema} />;
        } else {
            return <code>unknown</code>;
        }
    } else if (definition.anyOf) {
        return (
            <>
                <div>Any of:</div>
                {definition.anyOf.map((option, index) => (
                    // There's not a guaranteed safe identifier we can use for the key prop, fall back to index.
                    <div key={option.$ref || index}>
                        <MessagingArgument definition={option} schema={schema} />
                    </div>
                ))}
            </>
        );
    }

    return <code>unknown</code>;
}
