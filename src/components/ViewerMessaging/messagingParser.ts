import { MessageSchema } from "./schema";

export function createDocumentation(schemaJson: MessageSchema): string {
    let schemaHtml = "";

    // Write Header
    schemaHtml = writeHeader(schemaHtml, "Commands / Operations");

    const commands = schemaJson.commands;
    let columns = Object.keys(commands).map((command) => [
        makeLink(command),
        commands[command].description,
    ]);
    columns.unshift(["Name", "Description"]);

    // Write Table
    schemaHtml = writeTable(schemaHtml, columns, "table table-commands");

    // Write Header
    schemaHtml = writeHeader(schemaHtml, "Events");

    const events = schemaJson.events;
    columns = Object.keys(events).map((event) => [makeLink(event), events[event].description]);
    columns.unshift(["Name", "Description"]);

    // Write Table
    schemaHtml = writeTable(schemaHtml, columns, "table table-commands");

    // Write Parameters
    schemaHtml = writeParamaters(schemaHtml, commands, events);

    // Write Definitions
    schemaHtml = writeHeader(schemaHtml, "Definitions");
    schemaHtml = writeDefinitions(schemaHtml, schemaJson.definitions);

    return schemaHtml;
}

function writeHeader(schema: string, header: string, level: number = 1): string {
    return `${schema}\n<h${level}>${header}</h${level}>\n`;
}

function writeTable(schema: string, columns: string[][], className?: string): string {
    const headerRow = columns.shift();
    // Makes | Column1 | Column2...
    const header = `| ${headerRow.join(" | ")}`;
    // Makes |-|-...
    const headerDivider = "|-".repeat(headerRow.length);
    /**
     * Makes
     * | Row 1 content A | Row 1 content B...
     * | Row 2 content A | Row 2 content B...
     * ...
     */
    const tableRows = columns.map((column) => `| ${column.join(" | ")}`).join("\n");
    const div = `<div class="table ${className}"></div>\n\n`;

    return `${schema}${div}${header}\n${headerDivider}\n${tableRows}\n`;
}

function writeParamaters(
    schema: string,
    commands: { [name: string]: MessageDefinition },
    events: { [name: string]: MessageDefinition }
): string {
    const allKeys = [...Object.keys(commands), ...Object.keys(events)].sort();
    const allParameters = allKeys
        .map((key) => {
            const isCommand = !!commands[key];
            return isCommand
                ? makeCommandParamater(key, commands[key])
                : makeEventParamater(key, events[key]);
        })
        .join("");
    return `${schema}${allParameters}\n`;
}

function writeDefinitions(schema: string, defs: { [name: string]: Definition }): string {
    const definitions = Object.keys(defs)
        .map((defName) => {
            const anchor = `<a name="${defName}"></a>${defName}`;
            const header = writeHeader("", anchor, 4);
            return `${header}\n${makeDefinitionTable(defs[defName])}`;
        })
        .join("\n");
    return `${schema}${definitions}\n`;
}

function trimDefinitionsLink(def: string): string {
    return def.replace("#/definitions/", "");
}

function makeLink(s: string): string {
    const trimmed = trimDefinitionsLink(s);
    return `[${trimmed}](#${trimmed.replace(/`/g, "")})`;
}

function makeDefinitionTable(def: Definition): string {
    if (def.type !== "object") {
        if (def.anyOf) {
            return makeDefinitionType(def);
        } else if (def.type === "string") {
            return makeDefinitionType(def);
        } else if (def.type === "array") {
            return makeDefinitionType(def);
        }
        console.log("Not implemented 1");
        return "";
    }

    const isRequired = (prop: string) => {
        if (!def.required) {
            return false;
        }
        return def.required.indexOf(prop) > -1;
    };

    const headers = ["Property Name", "Required", "Description", "Type"];
    if (!def.properties) {
        if (def.type === "object") {
            return makeDefinitionType(def);
        } else {
            console.log("Not implemented 2");
            return "";
        }
    }
    const properties = Object.keys(def.properties).map((propName) => [
        propName,
        isRequired(propName) ? "yes" : "no",
        def.properties[propName].description,
        makeDefinitionType(def.properties[propName], true),
    ]);

    return writeTable("", [headers, ...properties], "table-definition");
}

function makeCommandParamater(name: string, command: MessageDefinition): string {
    let parameter = "";
    const header = `<a name="${name}"></a>${name}`;
    parameter = writeHeader(parameter, header, 2);

    parameter = writeHeader(parameter, "Type", 4);
    parameter = `${parameter}\`${command.output ? "operation" : "command"}\`\n`;

    parameter = writeHeader(parameter, "Input", 4);
    const input = makeDefinitionType(command.input);
    parameter = `${parameter}${input}\n`;

    if (command.output) {
        parameter = writeHeader(parameter, "Output", 4);
        const output = makeDefinitionType(command.output);
        parameter = `${parameter}${output}\n`;
    }

    return parameter;
}

function makeEventParamater(name: string, event: MessageDefinition): string {
    let parameter = "";
    const header = `<a name="${name}"></a>${name}`;
    parameter = writeHeader(parameter, header, 2);

    parameter = writeHeader(parameter, "Type", 4);
    parameter = `${parameter}\`event\`\n`;

    parameter = writeHeader(parameter, "Argument", 4);
    const input = makeDefinitionType(event.input);
    parameter = `${parameter}${input}\n`;

    return parameter;
}

function makeDefinitionType(def?: Definition, inTable: boolean = false): string {
    const separator = inTable ? "<br />" : "\n\n";
    if (!def) {
        return `\`null\``;
    } else if (def.$ref) {
        return makeLink(`\`${def.$ref}\``);
    } else if (def.type) {
        if (def.type !== "array") {
            return `\`${def.type}\``;
        } else {
            if (def.items && (def.items as Definition).$ref) {
                return `\`array\` of ${makeLink(`\`${(def.items as Definition).$ref}\``)}`;
            } else {
                const nestedDef = makeDefinitionType(def.items as Definition, inTable);
                const formattedDef = `<pre>${nestedDef}</pre>`;
                return `${separator}\`array\` of ${formattedDef}`;
            }
        }
    } else if (def.anyOf) {
        const anyOf = def.anyOf
            .map((option) => makeDefinitionType(option, inTable))
            .join(separator);
        return `Any of${separator}${anyOf}`;
    } else {
        return `\`unknown\``;
    }
}
