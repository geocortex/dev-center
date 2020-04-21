import Link from "@docusaurus/Link";
import React from "react";
import { Definition, MessageSchema, MessageDefinition } from "./schema";
import { trimDefinitionsName } from "./utils";

interface MessagingTypeSummaryProps {
    schema: MessageSchema;
    type: "commands" | "events" | "operations";
}

function makeDefinitionRef(ref: string, schema: MessageSchema): JSX.Element {
    const refIsLinkable = !!schema.definitions[trimDefinitionsName(ref)];
    const trimmedName = trimDefinitionsName(ref);

    if (refIsLinkable) {
        return <Link to={`#${trimmedName}`}>{trimmedName}</Link>;
    }

    return <>{trimmedName}</>;
}

function makeDefinitionType(def: Definition, schema: MessageSchema, inTable = false): JSX.Element {
    if (!def) {
        return <code>null</code>;
    } else if (def.$ref) {
        return <code>{makeDefinitionRef(def.$ref, schema)}</code>;
    } else if (def.type) {
        if (def.type !== "array") {
            return <code>{def.type}</code>;
        } else {
            if (def.items && (def.items as Definition).$ref) {
                const itemsRef = (def.items as Definition).$ref!;
                return (
                    <>
                        <code>
                            {makeDefinitionRef(itemsRef, schema)}
                            []
                        </code>
                    </>
                );
            } else {
                const nestedDef = makeDefinitionType(def.items as Definition, schema, inTable);
                return (
                    <>
                        <code>${nestedDef}[]</code>
                    </>
                );
            }
        }
    } else if (def.anyOf) {
        return (
            <>
                <div>Any of</div>
                {def.anyOf.map((option, index) => (
                    // There's not a guaranteed safe identifier we can use for the key prop, fall back to index.
                    <div key={option.$ref || index}>
                        {makeDefinitionType(option, schema, inTable)}
                    </div>
                ))}
            </>
        );
    } else {
        return <code>unknown</code>;
    }
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

    if (type === "commands") {
        items = filterObj(schema.commands, (item, raw) => !commandIsOperation(raw[item]));
    } else if (type === "operations") {
        items = filterObj(schema.commands, (item, raw) => commandIsOperation(raw[item]));
    } else {
        items = schema.events;
    }

    return (
        <>
            {Object.keys(items).map((key) => {
                const item = items[key];
                const linkId = `${type}-${key}`;
                return (
                    <table key={key}>
                        <tbody>
                            <tr>
                                {type === "commands" && <td>Command</td>}
                                {type === "events" && <td>Event</td>}
                                {type === "operations" && <td>Operation</td>}
                                <td>
                                    <Link id={linkId} to={`#${linkId}`}>
                                        <strong>{key}</strong>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{item.description}</td>
                            </tr>
                            <tr>
                                <td>Argument</td>
                                <td>{makeDefinitionType(item.input, schema)}</td>
                            </tr>
                            {type === "operations" && item.output && (
                                <tr>
                                    <td>Result</td>
                                    <td>{makeDefinitionType(item.output, schema)}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                );
            })}
        </>
    );
}
