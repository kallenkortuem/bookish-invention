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


import { MatchV5MatchInfoTeamBan } from './match-v5-match-info-team-ban';
import { MatchV5MatchInfoTeamObjectives } from './match-v5-match-info-team-objectives';

/**
 * 
 * @export
 * @interface MatchV5MatchInfoTeam
 */
export interface MatchV5MatchInfoTeam {
    /**
     * 
     * @type {Array<MatchV5MatchInfoTeamBan>}
     * @memberof MatchV5MatchInfoTeam
     */
    bans: Array<MatchV5MatchInfoTeamBan>;
    /**
     * 
     * @type {MatchV5MatchInfoTeamObjectives}
     * @memberof MatchV5MatchInfoTeam
     */
    objectives: MatchV5MatchInfoTeamObjectives;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoTeam
     */
    teamId: number;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoTeam
     */
    win: boolean;
}

