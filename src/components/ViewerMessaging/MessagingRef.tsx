import React, { useState } from "react";
import { MessageSchema } from "./schema";
import { trimDefinitionsName } from "./utils";

interface MessagingRefProps {
    isArray?: boolean;
    name: string;
    schema: MessageSchema;
}

export default function MessagingRef(props: MessagingRefProps) {
    const { isArray, name, schema } = props;

    const [isOpen, setIsOpen] = useState(false);

    const refIsLinkable = !!schema.definitions[trimDefinitionsName(name)];
    const trimmedName = trimDefinitionsName(name);

    if (refIsLinkable) {
        return (
            <div>
                <code>
                    <button
                        className="button button--link"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {trimmedName}
                        {isArray && "[]"}
                    </button>
                </code>
                {isOpen && <div>Open!</div>}
            </div>
        );
    }

    return (
        <code>
            {trimmedName}
            {isArray && "[]"}
        </code>
    );
}
