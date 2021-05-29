/* tslint:disable */
/* eslint-disable */
/**
 * Riot API
 *  OpenAPI/Swagger version of the [Riot API](https://developer.riotgames.com/). Automatically generated daily. ## OpenAPI Spec File The following versions of the Riot API spec file are available: - `openapi-3.0.0.json` ([view file](../openapi-3.0.0.json), [ui select](?url=../openapi-3.0.0.json)) - `openapi-3.0.0.min.json` ([view file](../openapi-3.0.0.min.json), [ui select](?url=../openapi-3.0.0.min.json)) - `openapi-3.0.0.yml` ([view file](../openapi-3.0.0.yml), [ui select](?url=../openapi-3.0.0.yml)) - `openapi-3.0.0.min.yml` ([view file](../openapi-3.0.0.min.yml), [ui select](?url=../openapi-3.0.0.min.yml)) - `swaggerspec-2.0.json` ([view file](../swaggerspec-2.0.json), [ui select](?url=../swaggerspec-2.0.json)) - `swaggerspec-2.0.min.json` ([view file](../swaggerspec-2.0.min.json), [ui select](?url=../swaggerspec-2.0.min.json)) - `swaggerspec-2.0.yml` ([view file](../swaggerspec-2.0.yml), [ui select](?url=../swaggerspec-2.0.yml)) - `swaggerspec-2.0.min.yml` ([view file](../swaggerspec-2.0.min.yml), [ui select](?url=../swaggerspec-2.0.min.yml)) ## Other Files - Missing DTOs: [`missing.json`](../missing.json) - [Enum Files](../enums/) ## Source Code Source code on [GitHub](https://github.com/MingweiSamuel/riotapi-schema). Pull requests welcome! ## Automatically Generated Rebuilt on [Travis CI](https://travis-ci.com/MingweiSamuel/riotapi-schema/builds) daily. *** 
 *
 * The version of the OpenAPI document: bbfb64a2ef9111c6610a823da800b0335587831d
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ValMatchV1AbilityCastsDto } from './val-match-v1-ability-casts-dto';

/**
 * 
 * @export
 * @interface ValMatchV1PlayerStatsDto
 */
export interface ValMatchV1PlayerStatsDto {
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1PlayerStatsDto
     */
    score: number;
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1PlayerStatsDto
     */
    roundsPlayed: number;
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1PlayerStatsDto
     */
    kills: number;
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1PlayerStatsDto
     */
    deaths: number;
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1PlayerStatsDto
     */
    assists: number;
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1PlayerStatsDto
     */
    playtimeMillis: number;
    /**
     * 
     * @type {ValMatchV1AbilityCastsDto}
     * @memberof ValMatchV1PlayerStatsDto
     */
    abilityCasts: ValMatchV1AbilityCastsDto;
}


