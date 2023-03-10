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
    V1CustomResourceColumnDefinition,
    V1CustomResourceColumnDefinitionFromJSON,
    V1CustomResourceColumnDefinitionFromJSONTyped,
    V1CustomResourceColumnDefinitionToJSON,
} from './V1CustomResourceColumnDefinition';
import {
    V1CustomResourceSubresources,
    V1CustomResourceSubresourcesFromJSON,
    V1CustomResourceSubresourcesFromJSONTyped,
    V1CustomResourceSubresourcesToJSON,
} from './V1CustomResourceSubresources';
import {
    V1CustomResourceValidation,
    V1CustomResourceValidationFromJSON,
    V1CustomResourceValidationFromJSONTyped,
    V1CustomResourceValidationToJSON,
} from './V1CustomResourceValidation';

/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 * @export
 * @interface V1CustomResourceDefinitionVersion
 */
export interface V1CustomResourceDefinitionVersion {
    /**
     * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
     * @type {Array<V1CustomResourceColumnDefinition>}
     * @memberof V1CustomResourceDefinitionVersion
     */
    additionalPrinterColumns?: Array<V1CustomResourceColumnDefinition>;
    /**
     * deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.
     * @type {boolean}
     * @memberof V1CustomResourceDefinitionVersion
     */
    deprecated?: boolean;
    /**
     * deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.
     * @type {string}
     * @memberof V1CustomResourceDefinitionVersion
     */
    deprecationWarning?: string;
    /**
     * name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
     * @type {string}
     * @memberof V1CustomResourceDefinitionVersion
     */
    name: string;
    /**
     * 
     * @type {V1CustomResourceValidation}
     * @memberof V1CustomResourceDefinitionVersion
     */
    schema?: V1CustomResourceValidation;
    /**
     * served is a flag enabling/disabling this version from being served via REST APIs
     * @type {boolean}
     * @memberof V1CustomResourceDefinitionVersion
     */
    served: boolean;
    /**
     * storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
     * @type {boolean}
     * @memberof V1CustomResourceDefinitionVersion
     */
    storage: boolean;
    /**
     * 
     * @type {V1CustomResourceSubresources}
     * @memberof V1CustomResourceDefinitionVersion
     */
    subresources?: V1CustomResourceSubresources;
}

export function V1CustomResourceDefinitionVersionFromJSON(json: any): V1CustomResourceDefinitionVersion {
    return V1CustomResourceDefinitionVersionFromJSONTyped(json, false);
}

export function V1CustomResourceDefinitionVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceDefinitionVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalPrinterColumns': !exists(json, 'additionalPrinterColumns') ? undefined : ((json['additionalPrinterColumns'] as Array<any>).map(V1CustomResourceColumnDefinitionFromJSON)),
        'deprecated': !exists(json, 'deprecated') ? undefined : json['deprecated'],
        'deprecationWarning': !exists(json, 'deprecationWarning') ? undefined : json['deprecationWarning'],
        'name': json['name'],
        'schema': !exists(json, 'schema') ? undefined : V1CustomResourceValidationFromJSON(json['schema']),
        'served': json['served'],
        'storage': json['storage'],
        'subresources': !exists(json, 'subresources') ? undefined : V1CustomResourceSubresourcesFromJSON(json['subresources']),
    };
}

export function V1CustomResourceDefinitionVersionToJSON(value?: V1CustomResourceDefinitionVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalPrinterColumns': value.additionalPrinterColumns === undefined ? undefined : ((value.additionalPrinterColumns as Array<any>).map(V1CustomResourceColumnDefinitionToJSON)),
        'deprecated': value.deprecated,
        'deprecationWarning': value.deprecationWarning,
        'name': value.name,
        'schema': V1CustomResourceValidationToJSON(value.schema),
        'served': value.served,
        'storage': value.storage,
        'subresources': V1CustomResourceSubresourcesToJSON(value.subresources),
    };
}

