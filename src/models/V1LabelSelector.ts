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
import {
    V1LabelSelectorRequirement,
    V1LabelSelectorRequirementFromJSON,
    V1LabelSelectorRequirementFromJSONTyped,
    V1LabelSelectorRequirementToJSON,
} from './V1LabelSelectorRequirement';

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 * @export
 * @interface V1LabelSelector
 */
export interface V1LabelSelector {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     * @type {Array<V1LabelSelectorRequirement>}
     * @memberof V1LabelSelector
     */
    matchExpressions?: Array<V1LabelSelectorRequirement>;
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
     * @type {{ [key: string]: string; }}
     * @memberof V1LabelSelector
     */
    matchLabels?: { [key: string]: string; };
}

export function V1LabelSelectorFromJSON(json: any): V1LabelSelector {
    return V1LabelSelectorFromJSONTyped(json, false);
}

export function V1LabelSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LabelSelector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'matchExpressions': !exists(json, 'matchExpressions') ? undefined : ((json['matchExpressions'] as Array<any>).map(V1LabelSelectorRequirementFromJSON)),
        'matchLabels': !exists(json, 'matchLabels') ? undefined : json['matchLabels'],
    };
}

export function V1LabelSelectorToJSON(value?: V1LabelSelector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'matchExpressions': value.matchExpressions === undefined ? undefined : ((value.matchExpressions as Array<any>).map(V1LabelSelectorRequirementToJSON)),
        'matchLabels': value.matchLabels,
    };
}
