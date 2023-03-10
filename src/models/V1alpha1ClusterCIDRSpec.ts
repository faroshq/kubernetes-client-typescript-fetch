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
    V1NodeSelector,
    V1NodeSelectorFromJSON,
    V1NodeSelectorFromJSONTyped,
    V1NodeSelectorToJSON,
} from './V1NodeSelector';

/**
 * ClusterCIDRSpec defines the desired state of ClusterCIDR.
 * @export
 * @interface V1alpha1ClusterCIDRSpec
 */
export interface V1alpha1ClusterCIDRSpec {
    /**
     * IPv4 defines an IPv4 IP block in CIDR notation(e.g. "10.0.0.0/8"). At least one of IPv4 and IPv6 must be specified. This field is immutable.
     * @type {string}
     * @memberof V1alpha1ClusterCIDRSpec
     */
    ipv4?: string;
    /**
     * IPv6 defines an IPv6 IP block in CIDR notation(e.g. "2001:db8::/64"). At least one of IPv4 and IPv6 must be specified. This field is immutable.
     * @type {string}
     * @memberof V1alpha1ClusterCIDRSpec
     */
    ipv6?: string;
    /**
     * 
     * @type {V1NodeSelector}
     * @memberof V1alpha1ClusterCIDRSpec
     */
    nodeSelector?: V1NodeSelector;
    /**
     * PerNodeHostBits defines the number of host bits to be configured per node. A subnet mask determines how much of the address is used for network bits and host bits. For example an IPv4 address of 192.168.0.0/24, splits the address into 24 bits for the network portion and 8 bits for the host portion. To allocate 256 IPs, set this field to 8 (a /24 mask for IPv4 or a /120 for IPv6). Minimum value is 4 (16 IPs). This field is immutable.
     * @type {number}
     * @memberof V1alpha1ClusterCIDRSpec
     */
    perNodeHostBits: number;
}

export function V1alpha1ClusterCIDRSpecFromJSON(json: any): V1alpha1ClusterCIDRSpec {
    return V1alpha1ClusterCIDRSpecFromJSONTyped(json, false);
}

export function V1alpha1ClusterCIDRSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ClusterCIDRSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ipv4': !exists(json, 'ipv4') ? undefined : json['ipv4'],
        'ipv6': !exists(json, 'ipv6') ? undefined : json['ipv6'],
        'nodeSelector': !exists(json, 'nodeSelector') ? undefined : V1NodeSelectorFromJSON(json['nodeSelector']),
        'perNodeHostBits': json['perNodeHostBits'],
    };
}

export function V1alpha1ClusterCIDRSpecToJSON(value?: V1alpha1ClusterCIDRSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ipv4': value.ipv4,
        'ipv6': value.ipv6,
        'nodeSelector': V1NodeSelectorToJSON(value.nodeSelector),
        'perNodeHostBits': value.perNodeHostBits,
    };
}

