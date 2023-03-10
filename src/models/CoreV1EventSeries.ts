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
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 * @export
 * @interface CoreV1EventSeries
 */
export interface CoreV1EventSeries {
    /**
     * Number of occurrences in this series up to the last heartbeat time
     * @type {number}
     * @memberof CoreV1EventSeries
     */
    count?: number;
    /**
     * MicroTime is version of Time with microsecond level precision.
     * @type {Date}
     * @memberof CoreV1EventSeries
     */
    lastObservedTime?: Date;
}

export function CoreV1EventSeriesFromJSON(json: any): CoreV1EventSeries {
    return CoreV1EventSeriesFromJSONTyped(json, false);
}

export function CoreV1EventSeriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoreV1EventSeries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'lastObservedTime': !exists(json, 'lastObservedTime') ? undefined : (new Date(json['lastObservedTime'])),
    };
}

export function CoreV1EventSeriesToJSON(value?: CoreV1EventSeries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'lastObservedTime': value.lastObservedTime === undefined ? undefined : (value.lastObservedTime.toISOString()),
    };
}

