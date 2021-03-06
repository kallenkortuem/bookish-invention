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


import { TftMatchV1CompanionDto } from './tft-match-v1-companion-dto';
import { TftMatchV1TraitDto } from './tft-match-v1-trait-dto';
import { TftMatchV1UnitDto } from './tft-match-v1-unit-dto';

/**
 * 
 * @export
 * @interface TftMatchV1ParticipantDto
 */
export interface TftMatchV1ParticipantDto {
    /**
     * 
     * @type {TftMatchV1CompanionDto}
     * @memberof TftMatchV1ParticipantDto
     */
    companion: TftMatchV1CompanionDto;
    /**
     * Gold left after participant was eliminated.
     * @type {number}
     * @memberof TftMatchV1ParticipantDto
     */
    gold_left: number;
    /**
     * The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5.
     * @type {number}
     * @memberof TftMatchV1ParticipantDto
     */
    last_round: number;
    /**
     * Participant Little Legend level. Note: This is not the number of active units.
     * @type {number}
     * @memberof TftMatchV1ParticipantDto
     */
    level: number;
    /**
     * Participant placement upon elimination.
     * @type {number}
     * @memberof TftMatchV1ParticipantDto
     */
    placement: number;
    /**
     * Number of players the participant eliminated.
     * @type {number}
     * @memberof TftMatchV1ParticipantDto
     */
    players_eliminated: number;
    /**
     * 
     * @type {string}
     * @memberof TftMatchV1ParticipantDto
     */
    puuid: string;
    /**
     * The number of seconds before the participant was eliminated.
     * @type {number}
     * @memberof TftMatchV1ParticipantDto
     */
    time_eliminated: number;
    /**
     * Damage the participant dealt to other players.
     * @type {number}
     * @memberof TftMatchV1ParticipantDto
     */
    total_damage_to_players: number;
    /**
     * A complete list of traits for the participant\'s active units.
     * @type {Array<TftMatchV1TraitDto>}
     * @memberof TftMatchV1ParticipantDto
     */
    traits: Array<TftMatchV1TraitDto>;
    /**
     * A list of active units for the participant.
     * @type {Array<TftMatchV1UnitDto>}
     * @memberof TftMatchV1ParticipantDto
     */
    units: Array<TftMatchV1UnitDto>;
}


