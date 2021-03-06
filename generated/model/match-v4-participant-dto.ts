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


import { MatchV4MasteryDto } from './match-v4-mastery-dto';
import { MatchV4ParticipantStatsDto } from './match-v4-participant-stats-dto';
import { MatchV4ParticipantTimelineDto } from './match-v4-participant-timeline-dto';
import { MatchV4RuneDto } from './match-v4-rune-dto';

/**
 * 
 * @export
 * @interface MatchV4ParticipantDto
 */
export interface MatchV4ParticipantDto {
    /**
     * 
     * @type {number}
     * @memberof MatchV4ParticipantDto
     */
    participantId: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV4ParticipantDto
     */
    championId: number;
    /**
     * List of legacy Rune information. Not included for matches played with Runes Reforged.
     * @type {Array<MatchV4RuneDto>}
     * @memberof MatchV4ParticipantDto
     */
    runes?: Array<MatchV4RuneDto>;
    /**
     * 
     * @type {MatchV4ParticipantStatsDto}
     * @memberof MatchV4ParticipantDto
     */
    stats: MatchV4ParticipantStatsDto;
    /**
     * 100 for blue side. 200 for red side.
     * @type {number}
     * @memberof MatchV4ParticipantDto
     */
    teamId: number;
    /**
     * 
     * @type {MatchV4ParticipantTimelineDto}
     * @memberof MatchV4ParticipantDto
     */
    timeline?: MatchV4ParticipantTimelineDto;
    /**
     * First Summoner Spell id.
     * @type {number}
     * @memberof MatchV4ParticipantDto
     */
    spell1Id: number;
    /**
     * Second Summoner Spell id.
     * @type {number}
     * @memberof MatchV4ParticipantDto
     */
    spell2Id: number;
    /**
     * Highest ranked tier achieved for the previous season in a specific subset of queueIds, if any, otherwise null. Used to display border in game loading screen. Please refer to the Ranked Info documentation.              (Legal values:  CHALLENGER,  MASTER,  DIAMOND,  PLATINUM,  GOLD,  SILVER,  BRONZE,  UNRANKED)
     * @type {string}
     * @memberof MatchV4ParticipantDto
     */
    highestAchievedSeasonTier?: MatchV4ParticipantDtoHighestAchievedSeasonTierEnum;
    /**
     * List of legacy Mastery information. Not included for matches played with Runes Reforged.
     * @type {Array<MatchV4MasteryDto>}
     * @memberof MatchV4ParticipantDto
     */
    masteries?: Array<MatchV4MasteryDto>;
}

/**
 * @export
 * @enum {string}
 */
export type MatchV4ParticipantDtoHighestAchievedSeasonTierEnum = 'CHALLENGER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'UNRANKED'

/**
 * @export
 * @enum {string}
 */
export const MatchV4ParticipantDtoHighestAchievedSeasonTierEnum = {
    Challenger: 'CHALLENGER' as MatchV4ParticipantDtoHighestAchievedSeasonTierEnum,
    Master: 'MASTER' as MatchV4ParticipantDtoHighestAchievedSeasonTierEnum,
    Diamond: 'DIAMOND' as MatchV4ParticipantDtoHighestAchievedSeasonTierEnum,
    Platinum: 'PLATINUM' as MatchV4ParticipantDtoHighestAchievedSeasonTierEnum,
    Gold: 'GOLD' as MatchV4ParticipantDtoHighestAchievedSeasonTierEnum,
    Silver: 'SILVER' as MatchV4ParticipantDtoHighestAchievedSeasonTierEnum,
    Bronze: 'BRONZE' as MatchV4ParticipantDtoHighestAchievedSeasonTierEnum,
    Unranked: 'UNRANKED' as MatchV4ParticipantDtoHighestAchievedSeasonTierEnum
};



