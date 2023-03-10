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
 * ResourceClassParametersReference contains enough information to let you locate the parameters for a ResourceClass.
 * @export
 * @interface V1alpha1ResourceClassParametersReference
 */
export interface V1alpha1ResourceClassParametersReference {
    /**
     * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
     * @type {string}
     * @memberof V1alpha1ResourceClassParametersReference
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced. This is the same value as in the parameter object's metadata.
     * @type {string}
     * @memberof V1alpha1ResourceClassParametersReference
     */
    kind: string;
    /**
     * Name is the name of resource being referenced.
     * @type {string}
     * @memberof V1alpha1ResourceClassParametersReference
     */
    name: string;
    /**
     * Namespace that contains the referenced resource. Must be empty for cluster-scoped resources and non-empty for namespaced resources.
     * @type {string}
     * @memberof V1alpha1ResourceClassParametersReference
     */
    namespace?: string;
}

export function V1alpha1ResourceClassParametersReferenceFromJSON(json: any): V1alpha1ResourceClassParametersReference {
    return V1alpha1ResourceClassParametersReferenceFromJSONTyped(json, false);
}

export function V1alpha1ResourceClassParametersReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ResourceClassParametersReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroup': !exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function V1alpha1ResourceClassParametersReferenceToJSON(value?: V1alpha1ResourceClassParametersReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
        'namespace': value.namespace,
    };
}

