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
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 * @export
 * @interface V1PodDisruptionBudgetStatus
 */
export interface V1PodDisruptionBudgetStatus {
    /**
     * Conditions contain conditions for PDB. The disruption controller sets the DisruptionAllowed condition. The following are known values for the reason field (additional reasons could be added in the future): - SyncFailed: The controller encountered an error and wasn't able to compute
     *               the number of allowed disruptions. Therefore no disruptions are
     *               allowed and the status of the condition will be False.
     * - InsufficientPods: The number of pods are either at or below the number
     *                     required by the PodDisruptionBudget. No disruptions are
     *                     allowed and the status of the condition will be False.
     * - SufficientPods: There are more pods than required by the PodDisruptionBudget.
     *                   The condition will be True, and the number of allowed
     *                   disruptions are provided by the disruptionsAllowed property.
     * @type {Array<V1Condition>}
     * @memberof V1PodDisruptionBudgetStatus
     */
    conditions?: Array<V1Condition>;
    /**
     * current number of healthy pods
     * @type {number}
     * @memberof V1PodDisruptionBudgetStatus
     */
    currentHealthy: number;
    /**
     * minimum desired number of healthy pods
     * @type {number}
     * @memberof V1PodDisruptionBudgetStatus
     */
    desiredHealthy: number;
    /**
     * DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
     * @type {{ [key: string]: Date; }}
     * @memberof V1PodDisruptionBudgetStatus
     */
    disruptedPods?: { [key: string]: Date; };
    /**
     * Number of pod disruptions that are currently allowed.
     * @type {number}
     * @memberof V1PodDisruptionBudgetStatus
     */
    disruptionsAllowed: number;
    /**
     * total number of pods counted by this disruption budget
     * @type {number}
     * @memberof V1PodDisruptionBudgetStatus
     */
    expectedPods: number;
    /**
     * Most recent generation observed when updating this PDB status. DisruptionsAllowed and other status information is valid only if observedGeneration equals to PDB's object generation.
     * @type {number}
     * @memberof V1PodDisruptionBudgetStatus
     */
    observedGeneration?: number;
}

export function V1PodDisruptionBudgetStatusFromJSON(json: any): V1PodDisruptionBudgetStatus {
    return V1PodDisruptionBudgetStatusFromJSONTyped(json, false);
}

export function V1PodDisruptionBudgetStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodDisruptionBudgetStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1ConditionFromJSON)),
        'currentHealthy': json['currentHealthy'],
        'desiredHealthy': json['desiredHealthy'],
        'disruptedPods': !exists(json, 'disruptedPods') ? undefined : json['disruptedPods'],
        'disruptionsAllowed': json['disruptionsAllowed'],
        'expectedPods': json['expectedPods'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
    };
}

export function V1PodDisruptionBudgetStatusToJSON(value?: V1PodDisruptionBudgetStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1ConditionToJSON)),
        'currentHealthy': value.currentHealthy,
        'desiredHealthy': value.desiredHealthy,
        'disruptedPods': value.disruptedPods,
        'disruptionsAllowed': value.disruptionsAllowed,
        'expectedPods': value.expectedPods,
        'observedGeneration': value.observedGeneration,
    };
}

