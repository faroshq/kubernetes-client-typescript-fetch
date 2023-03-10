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
 * Sysctl defines a kernel parameter to be set
 * @export
 * @interface V1Sysctl
 */
export interface V1Sysctl {
    /**
     * Name of a property to set
     * @type {string}
     * @memberof V1Sysctl
     */
    name: string;
    /**
     * Value of a property to set
     * @type {string}
     * @memberof V1Sysctl
     */
    value: string;
}

export function V1SysctlFromJSON(json: any): V1Sysctl {
    return V1SysctlFromJSONTyped(json, false);
}

export function V1SysctlFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Sysctl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function V1SysctlToJSON(value?: V1Sysctl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

