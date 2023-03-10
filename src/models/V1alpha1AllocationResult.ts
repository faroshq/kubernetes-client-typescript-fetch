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
    V1NodeSelector,
    V1NodeSelectorFromJSON,
    V1NodeSelectorFromJSONTyped,
    V1NodeSelectorToJSON,
} from './V1NodeSelector';

/**
 * AllocationResult contains attributed of an allocated resource.
 * @export
 * @interface V1alpha1AllocationResult
 */
export interface V1alpha1AllocationResult {
    /**
     * 
     * @type {V1NodeSelector}
     * @memberof V1alpha1AllocationResult
     */
    availableOnNodes?: V1NodeSelector;
    /**
     * ResourceHandle contains arbitrary data returned by the driver after a successful allocation. This is opaque for Kubernetes. Driver documentation may explain to users how to interpret this data if needed.
     * 
     * The maximum size of this field is 16KiB. This may get increased in the future, but not reduced.
     * @type {string}
     * @memberof V1alpha1AllocationResult
     */
    resourceHandle?: string;
    /**
     * Shareable determines whether the resource supports more than one consumer at a time.
     * @type {boolean}
     * @memberof V1alpha1AllocationResult
     */
    shareable?: boolean;
}

export function V1alpha1AllocationResultFromJSON(json: any): V1alpha1AllocationResult {
    return V1alpha1AllocationResultFromJSONTyped(json, false);
}

export function V1alpha1AllocationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1AllocationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableOnNodes': !exists(json, 'availableOnNodes') ? undefined : V1NodeSelectorFromJSON(json['availableOnNodes']),
        'resourceHandle': !exists(json, 'resourceHandle') ? undefined : json['resourceHandle'],
        'shareable': !exists(json, 'shareable') ? undefined : json['shareable'],
    };
}

export function V1alpha1AllocationResultToJSON(value?: V1alpha1AllocationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableOnNodes': V1NodeSelectorToJSON(value.availableOnNodes),
        'resourceHandle': value.resourceHandle,
        'shareable': value.shareable,
    };
}
