import React from "react";
import { MessageSchema } from "./schema";
import { trimDefinitionsName, getArgumentDefinitionLinkId } from "./utils";
import MessagingArgument from "./MessagingArgument";

interface MessagingDefinitionProps {
    definitionName: string;
    schema: MessageSchema;
}

export default function MessagingDefinition(props: MessagingDefinitionProps) {
    const { definitionName, schema } = props;

    const trimmedName = trimDefinitionsName(definitionName);
    const definition = schema.definitions[trimmedName];

    if (definition.type !== "object") {
        console.warn("Tried to render definition for non-object type", trimmedName);
        return null;
    }

    const id = getArgumentDefinitionLinkId(trimmedName);

    return (
        <div className="margin-bottom--lg">
            <h3>
                <a id={id} href={`#${id}`}>
                    {trimmedName}
                </a>
            </h3>
            {definition.description && (
                <div className="margin-bottom--md">{definition.description}</div>
            )}
            <h4>Properties</h4>
            {(!definition.properties || Object.keys(definition.properties).length === 0) && (
                <em>This object doesn't currently contain any properties.</em>
            )}
            {definition.properties &&
                Object.entries(definition.properties).map(([propName, propDef]) => (
                    <div key={propName} className="margin-bottom--md">
                        <div className="margin-bottom--sm">
                            <code>{propName}</code>
                            {definition.required?.includes(propName) && (
                                <span className="badge badge--secondary">Required</span>
                            )}
                        </div>
                        <div className="margin-left--md">
                            <MessagingArgument definition={propDef} schema={schema} />
                            {propDef.description && (
                                <div className="margin-top--sm">{propDef.description}</div>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
}
