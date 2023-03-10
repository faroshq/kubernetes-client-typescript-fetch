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
 * SELinuxOptions are the labels to be applied to the container
 * @export
 * @interface V1SELinuxOptions
 */
export interface V1SELinuxOptions {
    /**
     * Level is SELinux level label that applies to the container.
     * @type {string}
     * @memberof V1SELinuxOptions
     */
    level?: string;
    /**
     * Role is a SELinux role label that applies to the container.
     * @type {string}
     * @memberof V1SELinuxOptions
     */
    role?: string;
    /**
     * Type is a SELinux type label that applies to the container.
     * @type {string}
     * @memberof V1SELinuxOptions
     */
    type?: string;
    /**
     * User is a SELinux user label that applies to the container.
     * @type {string}
     * @memberof V1SELinuxOptions
     */
    user?: string;
}

export function V1SELinuxOptionsFromJSON(json: any): V1SELinuxOptions {
    return V1SELinuxOptionsFromJSONTyped(json, false);
}

export function V1SELinuxOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SELinuxOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'level': !exists(json, 'level') ? undefined : json['level'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function V1SELinuxOptionsToJSON(value?: V1SELinuxOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'level': value.level,
        'role': value.role,
        'type': value.type,
        'user': value.user,
    };
}
