/**
 * tilt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1alpha1Pod } from './v1alpha1Pod';

/**
* KubernetesDiscoveryStatus defines the observed state of KubernetesDiscovery
*/
export class V1alpha1KubernetesDiscoveryStatus {
    /**
    * MonitorStartTime is the timestamp of when Kubernetes resource discovery was started.  It is zero if discovery has not been started yet.
    */
    'monitorStartTime'?: Date;
    /**
    * Pods that have been discovered based on the criteria in the spec.
    */
    'pods': Array<V1alpha1Pod>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "monitorStartTime",
            "baseName": "monitorStartTime",
            "type": "Date"
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "Array<V1alpha1Pod>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1KubernetesDiscoveryStatus.attributeTypeMap;
    }
}
