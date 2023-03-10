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
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';
import {
    V1alpha1NamedRuleWithOperations,
    V1alpha1NamedRuleWithOperationsFromJSON,
    V1alpha1NamedRuleWithOperationsFromJSONTyped,
    V1alpha1NamedRuleWithOperationsToJSON,
} from './V1alpha1NamedRuleWithOperations';

/**
 * MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
 * @export
 * @interface V1alpha1MatchResources
 */
export interface V1alpha1MatchResources {
    /**
     * ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
     * @type {Array<V1alpha1NamedRuleWithOperations>}
     * @memberof V1alpha1MatchResources
     */
    excludeResourceRules?: Array<V1alpha1NamedRuleWithOperations>;
    /**
     * matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
     * 
     * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.
     * 
     * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.
     * 
     * Defaults to "Equivalent"
     * @type {string}
     * @memberof V1alpha1MatchResources
     */
    matchPolicy?: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1alpha1MatchResources
     */
    namespaceSelector?: V1LabelSelector;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1alpha1MatchResources
     */
    objectSelector?: V1LabelSelector;
    /**
     * ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.
     * @type {Array<V1alpha1NamedRuleWithOperations>}
     * @memberof V1alpha1MatchResources
     */
    resourceRules?: Array<V1alpha1NamedRuleWithOperations>;
}

export function V1alpha1MatchResourcesFromJSON(json: any): V1alpha1MatchResources {
    return V1alpha1MatchResourcesFromJSONTyped(json, false);
}

export function V1alpha1MatchResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1MatchResources {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'excludeResourceRules': !exists(json, 'excludeResourceRules') ? undefined : ((json['excludeResourceRules'] as Array<any>).map(V1alpha1NamedRuleWithOperationsFromJSON)),
        'matchPolicy': !exists(json, 'matchPolicy') ? undefined : json['matchPolicy'],
        'namespaceSelector': !exists(json, 'namespaceSelector') ? undefined : V1LabelSelectorFromJSON(json['namespaceSelector']),
        'objectSelector': !exists(json, 'objectSelector') ? undefined : V1LabelSelectorFromJSON(json['objectSelector']),
        'resourceRules': !exists(json, 'resourceRules') ? undefined : ((json['resourceRules'] as Array<any>).map(V1alpha1NamedRuleWithOperationsFromJSON)),
    };
}

export function V1alpha1MatchResourcesToJSON(value?: V1alpha1MatchResources | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'excludeResourceRules': value.excludeResourceRules === undefined ? undefined : ((value.excludeResourceRules as Array<any>).map(V1alpha1NamedRuleWithOperationsToJSON)),
        'matchPolicy': value.matchPolicy,
        'namespaceSelector': V1LabelSelectorToJSON(value.namespaceSelector),
        'objectSelector': V1LabelSelectorToJSON(value.objectSelector),
        'resourceRules': value.resourceRules === undefined ? undefined : ((value.resourceRules as Array<any>).map(V1alpha1NamedRuleWithOperationsToJSON)),
    };
}
