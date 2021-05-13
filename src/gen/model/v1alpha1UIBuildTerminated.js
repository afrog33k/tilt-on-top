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
exports.V1alpha1UIBuildTerminated = void 0;
/**
* UIBuildRunning respresents a finished build/update in the user interface.
*/
var V1alpha1UIBuildTerminated = /** @class */ (function () {
    function V1alpha1UIBuildTerminated() {
    }
    V1alpha1UIBuildTerminated.getAttributeTypeMap = function () {
        return V1alpha1UIBuildTerminated.attributeTypeMap;
    };
    V1alpha1UIBuildTerminated.discriminator = undefined;
    V1alpha1UIBuildTerminated.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "finishTime",
            "baseName": "finishTime",
            "type": "Date"
        },
        {
            "name": "isCrashRebuild",
            "baseName": "isCrashRebuild",
            "type": "boolean"
        },
        {
            "name": "spanID",
            "baseName": "spanID",
            "type": "string"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<string>"
        }
    ];
    return V1alpha1UIBuildTerminated;
}());
exports.V1alpha1UIBuildTerminated = V1alpha1UIBuildTerminated;