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



/**
 * This object contains single Champion Mastery information for player and champion combination.
 * @export
 * @interface ChampionMasteryV4ChampionMasteryDto
 */
export interface ChampionMasteryV4ChampionMasteryDto {
    /**
     * Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
     * @type {number}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    championPointsUntilNextLevel: number;
    /**
     * Is chest granted for this champion or not in current season.
     * @type {boolean}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    chestGranted: boolean;
    /**
     * Champion ID for this entry.
     * @type {number}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    championId: number;
    /**
     * Last time this champion was played by this player - in Unix milliseconds time format.
     * @type {number}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    lastPlayTime: number;
    /**
     * Champion level for specified player and champion combination.
     * @type {number}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    championLevel: number;
    /**
     * Summoner ID for this entry. (Encrypted)
     * @type {string}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    summonerId: string;
    /**
     * Total number of champion points for this player and champion combination - they are used to determine championLevel.
     * @type {number}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    championPoints: number;
    /**
     * Number of points earned since current level has been achieved.
     * @type {number}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    championPointsSinceLastLevel: number;
    /**
     * The token earned for this champion at the current championLevel. When the championLevel is advanced the tokensEarned resets to 0.
     * @type {number}
     * @memberof ChampionMasteryV4ChampionMasteryDto
     */
    tokensEarned: number;
}


