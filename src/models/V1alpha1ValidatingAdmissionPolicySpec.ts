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
    V1alpha1MatchResources,
    V1alpha1MatchResourcesFromJSON,
    V1alpha1MatchResourcesFromJSONTyped,
    V1alpha1MatchResourcesToJSON,
} from './V1alpha1MatchResources';
import {
    V1alpha1ParamKind,
    V1alpha1ParamKindFromJSON,
    V1alpha1ParamKindFromJSONTyped,
    V1alpha1ParamKindToJSON,
} from './V1alpha1ParamKind';
import {
    V1alpha1Validation,
    V1alpha1ValidationFromJSON,
    V1alpha1ValidationFromJSONTyped,
    V1alpha1ValidationToJSON,
} from './V1alpha1Validation';

/**
 * ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
 * @export
 * @interface V1alpha1ValidatingAdmissionPolicySpec
 */
export interface V1alpha1ValidatingAdmissionPolicySpec {
    /**
     * FailurePolicy defines how to handle failures for the admission policy. Failures can occur from invalid or mis-configured policy definitions or bindings. A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource. Allowed values are Ignore or Fail. Defaults to Fail.
     * @type {string}
     * @memberof V1alpha1ValidatingAdmissionPolicySpec
     */
    failurePolicy?: string;
    /**
     * 
     * @type {V1alpha1MatchResources}
     * @memberof V1alpha1ValidatingAdmissionPolicySpec
     */
    matchConstraints?: V1alpha1MatchResources;
    /**
     * 
     * @type {V1alpha1ParamKind}
     * @memberof V1alpha1ValidatingAdmissionPolicySpec
     */
    paramKind?: V1alpha1ParamKind;
    /**
     * Validations contain CEL expressions which is used to apply the validation. A minimum of one validation is required for a policy definition. Required.
     * @type {Array<V1alpha1Validation>}
     * @memberof V1alpha1ValidatingAdmissionPolicySpec
     */
    validations: Array<V1alpha1Validation>;
}

export function V1alpha1ValidatingAdmissionPolicySpecFromJSON(json: any): V1alpha1ValidatingAdmissionPolicySpec {
    return V1alpha1ValidatingAdmissionPolicySpecFromJSONTyped(json, false);
}

export function V1alpha1ValidatingAdmissionPolicySpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ValidatingAdmissionPolicySpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'failurePolicy': !exists(json, 'failurePolicy') ? undefined : json['failurePolicy'],
        'matchConstraints': !exists(json, 'matchConstraints') ? undefined : V1alpha1MatchResourcesFromJSON(json['matchConstraints']),
        'paramKind': !exists(json, 'paramKind') ? undefined : V1alpha1ParamKindFromJSON(json['paramKind']),
        'validations': ((json['validations'] as Array<any>).map(V1alpha1ValidationFromJSON)),
    };
}

export function V1alpha1ValidatingAdmissionPolicySpecToJSON(value?: V1alpha1ValidatingAdmissionPolicySpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'failurePolicy': value.failurePolicy,
        'matchConstraints': V1alpha1MatchResourcesToJSON(value.matchConstraints),
        'paramKind': V1alpha1ParamKindToJSON(value.paramKind),
        'validations': ((value.validations as Array<any>).map(V1alpha1ValidationToJSON)),
    };
}

