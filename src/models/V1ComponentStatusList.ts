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
    V1ComponentStatus,
    V1ComponentStatusFromJSON,
    V1ComponentStatusFromJSONTyped,
    V1ComponentStatusToJSON,
} from './V1ComponentStatus';
import {
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+
 * @export
 * @interface V1ComponentStatusList
 */
export interface V1ComponentStatusList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ComponentStatusList
     */
    apiVersion?: string;
    /**
     * List of ComponentStatus objects.
     * @type {Array<V1ComponentStatus>}
     * @memberof V1ComponentStatusList
     */
    items: Array<V1ComponentStatus>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ComponentStatusList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1ComponentStatusList
     */
    metadata?: V1ListMeta;
}

export function V1ComponentStatusListFromJSON(json: any): V1ComponentStatusList {
    return V1ComponentStatusListFromJSONTyped(json, false);
}

export function V1ComponentStatusListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ComponentStatusList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1ComponentStatusFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1ComponentStatusListToJSON(value?: V1ComponentStatusList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1ComponentStatusToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

