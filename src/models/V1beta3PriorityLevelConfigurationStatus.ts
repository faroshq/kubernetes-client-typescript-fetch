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
    V1beta3PriorityLevelConfigurationCondition,
    V1beta3PriorityLevelConfigurationConditionFromJSON,
    V1beta3PriorityLevelConfigurationConditionFromJSONTyped,
    V1beta3PriorityLevelConfigurationConditionToJSON,
} from './V1beta3PriorityLevelConfigurationCondition';

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 * @export
 * @interface V1beta3PriorityLevelConfigurationStatus
 */
export interface V1beta3PriorityLevelConfigurationStatus {
    /**
     * `conditions` is the current state of "request-priority".
     * @type {Array<V1beta3PriorityLevelConfigurationCondition>}
     * @memberof V1beta3PriorityLevelConfigurationStatus
     */
    conditions?: Array<V1beta3PriorityLevelConfigurationCondition>;
}

export function V1beta3PriorityLevelConfigurationStatusFromJSON(json: any): V1beta3PriorityLevelConfigurationStatus {
    return V1beta3PriorityLevelConfigurationStatusFromJSONTyped(json, false);
}

export function V1beta3PriorityLevelConfigurationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3PriorityLevelConfigurationStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1beta3PriorityLevelConfigurationConditionFromJSON)),
    };
}

export function V1beta3PriorityLevelConfigurationStatusToJSON(value?: V1beta3PriorityLevelConfigurationStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1beta3PriorityLevelConfigurationConditionToJSON)),
    };
}

