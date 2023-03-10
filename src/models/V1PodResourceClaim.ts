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
    V1ClaimSource,
    V1ClaimSourceFromJSON,
    V1ClaimSourceFromJSONTyped,
    V1ClaimSourceToJSON,
} from './V1ClaimSource';

/**
 * PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
 * @export
 * @interface V1PodResourceClaim
 */
export interface V1PodResourceClaim {
    /**
     * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
     * @type {string}
     * @memberof V1PodResourceClaim
     */
    name: string;
    /**
     * 
     * @type {V1ClaimSource}
     * @memberof V1PodResourceClaim
     */
    source?: V1ClaimSource;
}

export function V1PodResourceClaimFromJSON(json: any): V1PodResourceClaim {
    return V1PodResourceClaimFromJSONTyped(json, false);
}

export function V1PodResourceClaimFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodResourceClaim {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'source': !exists(json, 'source') ? undefined : V1ClaimSourceFromJSON(json['source']),
    };
}

export function V1PodResourceClaimToJSON(value?: V1PodResourceClaim | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'source': V1ClaimSourceToJSON(value.source),
    };
}
