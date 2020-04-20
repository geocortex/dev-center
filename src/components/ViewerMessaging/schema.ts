export interface MessageSchema {
    definitions: { [key: string]: Definition };
    commands: { [name: string]: MessageDefinition };
    events: { [name: string]: MessageDefinition };
}

/**
 * Definition of a message (command, event, or operation).
 */
export interface MessageDefinition {
    /**
     * Human-readable description of the message.
     */
    description: string;

    /**
     * JSON schema for the input to the command or operation. For events, this
     * will be the input to the event callback. Will be null if the command does
     * not have any input.
     */
    input: Definition;

    /**
     * JSON schema for the output of an operation. Not applicable for commands
     * or events.
     */
    output?: Definition;
}

export interface Definition {
    $ref?: string;
    $schema?: string;
    $id?: string;
    description?: string;
    allOf?: Definition[];
    oneOf?: Definition[];
    anyOf?: Definition[];
    title?: string;
    type?: string | string[];
    definitions?: { [key: string]: any };
    format?: string;
    items?: Definition | Definition[];
    minItems?: number;
    additionalItems?:
        | {
              anyOf: Definition[];
          }
        | Definition;
    enum?: PrimitiveType[] | Definition[];
    default?: PrimitiveType | Object;
    additionalProperties?: Definition | boolean;
    required?: string[];
    propertyOrder?: string[];
    properties?: { [key: string]: any };
    defaultProperties?: string[];
    patternProperties?: { [pattern: string]: Definition };
    typeof?: "function";
}

export type PrimitiveType = number | boolean | string | null;
