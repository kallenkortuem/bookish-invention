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


import { MatchV5MatchInfoParticipantPerks } from './match-v5-match-info-participant-perks';

/**
 * 
 * @export
 * @interface MatchV5MatchInfoParticipant
 */
export interface MatchV5MatchInfoParticipant {
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    assists: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    baronKills: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    bountyLevel: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    champExperience: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    champLevel: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    championId: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    championName: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    championTransform: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    consumablesPurchased: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    damageDealtToBuildings: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    damageDealtToObjectives: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    damageDealtToTurrets: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    damageSelfMitigated: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    deaths: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    detectorWardsPlaced: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    doubleKills: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    dragonKills: number;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoParticipant
     */
    firstBloodAssist: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoParticipant
     */
    firstBloodKill: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoParticipant
     */
    firstTowerAssist: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoParticipant
     */
    firstTowerKill: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoParticipant
     */
    gameEndedInEarlySurrender: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoParticipant
     */
    gameEndedInSurrender: boolean;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    goldEarned: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    goldSpent: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    individualPosition: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    inhibitorKills: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    inhibitorsLost: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    item0: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    item1: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    item2: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    item3: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    item4: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    item5: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    item6: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    itemsPurchased: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    killingSprees: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    kills: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    lane: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    largestCriticalStrike: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    largestKillingSpree: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    largestMultiKill: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    longestTimeSpentLiving: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    magicDamageDealt: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    magicDamageDealtToChampions: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    magicDamageTaken: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    neutralMinionsKilled: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    nexusKills: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    nexusLost: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    objectivesStolen: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    objectivesStolenAssists: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    participantId: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    pentaKills: number;
    /**
     * 
     * @type {MatchV5MatchInfoParticipantPerks}
     * @memberof MatchV5MatchInfoParticipant
     */
    perks: MatchV5MatchInfoParticipantPerks;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    physicalDamageDealt: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    physicalDamageDealtToChampions: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    physicalDamageTaken: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    profileIcon: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    puuid: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    quadraKills: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    riotIdName: string;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    riotIdTagline: string;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    role: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    sightWardsBoughtInGame: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    spell1Casts: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    spell2Casts: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    spell3Casts: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    spell4Casts: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    summoner1Casts: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    summoner1Id: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    summoner2Casts: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    summoner2Id: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    summonerId: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    summonerLevel: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    summonerName: string;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoParticipant
     */
    teamEarlySurrendered: boolean;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    teamId: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV5MatchInfoParticipant
     */
    teamPosition: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    timeCCingOthers: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    timePlayed: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalDamageDealt: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalDamageDealtToChampions: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalDamageShieldedOnTeammates: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalDamageTaken: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalHeal: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalHealsOnTeammates: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalMinionsKilled: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalTimeCCDealt: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalTimeSpentDead: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    totalUnitsHealed: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    tripleKills: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    trueDamageDealt: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    trueDamageDealtToChampions: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    trueDamageTaken: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    turretKills: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    turretsLost: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    unrealKills: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    visionScore: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    visionWardsBoughtInGame: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    wardsKilled: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV5MatchInfoParticipant
     */
    wardsPlaced: number;
    /**
     * 
     * @type {boolean}
     * @memberof MatchV5MatchInfoParticipant
     */
    win: boolean;
}

