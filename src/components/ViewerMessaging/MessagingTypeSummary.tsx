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

function filterObj<T extends object>(raw: T, predicate: (key: string, raw: T) => boolean): T {
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
        items = filterObj(schema.commands, (item, raw) => !commandIsOperation(raw[item]));
    } else if (type === "operation") {
        items = filterObj(schema.commands, (item, raw) => commandIsOperation(raw[item]));
    } else {
        items = schema.events;
    }

    return (
        <>
            {Object.keys(items).map((key) => {
                const item = items[key];
                const linkId = getActionOrEventDefinitionLinkId(key, type);

                return (
                    <table key={key}>
                        <tbody>
                            <tr>
                                {type === "command" && <td>Command</td>}
                                {type === "event" && <td>Event</td>}
                                {type === "operation" && <td>Operation</td>}
                                <td>
                                    <a id={linkId} href={`#${linkId}`}>
                                        <strong>{key}</strong>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{item.description}</td>
                            </tr>
                            <tr>
                                <td>Argument</td>
                                <td>
                                    <MessagingArgument definition={item.input} schema={schema} />
                                </td>
                            </tr>
                            {type === "operations" && item.output && (
                                <tr>
                                    <td>Result</td>
                                    <td>
                                        <MessagingArgument
                                            definition={item.output}
                                            schema={schema}
                                        />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                );
            })}
        </>
    );
}
