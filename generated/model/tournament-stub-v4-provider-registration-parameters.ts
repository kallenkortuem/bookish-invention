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
 * @interface TournamentStubV4ProviderRegistrationParameters
 */
export interface TournamentStubV4ProviderRegistrationParameters {
    /**
     * The region in which the provider will be running tournaments.              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
     * @type {string}
     * @memberof TournamentStubV4ProviderRegistrationParameters
     */
    region: TournamentStubV4ProviderRegistrationParametersRegionEnum;
    /**
     * The provider\'s callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
     * @type {string}
     * @memberof TournamentStubV4ProviderRegistrationParameters
     */
    url: string;
}

/**
 * @export
 * @enum {string}
 */
export type TournamentStubV4ProviderRegistrationParametersRegionEnum = 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'

/**
 * @export
 * @enum {string}
 */
export const TournamentStubV4ProviderRegistrationParametersRegionEnum = {
    Br: 'BR' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Eune: 'EUNE' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Euw: 'EUW' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Jp: 'JP' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Lan: 'LAN' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Las: 'LAS' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Na: 'NA' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Oce: 'OCE' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Pbe: 'PBE' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Ru: 'RU' as TournamentStubV4ProviderRegistrationParametersRegionEnum,
    Tr: 'TR' as TournamentStubV4ProviderRegistrationParametersRegionEnum
};



