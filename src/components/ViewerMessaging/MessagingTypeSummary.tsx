import React from "react";
import MessagingArgument from "./MessagingArgument";
import { MessageSchema, MessageDefinition } from "./schema";
import { getActionOrEventDefinitionLinkId } from "./utils";

interface MessagingTypeSummaryProps {
    schema: MessageSchema;
    type: "command" | "event" | "operation";
}

function commandIsOperation(command: MessageDefinition) {
    return !!command.output;
}

function filterObj<T extends object>(
    raw: T,
    predicate: (key: string, raw: T) => boolean
): T {
    return Object.keys(raw)
        .filter((key) => predicate(key, raw))
        .reduce<T>((obj, key) => {
            obj[key] = raw[key];
            return obj;
        }, {} as T);
}

export default function MessagingTypeSummary(props: MessagingTypeSummaryProps) {
    const { schema, type } = props;
    let items: MessageSchema["commands"] | MessageSchema["events"];

    if (type === "command") {
        items = filterObj(
            schema.commands,
            (item, raw) => !commandIsOperation(raw[item])
        );
    } else if (type === "operation") {
        items = filterObj(schema.commands, (item, raw) =>
            commandIsOperation(raw[item])
        );
    } else {
        items = schema.events;
    }

    return (
        <>
            {Object.keys(items).map((key) => {
                const item = items[key];
                const linkId = getActionOrEventDefinitionLinkId(key, type);

                return (
                    <div key={key} className="margin-bottom--lg">
                        <h3>
                            <a id={linkId} href={`#${linkId}`}>
                                {key}
                            </a>
                        </h3>
                        {item.description && (
                            <div className="margin-bottom--md">
                                {item.description}
                            </div>
                        )}
                        <div className="margin-bottom--md">
                            <div>Argument</div>
                            <div className="margin-left--sm">
                                <MessagingArgument
                                    definition={item.input}
                                    schema={schema}
                                />
                            </div>
                        </div>
                        {type === "operation" && item.output && (
                            <>
                                <div>Result</div>
                                <div className="margin-left--sm">
                                    <MessagingArgument
                                        definition={item.output}
                                        schema={schema}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </>
    );
}
