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
    V1beta3PriorityLevelConfigurationSpec,
    V1beta3PriorityLevelConfigurationSpecFromJSON,
    V1beta3PriorityLevelConfigurationSpecFromJSONTyped,
    V1beta3PriorityLevelConfigurationSpecToJSON,
} from './V1beta3PriorityLevelConfigurationSpec';
import {
    V1beta3PriorityLevelConfigurationStatus,
    V1beta3PriorityLevelConfigurationStatusFromJSON,
    V1beta3PriorityLevelConfigurationStatusFromJSONTyped,
    V1beta3PriorityLevelConfigurationStatusToJSON,
} from './V1beta3PriorityLevelConfigurationStatus';

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 * @export
 * @interface V1beta3PriorityLevelConfiguration
 */
export interface V1beta3PriorityLevelConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta3PriorityLevelConfiguration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta3PriorityLevelConfiguration
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta3PriorityLevelConfiguration
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta3PriorityLevelConfigurationSpec}
     * @memberof V1beta3PriorityLevelConfiguration
     */
    spec?: V1beta3PriorityLevelConfigurationSpec;
    /**
     * 
     * @type {V1beta3PriorityLevelConfigurationStatus}
     * @memberof V1beta3PriorityLevelConfiguration
     */
    status?: V1beta3PriorityLevelConfigurationStatus;
}

export function V1beta3PriorityLevelConfigurationFromJSON(json: any): V1beta3PriorityLevelConfiguration {
    return V1beta3PriorityLevelConfigurationFromJSONTyped(json, false);
}

export function V1beta3PriorityLevelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3PriorityLevelConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1beta3PriorityLevelConfigurationSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1beta3PriorityLevelConfigurationStatusFromJSON(json['status']),
    };
}

export function V1beta3PriorityLevelConfigurationToJSON(value?: V1beta3PriorityLevelConfiguration | null): any {
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
        'spec': V1beta3PriorityLevelConfigurationSpecToJSON(value.spec),
        'status': V1beta3PriorityLevelConfigurationStatusToJSON(value.status),
    };
}

