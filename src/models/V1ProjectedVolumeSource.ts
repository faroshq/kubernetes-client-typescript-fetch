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
    V1VolumeProjection,
    V1VolumeProjectionFromJSON,
    V1VolumeProjectionFromJSONTyped,
    V1VolumeProjectionToJSON,
} from './V1VolumeProjection';

/**
 * Represents a projected volume source
 * @export
 * @interface V1ProjectedVolumeSource
 */
export interface V1ProjectedVolumeSource {
    /**
     * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof V1ProjectedVolumeSource
     */
    defaultMode?: number;
    /**
     * sources is the list of volume projections
     * @type {Array<V1VolumeProjection>}
     * @memberof V1ProjectedVolumeSource
     */
    sources?: Array<V1VolumeProjection>;
}

export function V1ProjectedVolumeSourceFromJSON(json: any): V1ProjectedVolumeSource {
    return V1ProjectedVolumeSourceFromJSONTyped(json, false);
}

export function V1ProjectedVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ProjectedVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultMode': !exists(json, 'defaultMode') ? undefined : json['defaultMode'],
        'sources': !exists(json, 'sources') ? undefined : ((json['sources'] as Array<any>).map(V1VolumeProjectionFromJSON)),
    };
}

export function V1ProjectedVolumeSourceToJSON(value?: V1ProjectedVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultMode': value.defaultMode,
        'sources': value.sources === undefined ? undefined : ((value.sources as Array<any>).map(V1VolumeProjectionToJSON)),
    };
}

