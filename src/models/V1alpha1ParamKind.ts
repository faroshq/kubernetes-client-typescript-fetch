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
 * ParamKind is a tuple of Group Kind and Version.
 * @export
 * @interface V1alpha1ParamKind
 */
export interface V1alpha1ParamKind {
    /**
     * APIVersion is the API group version the resources belong to. In format of "group/version". Required.
     * @type {string}
     * @memberof V1alpha1ParamKind
     */
    apiVersion?: string;
    /**
     * Kind is the API kind the resources belong to. Required.
     * @type {string}
     * @memberof V1alpha1ParamKind
     */
    kind?: string;
}

export function V1alpha1ParamKindFromJSON(json: any): V1alpha1ParamKind {
    return V1alpha1ParamKindFromJSONTyped(json, false);
}

export function V1alpha1ParamKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ParamKind {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
    };
}

export function V1alpha1ParamKindToJSON(value?: V1alpha1ParamKind | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
    };
}
