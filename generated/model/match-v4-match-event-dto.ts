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


import { MatchV4MatchPositionDto } from './match-v4-match-position-dto';

/**
 * 
 * @export
 * @interface MatchV4MatchEventDto
 */
export interface MatchV4MatchEventDto {
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    laneType?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    skillSlot?: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    ascendedType?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    creatorId?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    afterId?: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    eventType?: string;
    /**
     * (Legal values:  CHAMPION_KILL,  WARD_PLACED,  WARD_KILL,  BUILDING_KILL,  ELITE_MONSTER_KILL,  ITEM_PURCHASED,  ITEM_SOLD,  ITEM_DESTROYED,  ITEM_UNDO,  SKILL_LEVEL_UP,  ASCENDED_EVENT,  CAPTURE_POINT,  PORO_KING_SUMMON)
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    type: MatchV4MatchEventDtoTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    levelUpType?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    wardType?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    participantId?: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    towerType?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    itemId?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    beforeId?: number;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    pointCaptured?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    monsterType?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    monsterSubType?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    teamId?: number;
    /**
     * 
     * @type {MatchV4MatchPositionDto}
     * @memberof MatchV4MatchEventDto
     */
    position?: MatchV4MatchPositionDto;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    killerId?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    timestamp: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof MatchV4MatchEventDto
     */
    assistingParticipantIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof MatchV4MatchEventDto
     */
    buildingType?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchV4MatchEventDto
     */
    victimId?: number;
}

/**
 * @export
 * @enum {string}
 */
export type MatchV4MatchEventDtoTypeEnum = 'CHAMPION_KILL' | 'WARD_PLACED' | 'WARD_KILL' | 'BUILDING_KILL' | 'ELITE_MONSTER_KILL' | 'ITEM_PURCHASED' | 'ITEM_SOLD' | 'ITEM_DESTROYED' | 'ITEM_UNDO' | 'SKILL_LEVEL_UP' | 'ASCENDED_EVENT' | 'CAPTURE_POINT' | 'PORO_KING_SUMMON'

/**
 * @export
 * @enum {string}
 */
export const MatchV4MatchEventDtoTypeEnum = {
    ChampionKill: 'CHAMPION_KILL' as MatchV4MatchEventDtoTypeEnum,
    WardPlaced: 'WARD_PLACED' as MatchV4MatchEventDtoTypeEnum,
    WardKill: 'WARD_KILL' as MatchV4MatchEventDtoTypeEnum,
    BuildingKill: 'BUILDING_KILL' as MatchV4MatchEventDtoTypeEnum,
    EliteMonsterKill: 'ELITE_MONSTER_KILL' as MatchV4MatchEventDtoTypeEnum,
    ItemPurchased: 'ITEM_PURCHASED' as MatchV4MatchEventDtoTypeEnum,
    ItemSold: 'ITEM_SOLD' as MatchV4MatchEventDtoTypeEnum,
    ItemDestroyed: 'ITEM_DESTROYED' as MatchV4MatchEventDtoTypeEnum,
    ItemUndo: 'ITEM_UNDO' as MatchV4MatchEventDtoTypeEnum,
    SkillLevelUp: 'SKILL_LEVEL_UP' as MatchV4MatchEventDtoTypeEnum,
    AscendedEvent: 'ASCENDED_EVENT' as MatchV4MatchEventDtoTypeEnum,
    CapturePoint: 'CAPTURE_POINT' as MatchV4MatchEventDtoTypeEnum,
    PoroKingSummon: 'PORO_KING_SUMMON' as MatchV4MatchEventDtoTypeEnum
};



