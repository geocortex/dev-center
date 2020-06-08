import { MessageSchema, Definition } from "./schema";

export function trimDefinitionsName(def: string) {
    return def.replace("#/definitions/", "");
}

export function getArgumentDefinitionLinkId(def: string) {
    return `definition-${trimDefinitionsName(def)}`;
}

export function getActionOrEventDefinitionLinkId(
    def: string,
    type: "command" | "event" | "operation"
) {
    return `${type}-${def}`;
}

export function getReferencedDefinition(
    name: string,
    schema: MessageSchema
): Definition | undefined {
    const trimmedName = trimDefinitionsName(name);
    // Explicitly ignore esri.rest-api definitions for now
    if (trimmedName.startsWith("esri.rest-api")) {
        return;
    }
    return schema.definitions[trimmedName];
}
