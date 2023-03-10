export type IntOrString = number | string;

export function IntOrStringFromJSON(json: any): IntOrString {
    return json;
}

export function IntOrStringToJSON(value?: IntOrString | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return value;
}

export function IntOrStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntOrString {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return json;
}
