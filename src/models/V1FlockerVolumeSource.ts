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
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1FlockerVolumeSource
 */
export interface V1FlockerVolumeSource {
    /**
     * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
     * @type {string}
     * @memberof V1FlockerVolumeSource
     */
    datasetName?: string;
    /**
     * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
     * @type {string}
     * @memberof V1FlockerVolumeSource
     */
    datasetUUID?: string;
}

export function V1FlockerVolumeSourceFromJSON(json: any): V1FlockerVolumeSource {
    return V1FlockerVolumeSourceFromJSONTyped(json, false);
}

export function V1FlockerVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FlockerVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'datasetName': !exists(json, 'datasetName') ? undefined : json['datasetName'],
        'datasetUUID': !exists(json, 'datasetUUID') ? undefined : json['datasetUUID'],
    };
}

export function V1FlockerVolumeSourceToJSON(value?: V1FlockerVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'datasetName': value.datasetName,
        'datasetUUID': value.datasetUUID,
    };
}
