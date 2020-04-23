import React from "react";
import { Definition, MessageSchema, PrimitiveType } from "./schema";
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
        const foundDefinition = getReferencedDefinition(name, schema);
        console.warn("Couldn't find definition:", definition);
        definition = foundDefinition;
    }

    if (!definition) {
        return <code>null</code>;
    }
    // This is a single type referencing another definition
    else if (definition.$ref) {
        const referencedDef = getReferencedDefinition(definition.$ref, schema);

        // We only hyperlink to object type definitions, everything else can be inlined.
        if (referencedDef && referencedDef.type === "object") {
            return <MessagingRef name={definition.$ref} schema={schema} />;
        } else if (referencedDef) {
            return <MessagingArgument definition={referencedDef} schema={schema} />;
        }

        return <MessagingRef name={definition.$ref} schema={schema} />;
    }
    // This is a single type
    else if (definition.type) {
        if (definition.type === "string" && definition.enum) {
            const enumType = (definition.enum as PrimitiveType[])
                .map((val) => `"${val}"`)
                .join(" | ");
            return <code>{enumType}</code>;
        } else if (definition.type === "array" && definition.items) {
            if (Array.isArray(definition.items)) {
                return (
                    <>
                        <div>Any of:</div>
                        {definition.items.map((option, index) => (
                            // There's not a guaranteed safe identifier we can use for the key prop, fall back to index.
                            <div key={option.$ref || index}>
                                <MessagingArgument definition={option} schema={schema} />
                                []
                            </div>
                        ))}
                    </>
                );
            }
            if (definition.items && (definition.items as Definition).$ref) {
                const itemsRef = (definition.items as Definition).$ref!;
                return <MessagingRef isArray name={itemsRef} schema={schema} />;
            }
            return <code>{(definition.items as Definition).type}[]</code>;
        } else if (definition.type === "object") {
            // We don't support rendering object type inline, should only reference by link.
            return <code>unknown</code>;
        }

        return <code>{definition.type}</code>;
    }
    // This is a union type
    else if (definition.anyOf) {
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

    // Didn't contain an appropriate type. Hopefully the description was useful.
    return <code>unknown</code>;
}
