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
 * SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.
 * @export
 * @interface V1SeccompProfile
 */
export interface V1SeccompProfile {
    /**
     * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
     * @type {string}
     * @memberof V1SeccompProfile
     */
    localhostProfile?: string;
    /**
     * type indicates which kind of seccomp profile will be applied. Valid options are:
     * 
     * Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
     * @type {string}
     * @memberof V1SeccompProfile
     */
    type: string;
}

export function V1SeccompProfileFromJSON(json: any): V1SeccompProfile {
    return V1SeccompProfileFromJSONTyped(json, false);
}

export function V1SeccompProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SeccompProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localhostProfile': !exists(json, 'localhostProfile') ? undefined : json['localhostProfile'],
        'type': json['type'],
    };
}

export function V1SeccompProfileToJSON(value?: V1SeccompProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localhostProfile': value.localhostProfile,
        'type': value.type,
    };
}
