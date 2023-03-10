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
    V1DownwardAPIVolumeFile,
    V1DownwardAPIVolumeFileFromJSON,
    V1DownwardAPIVolumeFileFromJSONTyped,
    V1DownwardAPIVolumeFileToJSON,
} from './V1DownwardAPIVolumeFile';

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 * @export
 * @interface V1DownwardAPIProjection
 */
export interface V1DownwardAPIProjection {
    /**
     * Items is a list of DownwardAPIVolume file
     * @type {Array<V1DownwardAPIVolumeFile>}
     * @memberof V1DownwardAPIProjection
     */
    items?: Array<V1DownwardAPIVolumeFile>;
}

export function V1DownwardAPIProjectionFromJSON(json: any): V1DownwardAPIProjection {
    return V1DownwardAPIProjectionFromJSONTyped(json, false);
}

export function V1DownwardAPIProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DownwardAPIProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(V1DownwardAPIVolumeFileFromJSON)),
    };
}

export function V1DownwardAPIProjectionToJSON(value?: V1DownwardAPIProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(V1DownwardAPIVolumeFileToJSON)),
    };
}

