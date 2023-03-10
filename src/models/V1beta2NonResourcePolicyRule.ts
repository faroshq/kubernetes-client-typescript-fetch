/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.26.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request.
 * @export
 * @interface V1beta2NonResourcePolicyRule
 */
export interface V1beta2NonResourcePolicyRule {
    /**
     * `nonResourceURLs` is a set of url prefixes that a user should have access to and may not be empty. For example:
     *   - "/healthz" is legal
     *   - "/hea*" is illegal
     *   - "/hea" is legal but matches nothing
     *   - "/hea/*" also matches nothing
     *   - "/healthz/*" matches all per-component health checks.
     * "*" matches all non-resource urls. if it is present, it must be the only entry. Required.
     * @type {Array<string>}
     * @memberof V1beta2NonResourcePolicyRule
     */
    nonResourceURLs: Array<string>;
    /**
     * `verbs` is a list of matching verbs and may not be empty. "*" matches all verbs. If it is present, it must be the only entry. Required.
     * @type {Array<string>}
     * @memberof V1beta2NonResourcePolicyRule
     */
    verbs: Array<string>;
}

export function V1beta2NonResourcePolicyRuleFromJSON(json: any): V1beta2NonResourcePolicyRule {
    return V1beta2NonResourcePolicyRuleFromJSONTyped(json, false);
}

export function V1beta2NonResourcePolicyRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2NonResourcePolicyRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonResourceURLs': json['nonResourceURLs'],
        'verbs': json['verbs'],
    };
}

export function V1beta2NonResourcePolicyRuleToJSON(value?: V1beta2NonResourcePolicyRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonResourceURLs': value.nonResourceURLs,
        'verbs': value.verbs,
    };
}

