import React from "react";
import { Definition, MessageSchema, PrimitiveType } from "./schema";
import MessagingRef from "./MessagingRef";
import { trimDefinitionsName } from "./utils";

interface MessagingArgumentProps {
    definition: Definition | string | undefined;
    schema: MessageSchema;
}

function getReferencedDefinition(
    name: string,
    schema: MessageSchema
): Definition | undefined {
    const trimmedName = trimDefinitionsName(name);
    return schema.definitions[trimmedName];
}

export default function MessagingArgument(props: MessagingArgumentProps) {
    const { schema } = props;

    let definition = props.definition;

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
            return (
                <MessagingArgument definition={referencedDef} schema={schema} />
            );
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
            const renderAnyOf = (items: Definition[]) => {
                return (
                    <>
                        {items.map((option, index) => (
                            // There's not a guaranteed safe identifier we can use for the key prop, fall back to index.
                            <div key={option.$ref || index}>
                                <MessagingArgument
                                    definition={option}
                                    schema={schema}
                                />
                                []
                            </div>
                        ))}
                    </>
                );
            };
            if (Array.isArray(definition.items)) {
                return renderAnyOf(definition.items);
            }
            if (Array.isArray(definition.items.anyOf)) {
                return renderAnyOf(definition.items.anyOf);
            }
            if (definition.items.$ref) {
                const itemsRef = (definition.items as Definition).$ref!;
                return <MessagingRef isArray name={itemsRef} schema={schema} />;
            }
            return <code>{(definition.items as Definition).type}[]</code>;
        } else if (definition.type === "object") {
            // We don't support rendering object type inline, should only reference by link.
            return <code>unknown</code>;
        } else if (Array.isArray(definition.type)) {
            // We already take care of calling out that an argument is optional
            // if one of the allowed types is "null" so we dont need to
            // explicitly include "null"
            const types = definition.type.filter((type) => type !== "null");
            if (types.length === 0) {
                return null;
            }
            if (types.length === 1) {
                return <code>{types[0]}</code>;
            }
            return (
                <>
                    {types.map((type) => (
                        <div>
                            <code>{type}</code>
                        </div>
                    ))}
                </>
            );
        }

        return <code>{definition.type}</code>;
    }
    // This is a union type
    else if (definition.anyOf) {
        return (
            <>
                <div>Any of:</div>
                {definition.anyOf
                    // We already take care of calling out that an argument is optional
                    // if one of the allowed types is "null" so we dont need to
                    // explicitly include "null"
                    .filter((def) => !((def.type as string) === "null"))
                    .map((option, index) => (
                        // There's not a guaranteed safe identifier we can use for the key prop, fall back to index.
                        <div key={option.$ref || index}>
                            <MessagingArgument
                                definition={option}
                                schema={schema}
                            />
                        </div>
                    ))}
            </>
        );
    }

    // Didn't contain an appropriate type. Hopefully the description was useful.
    return <code>unknown</code>;
}
