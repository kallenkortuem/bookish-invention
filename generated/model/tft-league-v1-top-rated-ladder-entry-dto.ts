/* tslint:disable */
/* eslint-disable */
/**
 * Riot API
 *  OpenAPI/Swagger version of the [Riot API](https://developer.riotgames.com/). Automatically generated daily. ## OpenAPI Spec File The following versions of the Riot API spec file are available: - `openapi-3.0.0.json` ([view file](../openapi-3.0.0.json), [ui select](?url=../openapi-3.0.0.json)) - `openapi-3.0.0.min.json` ([view file](../openapi-3.0.0.min.json), [ui select](?url=../openapi-3.0.0.min.json)) - `openapi-3.0.0.yml` ([view file](../openapi-3.0.0.yml), [ui select](?url=../openapi-3.0.0.yml)) - `openapi-3.0.0.min.yml` ([view file](../openapi-3.0.0.min.yml), [ui select](?url=../openapi-3.0.0.min.yml)) - `swaggerspec-2.0.json` ([view file](../swaggerspec-2.0.json), [ui select](?url=../swaggerspec-2.0.json)) - `swaggerspec-2.0.min.json` ([view file](../swaggerspec-2.0.min.json), [ui select](?url=../swaggerspec-2.0.min.json)) - `swaggerspec-2.0.yml` ([view file](../swaggerspec-2.0.yml), [ui select](?url=../swaggerspec-2.0.yml)) - `swaggerspec-2.0.min.yml` ([view file](../swaggerspec-2.0.min.yml), [ui select](?url=../swaggerspec-2.0.min.yml)) ## Other Files - Missing DTOs: [`missing.json`](../missing.json) - [Enum Files](../enums/) ## Source Code Source code on [GitHub](https://github.com/MingweiSamuel/riotapi-schema). Pull requests welcome! ## Automatically Generated Rebuilt on [Travis CI](https://travis-ci.com/MingweiSamuel/riotapi-schema/builds) daily. *** 
 *
 * The version of the OpenAPI document: 570eb12bfe9fb09e435976cb454f622293d0020e
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TftLeagueV1TopRatedLadderEntryDto
 */
export interface TftLeagueV1TopRatedLadderEntryDto {
    /**
     * 
     * @type {string}
     * @memberof TftLeagueV1TopRatedLadderEntryDto
     */
    summonerId: string;
    /**
     * 
     * @type {string}
     * @memberof TftLeagueV1TopRatedLadderEntryDto
     */
    summonerName: string;
    /**
     * (Legal values:  ORANGE,  PURPLE,  BLUE,  GREEN,  GRAY)
     * @type {string}
     * @memberof TftLeagueV1TopRatedLadderEntryDto
     */
    ratedTier: TftLeagueV1TopRatedLadderEntryDtoRatedTierEnum;
    /**
     * 
     * @type {number}
     * @memberof TftLeagueV1TopRatedLadderEntryDto
     */
    ratedRating: number;
    /**
     * First placement.
     * @type {number}
     * @memberof TftLeagueV1TopRatedLadderEntryDto
     */
    wins: number;
    /**
     * 
     * @type {number}
     * @memberof TftLeagueV1TopRatedLadderEntryDto
     */
    previousUpdateLadderPosition: number;
}

/**
 * @export
 * @enum {string}
 */
export type TftLeagueV1TopRatedLadderEntryDtoRatedTierEnum = 'ORANGE' | 'PURPLE' | 'BLUE' | 'GREEN' | 'GRAY'

/**
 * @export
 * @enum {string}
 */
export const TftLeagueV1TopRatedLadderEntryDtoRatedTierEnum = {
    Orange: 'ORANGE' as TftLeagueV1TopRatedLadderEntryDtoRatedTierEnum,
    Purple: 'PURPLE' as TftLeagueV1TopRatedLadderEntryDtoRatedTierEnum,
    Blue: 'BLUE' as TftLeagueV1TopRatedLadderEntryDtoRatedTierEnum,
    Green: 'GREEN' as TftLeagueV1TopRatedLadderEntryDtoRatedTierEnum,
    Gray: 'GRAY' as TftLeagueV1TopRatedLadderEntryDtoRatedTierEnum
};



