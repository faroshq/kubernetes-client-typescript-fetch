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
    V1beta3GroupSubject,
    V1beta3GroupSubjectFromJSON,
    V1beta3GroupSubjectFromJSONTyped,
    V1beta3GroupSubjectToJSON,
} from './V1beta3GroupSubject';
import {
    V1beta3ServiceAccountSubject,
    V1beta3ServiceAccountSubjectFromJSON,
    V1beta3ServiceAccountSubjectFromJSONTyped,
    V1beta3ServiceAccountSubjectToJSON,
} from './V1beta3ServiceAccountSubject';
import {
    V1beta3UserSubject,
    V1beta3UserSubjectFromJSON,
    V1beta3UserSubjectFromJSONTyped,
    V1beta3UserSubjectToJSON,
} from './V1beta3UserSubject';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 * @export
 * @interface V1beta3Subject
 */
export interface V1beta3Subject {
    /**
     * 
     * @type {V1beta3GroupSubject}
     * @memberof V1beta3Subject
     */
    group?: V1beta3GroupSubject;
    /**
     * `kind` indicates which one of the other fields is non-empty. Required
     * @type {string}
     * @memberof V1beta3Subject
     */
    kind: string;
    /**
     * 
     * @type {V1beta3ServiceAccountSubject}
     * @memberof V1beta3Subject
     */
    serviceAccount?: V1beta3ServiceAccountSubject;
    /**
     * 
     * @type {V1beta3UserSubject}
     * @memberof V1beta3Subject
     */
    user?: V1beta3UserSubject;
}

export function V1beta3SubjectFromJSON(json: any): V1beta3Subject {
    return V1beta3SubjectFromJSONTyped(json, false);
}

export function V1beta3SubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3Subject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': !exists(json, 'group') ? undefined : V1beta3GroupSubjectFromJSON(json['group']),
        'kind': json['kind'],
        'serviceAccount': !exists(json, 'serviceAccount') ? undefined : V1beta3ServiceAccountSubjectFromJSON(json['serviceAccount']),
        'user': !exists(json, 'user') ? undefined : V1beta3UserSubjectFromJSON(json['user']),
    };
}

export function V1beta3SubjectToJSON(value?: V1beta3Subject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': V1beta3GroupSubjectToJSON(value.group),
        'kind': value.kind,
        'serviceAccount': V1beta3ServiceAccountSubjectToJSON(value.serviceAccount),
        'user': V1beta3UserSubjectToJSON(value.user),
    };
}
