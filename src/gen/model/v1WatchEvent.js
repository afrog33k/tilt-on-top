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
exports.V1WatchEvent = void 0;
/**
* Event represents a single event to a watched resource.
*/
var V1WatchEvent = /** @class */ (function () {
    function V1WatchEvent() {
    }
    V1WatchEvent.getAttributeTypeMap = function () {
        return V1WatchEvent.attributeTypeMap;
    };
    V1WatchEvent.discriminator = undefined;
    V1WatchEvent.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "object"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return V1WatchEvent;
}());
exports.V1WatchEvent = V1WatchEvent;