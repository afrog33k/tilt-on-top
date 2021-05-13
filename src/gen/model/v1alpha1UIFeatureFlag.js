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
exports.V1alpha1UIFeatureFlag = void 0;
/**
* Configures Tilt to enable non-default features (e.g., experimental or deprecated).  The Tilt features controlled by this are generally in an unfinished state, and not yet documented.  As a Tilt user, you don’t need to worry about this unless something else directs you to (e.g., an experimental feature doc, or a conversation with a Tilt contributor).
*/
var V1alpha1UIFeatureFlag = /** @class */ (function () {
    function V1alpha1UIFeatureFlag() {
    }
    V1alpha1UIFeatureFlag.getAttributeTypeMap = function () {
        return V1alpha1UIFeatureFlag.attributeTypeMap;
    };
    V1alpha1UIFeatureFlag.discriminator = undefined;
    V1alpha1UIFeatureFlag.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "boolean"
        }
    ];
    return V1alpha1UIFeatureFlag;
}());
exports.V1alpha1UIFeatureFlag = V1alpha1UIFeatureFlag;