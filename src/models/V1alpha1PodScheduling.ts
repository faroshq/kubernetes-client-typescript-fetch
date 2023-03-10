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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import {
    V1alpha1PodSchedulingSpec,
    V1alpha1PodSchedulingSpecFromJSON,
    V1alpha1PodSchedulingSpecFromJSONTyped,
    V1alpha1PodSchedulingSpecToJSON,
} from './V1alpha1PodSchedulingSpec';
import {
    V1alpha1PodSchedulingStatus,
    V1alpha1PodSchedulingStatusFromJSON,
    V1alpha1PodSchedulingStatusFromJSONTyped,
    V1alpha1PodSchedulingStatusToJSON,
} from './V1alpha1PodSchedulingStatus';

/**
 * PodScheduling objects hold information that is needed to schedule a Pod with ResourceClaims that use "WaitForFirstConsumer" allocation mode.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 * @export
 * @interface V1alpha1PodScheduling
 */
export interface V1alpha1PodScheduling {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1PodScheduling
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1PodScheduling
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha1PodScheduling
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1alpha1PodSchedulingSpec}
     * @memberof V1alpha1PodScheduling
     */
    spec: V1alpha1PodSchedulingSpec;
    /**
     * 
     * @type {V1alpha1PodSchedulingStatus}
     * @memberof V1alpha1PodScheduling
     */
    status?: V1alpha1PodSchedulingStatus;
}

export function V1alpha1PodSchedulingFromJSON(json: any): V1alpha1PodScheduling {
    return V1alpha1PodSchedulingFromJSONTyped(json, false);
}

export function V1alpha1PodSchedulingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1PodScheduling {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1PodSchedulingSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1alpha1PodSchedulingStatusFromJSON(json['status']),
    };
}

export function V1alpha1PodSchedulingToJSON(value?: V1alpha1PodScheduling | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1alpha1PodSchedulingSpecToJSON(value.spec),
        'status': V1alpha1PodSchedulingStatusToJSON(value.status),
    };
}
