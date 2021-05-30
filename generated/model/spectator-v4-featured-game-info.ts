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


import { SpectatorV4BannedChampion } from './spectator-v4-banned-champion';
import { SpectatorV4Observer } from './spectator-v4-observer';
import { SpectatorV4Participant } from './spectator-v4-participant';

/**
 * 
 * @export
 * @interface SpectatorV4FeaturedGameInfo
 */
export interface SpectatorV4FeaturedGameInfo {
    /**
     * The game mode              (Legal values:  CLASSIC,  ODIN,  ARAM,  TUTORIAL,  ONEFORALL,  ASCENSION,  FIRSTBLOOD,  KINGPORO)
     * @type {string}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    gameMode: SpectatorV4FeaturedGameInfoGameModeEnum;
    /**
     * The amount of time in seconds that has passed since the game started
     * @type {number}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    gameLength: number;
    /**
     * The ID of the map
     * @type {number}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    mapId: number;
    /**
     * The game type              (Legal values:  CUSTOM_GAME,  MATCHED_GAME,  TUTORIAL_GAME)
     * @type {string}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    gameType: SpectatorV4FeaturedGameInfoGameTypeEnum;
    /**
     * Banned champion information
     * @type {Array<SpectatorV4BannedChampion>}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    bannedChampions: Array<SpectatorV4BannedChampion>;
    /**
     * The ID of the game
     * @type {number}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    gameId: number;
    /**
     * 
     * @type {SpectatorV4Observer}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    observers: SpectatorV4Observer;
    /**
     * The queue type (queue types are documented on the Game Constants page)
     * @type {number}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    gameQueueConfigId: number;
    /**
     * The game start time represented in epoch milliseconds
     * @type {number}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    gameStartTime: number;
    /**
     * The participant information
     * @type {Array<SpectatorV4Participant>}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    participants: Array<SpectatorV4Participant>;
    /**
     * The ID of the platform on which the game is being played
     * @type {string}
     * @memberof SpectatorV4FeaturedGameInfo
     */
    platformId: string;
}

/**
 * @export
 * @enum {string}
 */
export type SpectatorV4FeaturedGameInfoGameModeEnum = 'CLASSIC' | 'ODIN' | 'ARAM' | 'TUTORIAL' | 'ONEFORALL' | 'ASCENSION' | 'FIRSTBLOOD' | 'KINGPORO'

/**
 * @export
 * @enum {string}
 */
export const SpectatorV4FeaturedGameInfoGameModeEnum = {
    Classic: 'CLASSIC' as SpectatorV4FeaturedGameInfoGameModeEnum,
    Odin: 'ODIN' as SpectatorV4FeaturedGameInfoGameModeEnum,
    Aram: 'ARAM' as SpectatorV4FeaturedGameInfoGameModeEnum,
    Tutorial: 'TUTORIAL' as SpectatorV4FeaturedGameInfoGameModeEnum,
    Oneforall: 'ONEFORALL' as SpectatorV4FeaturedGameInfoGameModeEnum,
    Ascension: 'ASCENSION' as SpectatorV4FeaturedGameInfoGameModeEnum,
    Firstblood: 'FIRSTBLOOD' as SpectatorV4FeaturedGameInfoGameModeEnum,
    Kingporo: 'KINGPORO' as SpectatorV4FeaturedGameInfoGameModeEnum
};
/**
 * @export
 * @enum {string}
 */
export type SpectatorV4FeaturedGameInfoGameTypeEnum = 'CUSTOM_GAME' | 'MATCHED_GAME' | 'TUTORIAL_GAME'

/**
 * @export
 * @enum {string}
 */
export const SpectatorV4FeaturedGameInfoGameTypeEnum = {
    CustomGame: 'CUSTOM_GAME' as SpectatorV4FeaturedGameInfoGameTypeEnum,
    MatchedGame: 'MATCHED_GAME' as SpectatorV4FeaturedGameInfoGameTypeEnum,
    TutorialGame: 'TUTORIAL_GAME' as SpectatorV4FeaturedGameInfoGameTypeEnum
};



