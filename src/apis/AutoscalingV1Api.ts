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


import * as runtime from '../runtime';
import {
    V1APIResourceList,
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1DeleteOptions,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1HorizontalPodAutoscaler,
    V1HorizontalPodAutoscalerFromJSON,
    V1HorizontalPodAutoscalerToJSON,
    V1HorizontalPodAutoscalerList,
    V1HorizontalPodAutoscalerListFromJSON,
    V1HorizontalPodAutoscalerListToJSON,
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
} from '../models';

export interface AutoscalingV1ApiCreateNamespacedHorizontalPodAutoscalerRequest {
    namespace: string;
    body: V1HorizontalPodAutoscaler;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface AutoscalingV1ApiDeleteCollectionNamespacedHorizontalPodAutoscalerRequest {
    namespace: string;
    pretty?: string;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    body?: V1DeleteOptions;
}

export interface AutoscalingV1ApiDeleteNamespacedHorizontalPodAutoscalerRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface AutoscalingV1ApiListHorizontalPodAutoscalerForAllNamespacesRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface AutoscalingV1ApiListNamespacedHorizontalPodAutoscalerRequest {
    namespace: string;
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerStatusRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerRequest {
    name: string;
    namespace: string;
    pretty?: string;
}

export interface AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerStatusRequest {
    name: string;
    namespace: string;
    pretty?: string;
}

export interface AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerRequest {
    name: string;
    namespace: string;
    body: V1HorizontalPodAutoscaler;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerStatusRequest {
    name: string;
    namespace: string;
    body: V1HorizontalPodAutoscaler;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

/**
 * 
 */
export class AutoscalingV1Api extends runtime.BaseAPI {

    /**
     * create a HorizontalPodAutoscaler
     */
    async createNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiCreateNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling createNamespacedHorizontalPodAutoscaler.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createNamespacedHorizontalPodAutoscaler.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1HorizontalPodAutoscalerToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * create a HorizontalPodAutoscaler
     */
    async createNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiCreateNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.createNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of HorizontalPodAutoscaler
     */
    async deleteCollectionNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiDeleteCollectionNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteCollectionNamespacedHorizontalPodAutoscaler.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of HorizontalPodAutoscaler
     */
    async deleteCollectionNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiDeleteCollectionNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteCollectionNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a HorizontalPodAutoscaler
     */
    async deleteNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiDeleteNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteNamespacedHorizontalPodAutoscaler.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteNamespacedHorizontalPodAutoscaler.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a HorizontalPodAutoscaler
     */
    async deleteNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiDeleteNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAPIResourcesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1APIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAPIResources(initOverrides?: RequestInit): Promise<V1APIResourceList> {
        const response = await this.getAPIResourcesRaw(initOverrides);
        return await response.value();
    }

    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     */
    async listHorizontalPodAutoscalerForAllNamespacesRaw(requestParameters: AutoscalingV1ApiListHorizontalPodAutoscalerForAllNamespacesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscalerList>> {
        const queryParameters: any = {};

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/horizontalpodautoscalers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     */
    async listHorizontalPodAutoscalerForAllNamespaces(requestParameters: AutoscalingV1ApiListHorizontalPodAutoscalerForAllNamespacesRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscalerList> {
        const response = await this.listHorizontalPodAutoscalerForAllNamespacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     */
    async listNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiListNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscalerList>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling listNamespacedHorizontalPodAutoscaler.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     */
    async listNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiListNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscalerList> {
        const response = await this.listNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified HorizontalPodAutoscaler
     */
    async patchNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNamespacedHorizontalPodAutoscaler.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedHorizontalPodAutoscaler.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNamespacedHorizontalPodAutoscaler.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * partially update the specified HorizontalPodAutoscaler
     */
    async patchNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.patchNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update status of the specified HorizontalPodAutoscaler
     */
    async patchNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters: AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNamespacedHorizontalPodAutoscalerStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedHorizontalPodAutoscalerStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNamespacedHorizontalPodAutoscalerStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * partially update status of the specified HorizontalPodAutoscaler
     */
    async patchNamespacedHorizontalPodAutoscalerStatus(requestParameters: AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.patchNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified HorizontalPodAutoscaler
     */
    async readNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNamespacedHorizontalPodAutoscaler.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling readNamespacedHorizontalPodAutoscaler.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * read the specified HorizontalPodAutoscaler
     */
    async readNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.readNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read status of the specified HorizontalPodAutoscaler
     */
    async readNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters: AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNamespacedHorizontalPodAutoscalerStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling readNamespacedHorizontalPodAutoscalerStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * read status of the specified HorizontalPodAutoscaler
     */
    async readNamespacedHorizontalPodAutoscalerStatus(requestParameters: AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.readNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified HorizontalPodAutoscaler
     */
    async replaceNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNamespacedHorizontalPodAutoscaler.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedHorizontalPodAutoscaler.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNamespacedHorizontalPodAutoscaler.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1HorizontalPodAutoscalerToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * replace the specified HorizontalPodAutoscaler
     */
    async replaceNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.replaceNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace status of the specified HorizontalPodAutoscaler
     */
    async replaceNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters: AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNamespacedHorizontalPodAutoscalerStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedHorizontalPodAutoscalerStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNamespacedHorizontalPodAutoscalerStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1HorizontalPodAutoscalerToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * replace status of the specified HorizontalPodAutoscaler
     */
    async replaceNamespacedHorizontalPodAutoscalerStatus(requestParameters: AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.replaceNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
