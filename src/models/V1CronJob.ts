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
    V1CronJobSpec,
    V1CronJobSpecFromJSON,
    V1CronJobSpecFromJSONTyped,
    V1CronJobSpecToJSON,
} from './V1CronJobSpec';
import {
    V1CronJobStatus,
    V1CronJobStatusFromJSON,
    V1CronJobStatusFromJSONTyped,
    V1CronJobStatusToJSON,
} from './V1CronJobStatus';
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * CronJob represents the configuration of a single cron job.
 * @export
 * @interface V1CronJob
 */
export interface V1CronJob {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1CronJob
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1CronJob
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1CronJob
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1CronJobSpec}
     * @memberof V1CronJob
     */
    spec?: V1CronJobSpec;
    /**
     * 
     * @type {V1CronJobStatus}
     * @memberof V1CronJob
     */
    status?: V1CronJobStatus;
}

export function V1CronJobFromJSON(json: any): V1CronJob {
    return V1CronJobFromJSONTyped(json, false);
}

export function V1CronJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CronJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1CronJobSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1CronJobStatusFromJSON(json['status']),
    };
}

export function V1CronJobToJSON(value?: V1CronJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1CronJobSpecToJSON(value.spec),
        'status': V1CronJobStatusToJSON(value.status),
    };
}
