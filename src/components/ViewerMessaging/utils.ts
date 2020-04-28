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
