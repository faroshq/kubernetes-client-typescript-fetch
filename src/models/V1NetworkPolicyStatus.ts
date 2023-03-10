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
    V1Condition,
    V1ConditionFromJSON,
    V1ConditionFromJSONTyped,
    V1ConditionToJSON,
} from './V1Condition';

/**
 * NetworkPolicyStatus describe the current state of the NetworkPolicy.
 * @export
 * @interface V1NetworkPolicyStatus
 */
export interface V1NetworkPolicyStatus {
    /**
     * Conditions holds an array of metav1.Condition that describe the state of the NetworkPolicy. Current service state
     * @type {Array<V1Condition>}
     * @memberof V1NetworkPolicyStatus
     */
    conditions?: Array<V1Condition>;
}

export function V1NetworkPolicyStatusFromJSON(json: any): V1NetworkPolicyStatus {
    return V1NetworkPolicyStatusFromJSONTyped(json, false);
}

export function V1NetworkPolicyStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NetworkPolicyStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1ConditionFromJSON)),
    };
}

export function V1NetworkPolicyStatusToJSON(value?: V1NetworkPolicyStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1ConditionToJSON)),
    };
}
