import React from "react";
import { Definition, MessageSchema } from "./schema";
import MessagingRef from "./MessagingRef";

interface MessagingArgumentProps {
    def: Definition;
    schema: MessageSchema;
}

export default function MessagingArgument(props: MessagingArgumentProps) {
    const { def, schema } = props;

    if (!def) {
        return <code>null</code>;
    } else if (def.$ref) {
        return <MessagingRef name={def.$ref} schema={schema} />;
    } else if (def.type) {
        if (def.type !== "array") {
            return <code>{def.type}</code>;
        } else if (def.items && (def.items as Definition).$ref) {
            const itemsRef = (def.items as Definition).$ref!;
            return <MessagingRef isArray name={itemsRef} schema={schema} />;
        } else {
            return <code>unknown</code>;
        }
    } else if (def.anyOf) {
        return (
            <>
                <div>Any of:</div>
                {def.anyOf.map((option, index) => (
                    // There's not a guaranteed safe identifier we can use for the key prop, fall back to index.
                    <div key={option.$ref || index}>
                        <MessagingArgument def={option} schema={schema} />
                    </div>
                ))}
            </>
        );
    } else {
        return <code>unknown</code>;
    }
}
