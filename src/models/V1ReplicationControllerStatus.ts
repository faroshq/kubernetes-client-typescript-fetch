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
    V1ReplicationControllerCondition,
    V1ReplicationControllerConditionFromJSON,
    V1ReplicationControllerConditionFromJSONTyped,
    V1ReplicationControllerConditionToJSON,
} from './V1ReplicationControllerCondition';

/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 * @export
 * @interface V1ReplicationControllerStatus
 */
export interface V1ReplicationControllerStatus {
    /**
     * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
     * @type {number}
     * @memberof V1ReplicationControllerStatus
     */
    availableReplicas?: number;
    /**
     * Represents the latest available observations of a replication controller's current state.
     * @type {Array<V1ReplicationControllerCondition>}
     * @memberof V1ReplicationControllerStatus
     */
    conditions?: Array<V1ReplicationControllerCondition>;
    /**
     * The number of pods that have labels matching the labels of the pod template of the replication controller.
     * @type {number}
     * @memberof V1ReplicationControllerStatus
     */
    fullyLabeledReplicas?: number;
    /**
     * ObservedGeneration reflects the generation of the most recently observed replication controller.
     * @type {number}
     * @memberof V1ReplicationControllerStatus
     */
    observedGeneration?: number;
    /**
     * The number of ready replicas for this replication controller.
     * @type {number}
     * @memberof V1ReplicationControllerStatus
     */
    readyReplicas?: number;
    /**
     * Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
     * @type {number}
     * @memberof V1ReplicationControllerStatus
     */
    replicas: number;
}

export function V1ReplicationControllerStatusFromJSON(json: any): V1ReplicationControllerStatus {
    return V1ReplicationControllerStatusFromJSONTyped(json, false);
}

export function V1ReplicationControllerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicationControllerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableReplicas': !exists(json, 'availableReplicas') ? undefined : json['availableReplicas'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1ReplicationControllerConditionFromJSON)),
        'fullyLabeledReplicas': !exists(json, 'fullyLabeledReplicas') ? undefined : json['fullyLabeledReplicas'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'readyReplicas': !exists(json, 'readyReplicas') ? undefined : json['readyReplicas'],
        'replicas': json['replicas'],
    };
}

export function V1ReplicationControllerStatusToJSON(value?: V1ReplicationControllerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableReplicas': value.availableReplicas,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1ReplicationControllerConditionToJSON)),
        'fullyLabeledReplicas': value.fullyLabeledReplicas,
        'observedGeneration': value.observedGeneration,
        'readyReplicas': value.readyReplicas,
        'replicas': value.replicas,
    };
}

