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
    V2MetricIdentifier,
    V2MetricIdentifierFromJSON,
    V2MetricIdentifierFromJSONTyped,
    V2MetricIdentifierToJSON,
} from './V2MetricIdentifier';
import {
    V2MetricValueStatus,
    V2MetricValueStatusFromJSON,
    V2MetricValueStatusFromJSONTyped,
    V2MetricValueStatusToJSON,
} from './V2MetricValueStatus';

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 * @export
 * @interface V2PodsMetricStatus
 */
export interface V2PodsMetricStatus {
    /**
     * 
     * @type {V2MetricValueStatus}
     * @memberof V2PodsMetricStatus
     */
    current: V2MetricValueStatus;
    /**
     * 
     * @type {V2MetricIdentifier}
     * @memberof V2PodsMetricStatus
     */
    metric: V2MetricIdentifier;
}

export function V2PodsMetricStatusFromJSON(json: any): V2PodsMetricStatus {
    return V2PodsMetricStatusFromJSONTyped(json, false);
}

export function V2PodsMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2PodsMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': V2MetricValueStatusFromJSON(json['current']),
        'metric': V2MetricIdentifierFromJSON(json['metric']),
    };
}

export function V2PodsMetricStatusToJSON(value?: V2PodsMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': V2MetricValueStatusToJSON(value.current),
        'metric': V2MetricIdentifierToJSON(value.metric),
    };
}

