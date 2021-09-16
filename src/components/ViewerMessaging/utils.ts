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
    // Explicitly ignore esri.rest-api definitions for now. Also ignore
    // SingleCommand and SingleOperation as they result in a large list of
    // `unknown` properties.
    if (
        trimmedName.startsWith("esri.rest-api") ||
        trimmedName.startsWith("viewer-spec.SingleCommand") ||
        trimmedName.startsWith("viewer-spec.SingleOperation")
    ) {
        return;
    }
    return schema.definitions[trimmedName];
}
