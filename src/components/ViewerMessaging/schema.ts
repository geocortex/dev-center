export interface MessageSchema {
    definitions: { [key: string]: Definition };
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
    properties?: { [key: string]: Definition };
    defaultProperties?: string[];
    patternProperties?: { [pattern: string]: Definition };
    typeof?: "function";
}

export type PrimitiveType = number | boolean | string | null;
