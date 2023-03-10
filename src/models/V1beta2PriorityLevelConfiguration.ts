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
    V1beta2PriorityLevelConfigurationSpec,
    V1beta2PriorityLevelConfigurationSpecFromJSON,
    V1beta2PriorityLevelConfigurationSpecFromJSONTyped,
    V1beta2PriorityLevelConfigurationSpecToJSON,
} from './V1beta2PriorityLevelConfigurationSpec';
import {
    V1beta2PriorityLevelConfigurationStatus,
    V1beta2PriorityLevelConfigurationStatusFromJSON,
    V1beta2PriorityLevelConfigurationStatusFromJSONTyped,
    V1beta2PriorityLevelConfigurationStatusToJSON,
} from './V1beta2PriorityLevelConfigurationStatus';

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 * @export
 * @interface V1beta2PriorityLevelConfiguration
 */
export interface V1beta2PriorityLevelConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta2PriorityLevelConfiguration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta2PriorityLevelConfiguration
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta2PriorityLevelConfiguration
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta2PriorityLevelConfigurationSpec}
     * @memberof V1beta2PriorityLevelConfiguration
     */
    spec?: V1beta2PriorityLevelConfigurationSpec;
    /**
     * 
     * @type {V1beta2PriorityLevelConfigurationStatus}
     * @memberof V1beta2PriorityLevelConfiguration
     */
    status?: V1beta2PriorityLevelConfigurationStatus;
}

export function V1beta2PriorityLevelConfigurationFromJSON(json: any): V1beta2PriorityLevelConfiguration {
    return V1beta2PriorityLevelConfigurationFromJSONTyped(json, false);
}

export function V1beta2PriorityLevelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2PriorityLevelConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1beta2PriorityLevelConfigurationSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1beta2PriorityLevelConfigurationStatusFromJSON(json['status']),
    };
}

export function V1beta2PriorityLevelConfigurationToJSON(value?: V1beta2PriorityLevelConfiguration | null): any {
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
        'spec': V1beta2PriorityLevelConfigurationSpecToJSON(value.spec),
        'status': V1beta2PriorityLevelConfigurationStatusToJSON(value.status),
    };
}
