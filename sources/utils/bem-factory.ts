type BemFactory = {
    block: (modifierName?: string) => string;
    element: (elementName: string, modifierName?: string) => string;
};

export default function bemFactory(baseClassName: string): BemFactory {
    return {
        block: (modifierName?: string) => {
            return modifierName ? `${baseClassName} ${baseClassName}--${modifierName}` : baseClassName;
        },
        element: (elementName: string, modifierName?: string) => {
            return modifierName
                ? `${baseClassName}__${elementName} ${baseClassName}__${elementName}--${modifierName}`
                : `${baseClassName}__${elementName}`;
        }
    };
}
