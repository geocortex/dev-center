import Heading from "@theme/Heading";
import React from "react";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getArgumentDefinitionLinkId,
    getReferencedDefinition,
} from "./utils";
import MessagingArgument from "./MessagingArgument";

const H3 = Heading("h3");

interface MessagingDefinitionProps {
    definitionName: string;
    schema: MessageSchema;
}

export default function MessagingDefinition(props: MessagingDefinitionProps) {
    const { definitionName, schema } = props;

    const trimmedName = trimDefinitionsName(definitionName);
    const definition = getReferencedDefinition(definitionName, schema);
    if (!definition) {
        return null;
    }

    if (definition.type !== "object") {
        console.warn(
            "Tried to render definition for non-object type",
            trimmedName
        );
        return null;
    }

    const id = getArgumentDefinitionLinkId(trimmedName);

    return (
        <div className="margin-bottom--lg">
            <H3 id={id}>{trimmedName}</H3>
            {definition.description && (
                <div className="margin-bottom--md">
                    {definition.description}
                </div>
            )}
            <div>Properties</div>
            {(!definition.properties ||
                Object.keys(definition.properties).length === 0) && (
                <em>This object doesn't currently contain any properties.</em>
            )}
            {definition.properties && (
                <div className="margin-left--sm">
                    {Object.entries(definition.properties).map(
                        ([propName, propDef]) => (
                            <div key={propName} className="margin-bottom--md">
                                <div className="margin-bottom--sm">
                                    <code>{propName}</code>
                                    {definition.required?.includes(
                                        propName
                                    ) && (
                                        <span className="badge badge--secondary">
                                            Required
                                        </span>
                                    )}
                                </div>
                                <div className="margin-left--sm">
                                    <MessagingArgument
                                        definition={propDef}
                                        schema={schema}
                                    />
                                    {propDef.description && (
                                        <div className="margin-top--sm">
                                            {propDef.description}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
