"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1TargetStateWaiting = void 0;
/**
* TargetStateWaiting is a target that has been enqueued for execution but has not yet started.
*/
var V1alpha1TargetStateWaiting = /** @class */ (function () {
    function V1alpha1TargetStateWaiting() {
    }
    V1alpha1TargetStateWaiting.getAttributeTypeMap = function () {
        return V1alpha1TargetStateWaiting.attributeTypeMap;
    };
    V1alpha1TargetStateWaiting.discriminator = undefined;
    V1alpha1TargetStateWaiting.attributeTypeMap = [
        {
            "name": "waitReason",
            "baseName": "waitReason",
            "type": "string"
        }
    ];
    return V1alpha1TargetStateWaiting;
}());
exports.V1alpha1TargetStateWaiting = V1alpha1TargetStateWaiting;