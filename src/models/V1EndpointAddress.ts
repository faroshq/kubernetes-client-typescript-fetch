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
    V1ObjectReference,
    V1ObjectReferenceFromJSON,
    V1ObjectReferenceFromJSONTyped,
    V1ObjectReferenceToJSON,
} from './V1ObjectReference';

/**
 * EndpointAddress is a tuple that describes single IP address.
 * @export
 * @interface V1EndpointAddress
 */
export interface V1EndpointAddress {
    /**
     * The Hostname of this endpoint
     * @type {string}
     * @memberof V1EndpointAddress
     */
    hostname?: string;
    /**
     * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready.
     * @type {string}
     * @memberof V1EndpointAddress
     */
    ip: string;
    /**
     * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
     * @type {string}
     * @memberof V1EndpointAddress
     */
    nodeName?: string;
    /**
     * 
     * @type {V1ObjectReference}
     * @memberof V1EndpointAddress
     */
    targetRef?: V1ObjectReference;
}

export function V1EndpointAddressFromJSON(json: any): V1EndpointAddress {
    return V1EndpointAddressFromJSONTyped(json, false);
}

export function V1EndpointAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EndpointAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'ip': json['ip'],
        'nodeName': !exists(json, 'nodeName') ? undefined : json['nodeName'],
        'targetRef': !exists(json, 'targetRef') ? undefined : V1ObjectReferenceFromJSON(json['targetRef']),
    };
}

export function V1EndpointAddressToJSON(value?: V1EndpointAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostname': value.hostname,
        'ip': value.ip,
        'nodeName': value.nodeName,
        'targetRef': V1ObjectReferenceToJSON(value.targetRef),
    };
}
