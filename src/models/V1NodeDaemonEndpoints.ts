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
    V1DaemonEndpoint,
    V1DaemonEndpointFromJSON,
    V1DaemonEndpointFromJSONTyped,
    V1DaemonEndpointToJSON,
} from './V1DaemonEndpoint';

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 * @export
 * @interface V1NodeDaemonEndpoints
 */
export interface V1NodeDaemonEndpoints {
    /**
     * 
     * @type {V1DaemonEndpoint}
     * @memberof V1NodeDaemonEndpoints
     */
    kubeletEndpoint?: V1DaemonEndpoint;
}

export function V1NodeDaemonEndpointsFromJSON(json: any): V1NodeDaemonEndpoints {
    return V1NodeDaemonEndpointsFromJSONTyped(json, false);
}

export function V1NodeDaemonEndpointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeDaemonEndpoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kubeletEndpoint': !exists(json, 'kubeletEndpoint') ? undefined : V1DaemonEndpointFromJSON(json['kubeletEndpoint']),
    };
}

export function V1NodeDaemonEndpointsToJSON(value?: V1NodeDaemonEndpoints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kubeletEndpoint': V1DaemonEndpointToJSON(value.kubeletEndpoint),
    };
}

