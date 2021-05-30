/* tslint:disable */
/* eslint-disable */
/**
 * Riot API
 *  OpenAPI/Swagger version of the [Riot API](https://developer.riotgames.com/). Automatically generated daily. ## OpenAPI Spec File The following versions of the Riot API spec file are available: - `openapi-3.0.0.json` ([view file](../openapi-3.0.0.json), [ui select](?url=../openapi-3.0.0.json)) - `openapi-3.0.0.min.json` ([view file](../openapi-3.0.0.min.json), [ui select](?url=../openapi-3.0.0.min.json)) - `openapi-3.0.0.yml` ([view file](../openapi-3.0.0.yml), [ui select](?url=../openapi-3.0.0.yml)) - `openapi-3.0.0.min.yml` ([view file](../openapi-3.0.0.min.yml), [ui select](?url=../openapi-3.0.0.min.yml)) - `swaggerspec-2.0.json` ([view file](../swaggerspec-2.0.json), [ui select](?url=../swaggerspec-2.0.json)) - `swaggerspec-2.0.min.json` ([view file](../swaggerspec-2.0.min.json), [ui select](?url=../swaggerspec-2.0.min.json)) - `swaggerspec-2.0.yml` ([view file](../swaggerspec-2.0.yml), [ui select](?url=../swaggerspec-2.0.yml)) - `swaggerspec-2.0.min.yml` ([view file](../swaggerspec-2.0.min.yml), [ui select](?url=../swaggerspec-2.0.min.yml)) ## Other Files - Missing DTOs: [`missing.json`](../missing.json) - [Enum Files](../enums/) ## Source Code Source code on [GitHub](https://github.com/MingweiSamuel/riotapi-schema). Pull requests welcome! ## Automatically Generated Rebuilt on [Travis CI](https://travis-ci.com/MingweiSamuel/riotapi-schema/builds) daily. *** 
 *
 * The version of the OpenAPI document: f14f3a4b603d31d9d2090720bd518853c6a65bbb
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ValMatchV1LocationDto } from './val-match-v1-location-dto';
import { ValMatchV1PlayerLocationsDto } from './val-match-v1-player-locations-dto';
import { ValMatchV1PlayerRoundStatsDto } from './val-match-v1-player-round-stats-dto';

/**
 * 
 * @export
 * @interface ValMatchV1RoundResultDto
 */
export interface ValMatchV1RoundResultDto {
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1RoundResultDto
     */
    roundNum: number;
    /**
     * 
     * @type {string}
     * @memberof ValMatchV1RoundResultDto
     */
    roundResult: string;
    /**
     * 
     * @type {string}
     * @memberof ValMatchV1RoundResultDto
     */
    roundCeremony: string;
    /**
     * 
     * @type {string}
     * @memberof ValMatchV1RoundResultDto
     */
    winningTeam: string;
    /**
     * PUUID of player
     * @type {string}
     * @memberof ValMatchV1RoundResultDto
     */
    bombPlanter: string;
    /**
     * PUUID of player
     * @type {string}
     * @memberof ValMatchV1RoundResultDto
     */
    bombDefuser: string;
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1RoundResultDto
     */
    plantRoundTime: number;
    /**
     * 
     * @type {Array<ValMatchV1PlayerLocationsDto>}
     * @memberof ValMatchV1RoundResultDto
     */
    plantPlayerLocations: Array<ValMatchV1PlayerLocationsDto>;
    /**
     * 
     * @type {ValMatchV1LocationDto}
     * @memberof ValMatchV1RoundResultDto
     */
    plantLocation: ValMatchV1LocationDto;
    /**
     * 
     * @type {string}
     * @memberof ValMatchV1RoundResultDto
     */
    plantSite: string;
    /**
     * 
     * @type {number}
     * @memberof ValMatchV1RoundResultDto
     */
    defuseRoundTime: number;
    /**
     * 
     * @type {Array<ValMatchV1PlayerLocationsDto>}
     * @memberof ValMatchV1RoundResultDto
     */
    defusePlayerLocations: Array<ValMatchV1PlayerLocationsDto>;
    /**
     * 
     * @type {ValMatchV1LocationDto}
     * @memberof ValMatchV1RoundResultDto
     */
    defuseLocation: ValMatchV1LocationDto;
    /**
     * 
     * @type {Array<ValMatchV1PlayerRoundStatsDto>}
     * @memberof ValMatchV1RoundResultDto
     */
    playerStats: Array<ValMatchV1PlayerRoundStatsDto>;
    /**
     * 
     * @type {string}
     * @memberof ValMatchV1RoundResultDto
     */
    roundResultCode: string;
}


