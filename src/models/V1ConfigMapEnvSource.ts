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
/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 * 
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 * @export
 * @interface V1ConfigMapEnvSource
 */
export interface V1ConfigMapEnvSource {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1ConfigMapEnvSource
     */
    name?: string;
    /**
     * Specify whether the ConfigMap must be defined
     * @type {boolean}
     * @memberof V1ConfigMapEnvSource
     */
    optional?: boolean;
}

export function V1ConfigMapEnvSourceFromJSON(json: any): V1ConfigMapEnvSource {
    return V1ConfigMapEnvSourceFromJSONTyped(json, false);
}

export function V1ConfigMapEnvSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConfigMapEnvSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'optional': !exists(json, 'optional') ? undefined : json['optional'],
    };
}

export function V1ConfigMapEnvSourceToJSON(value?: V1ConfigMapEnvSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'optional': value.optional,
    };
}

