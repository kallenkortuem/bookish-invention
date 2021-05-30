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


import { LeagueV4MiniSeriesDTO } from './league-v4-mini-series-dto';

/**
 * 
 * @export
 * @interface LeagueV4LeagueEntryDTO
 */
export interface LeagueV4LeagueEntryDTO {
    /**
     * 
     * @type {string}
     * @memberof LeagueV4LeagueEntryDTO
     */
    leagueId: string;
    /**
     * Player\'s encrypted summonerId.
     * @type {string}
     * @memberof LeagueV4LeagueEntryDTO
     */
    summonerId: string;
    /**
     * 
     * @type {string}
     * @memberof LeagueV4LeagueEntryDTO
     */
    summonerName: string;
    /**
     * 
     * @type {string}
     * @memberof LeagueV4LeagueEntryDTO
     */
    queueType: string;
    /**
     * 
     * @type {string}
     * @memberof LeagueV4LeagueEntryDTO
     */
    tier: string;
    /**
     * The player\'s division within a tier.
     * @type {string}
     * @memberof LeagueV4LeagueEntryDTO
     */
    rank: string;
    /**
     * 
     * @type {number}
     * @memberof LeagueV4LeagueEntryDTO
     */
    leaguePoints: number;
    /**
     * Winning team on Summoners Rift.
     * @type {number}
     * @memberof LeagueV4LeagueEntryDTO
     */
    wins: number;
    /**
     * Losing team on Summoners Rift.
     * @type {number}
     * @memberof LeagueV4LeagueEntryDTO
     */
    losses: number;
    /**
     * 
     * @type {boolean}
     * @memberof LeagueV4LeagueEntryDTO
     */
    hotStreak: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeagueV4LeagueEntryDTO
     */
    veteran: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeagueV4LeagueEntryDTO
     */
    freshBlood: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeagueV4LeagueEntryDTO
     */
    inactive: boolean;
    /**
     * 
     * @type {LeagueV4MiniSeriesDTO}
     * @memberof LeagueV4LeagueEntryDTO
     */
    miniSeries?: LeagueV4MiniSeriesDTO;
}


