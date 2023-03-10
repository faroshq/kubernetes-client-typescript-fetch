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
    V1beta3FlowSchemaSpec,
    V1beta3FlowSchemaSpecFromJSON,
    V1beta3FlowSchemaSpecFromJSONTyped,
    V1beta3FlowSchemaSpecToJSON,
} from './V1beta3FlowSchemaSpec';
import {
    V1beta3FlowSchemaStatus,
    V1beta3FlowSchemaStatusFromJSON,
    V1beta3FlowSchemaStatusFromJSONTyped,
    V1beta3FlowSchemaStatusToJSON,
} from './V1beta3FlowSchemaStatus';

/**
 * FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
 * @export
 * @interface V1beta3FlowSchema
 */
export interface V1beta3FlowSchema {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta3FlowSchema
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta3FlowSchema
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta3FlowSchema
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta3FlowSchemaSpec}
     * @memberof V1beta3FlowSchema
     */
    spec?: V1beta3FlowSchemaSpec;
    /**
     * 
     * @type {V1beta3FlowSchemaStatus}
     * @memberof V1beta3FlowSchema
     */
    status?: V1beta3FlowSchemaStatus;
}

export function V1beta3FlowSchemaFromJSON(json: any): V1beta3FlowSchema {
    return V1beta3FlowSchemaFromJSONTyped(json, false);
}

export function V1beta3FlowSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3FlowSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1beta3FlowSchemaSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1beta3FlowSchemaStatusFromJSON(json['status']),
    };
}

export function V1beta3FlowSchemaToJSON(value?: V1beta3FlowSchema | null): any {
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
        'spec': V1beta3FlowSchemaSpecToJSON(value.spec),
        'status': V1beta3FlowSchemaStatusToJSON(value.status),
    };
}

