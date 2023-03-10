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
    V1LimitRangeItem,
    V1LimitRangeItemFromJSON,
    V1LimitRangeItemFromJSONTyped,
    V1LimitRangeItemToJSON,
} from './V1LimitRangeItem';

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 * @export
 * @interface V1LimitRangeSpec
 */
export interface V1LimitRangeSpec {
    /**
     * Limits is the list of LimitRangeItem objects that are enforced.
     * @type {Array<V1LimitRangeItem>}
     * @memberof V1LimitRangeSpec
     */
    limits: Array<V1LimitRangeItem>;
}

export function V1LimitRangeSpecFromJSON(json: any): V1LimitRangeSpec {
    return V1LimitRangeSpecFromJSONTyped(json, false);
}

export function V1LimitRangeSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LimitRangeSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limits': ((json['limits'] as Array<any>).map(V1LimitRangeItemFromJSON)),
    };
}

export function V1LimitRangeSpecToJSON(value?: V1LimitRangeSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limits': ((value.limits as Array<any>).map(V1LimitRangeItemToJSON)),
    };
}

