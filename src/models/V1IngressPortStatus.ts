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
 * IngressPortStatus represents the error condition of a service port
 * @export
 * @interface V1IngressPortStatus
 */
export interface V1IngressPortStatus {
    /**
     * Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
     *   CamelCase names
     * - cloud provider specific error values must have names that comply with the
     *   format foo.example.com/CamelCase.
     * @type {string}
     * @memberof V1IngressPortStatus
     */
    error?: string;
    /**
     * Port is the port number of the ingress port.
     * @type {number}
     * @memberof V1IngressPortStatus
     */
    port: number;
    /**
     * Protocol is the protocol of the ingress port. The supported values are: "TCP", "UDP", "SCTP"
     * @type {string}
     * @memberof V1IngressPortStatus
     */
    protocol: string;
}

export function V1IngressPortStatusFromJSON(json: any): V1IngressPortStatus {
    return V1IngressPortStatusFromJSONTyped(json, false);
}

export function V1IngressPortStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressPortStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'port': json['port'],
        'protocol': json['protocol'],
    };
}

export function V1IngressPortStatusToJSON(value?: V1IngressPortStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'port': value.port,
        'protocol': value.protocol,
    };
}
