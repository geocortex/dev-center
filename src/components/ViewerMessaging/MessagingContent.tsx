import React from "react";
import { MessageSchema, MessageDefinition } from "./schema";
import MessagingTypeSummary from "./MessagingTypeSummary";

interface MessagingContentProps {
    schema: MessageSchema;
}

function commandIsOperation(command: MessageDefinition) {
    return !!command.output;
}

function trimDefinitionsName(def: string) {
    return def.replace("#/definitions/", "");
}

function createTypeSummaries(
    items: MessageSchema["commands"] | MessageSchema["events"]
): Array<{ name: string; description: string }> {
    return Object.keys(items).map((item) => ({
        description: items[item].description,
        name: trimDefinitionsName(item),
    }));
}

function filterObj<T extends object>(raw: T, predicate: (key: string, raw: T) => boolean): T {
    return Object.keys(raw)
        .filter((key) => predicate(key, raw))
        .reduce<T>((obj, key) => {
            obj[key] = raw[key];
            return obj;
        }, {} as T);
}

export default function MessagingContent(props: MessagingContentProps) {
    const { schema } = props;

    return (
        <>
            <h2>Commands</h2>
            <MessagingTypeSummary
                items={createTypeSummaries(
                    filterObj(schema.commands, (item, raw) => !commandIsOperation(raw[item]))
                )}
            />
            <h2>Operations</h2>
            <MessagingTypeSummary
                items={createTypeSummaries(
                    filterObj(schema.commands, (item, raw) => commandIsOperation(raw[item]))
                )}
            />
            <h2>Events</h2>
            <MessagingTypeSummary items={createTypeSummaries(schema.events)} />
        </>
    );
}
