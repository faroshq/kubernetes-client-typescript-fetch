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
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 * @export
 * @interface V1beta3FlowDistinguisherMethod
 */
export interface V1beta3FlowDistinguisherMethod {
    /**
     * `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
     * @type {string}
     * @memberof V1beta3FlowDistinguisherMethod
     */
    type: string;
}

export function V1beta3FlowDistinguisherMethodFromJSON(json: any): V1beta3FlowDistinguisherMethod {
    return V1beta3FlowDistinguisherMethodFromJSONTyped(json, false);
}

export function V1beta3FlowDistinguisherMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3FlowDistinguisherMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function V1beta3FlowDistinguisherMethodToJSON(value?: V1beta3FlowDistinguisherMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

