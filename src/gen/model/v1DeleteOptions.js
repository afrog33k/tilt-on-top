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
exports.V1DeleteOptions = void 0;
/**
* DeleteOptions may be provided when deleting an API object.
*/
var V1DeleteOptions = /** @class */ (function () {
    function V1DeleteOptions() {
    }
    V1DeleteOptions.getAttributeTypeMap = function () {
        return V1DeleteOptions.attributeTypeMap;
    };
    V1DeleteOptions.discriminator = undefined;
    V1DeleteOptions.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "dryRun",
            "baseName": "dryRun",
            "type": "Array<string>"
        },
        {
            "name": "gracePeriodSeconds",
            "baseName": "gracePeriodSeconds",
            "type": "number"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "orphanDependents",
            "baseName": "orphanDependents",
            "type": "boolean"
        },
        {
            "name": "preconditions",
            "baseName": "preconditions",
            "type": "V1Preconditions"
        },
        {
            "name": "propagationPolicy",
            "baseName": "propagationPolicy",
            "type": "string"
        }
    ];
    return V1DeleteOptions;
}());
exports.V1DeleteOptions = V1DeleteOptions;
