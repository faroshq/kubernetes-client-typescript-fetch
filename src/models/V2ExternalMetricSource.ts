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
    V2MetricTarget,
    V2MetricTargetFromJSON,
    V2MetricTargetFromJSONTyped,
    V2MetricTargetToJSON,
} from './V2MetricTarget';

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 * @export
 * @interface V2ExternalMetricSource
 */
export interface V2ExternalMetricSource {
    /**
     * 
     * @type {V2MetricIdentifier}
     * @memberof V2ExternalMetricSource
     */
    metric: V2MetricIdentifier;
    /**
     * 
     * @type {V2MetricTarget}
     * @memberof V2ExternalMetricSource
     */
    target: V2MetricTarget;
}

export function V2ExternalMetricSourceFromJSON(json: any): V2ExternalMetricSource {
    return V2ExternalMetricSourceFromJSONTyped(json, false);
}

export function V2ExternalMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ExternalMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metric': V2MetricIdentifierFromJSON(json['metric']),
        'target': V2MetricTargetFromJSON(json['target']),
    };
}

export function V2ExternalMetricSourceToJSON(value?: V2ExternalMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metric': V2MetricIdentifierToJSON(value.metric),
        'target': V2MetricTargetToJSON(value.target),
    };
}

