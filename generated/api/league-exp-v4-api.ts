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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { LeagueExpV4LeagueEntryDTO } from '../model';
/**
 * LeagueExpV4Api - axios parameter creator
 * @export
 */
export const LeagueExpV4ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all the league entries.
         * @summary Get all the league entries.
         * @param {'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'} queue Note that the queue value must be a valid ranked queue.
         * @param {'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
         * @param {'I' | 'II' | 'III' | 'IV'} division 
         * @param {number} [page] Defaults to 1. Starts with page 1.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        leagueExpV4GetLeagueEntries: async (queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT', tier: 'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'queue' is not null or undefined
            assertParamExists('leagueExpV4GetLeagueEntries', 'queue', queue)
            // verify required parameter 'tier' is not null or undefined
            assertParamExists('leagueExpV4GetLeagueEntries', 'tier', tier)
            // verify required parameter 'division' is not null or undefined
            assertParamExists('leagueExpV4GetLeagueEntries', 'division', division)
            const localVarPath = `/lol/league-exp/v4/entries/{queue}/{tier}/{division}`
                .replace(`{${"queue"}}`, encodeURIComponent(String(queue)))
                .replace(`{${"tier"}}`, encodeURIComponent(String(tier)))
                .replace(`{${"division"}}`, encodeURIComponent(String(division)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication X-Riot-Token required
            await setApiKeyToObject(localVarHeaderParameter, "X-Riot-Token", configuration)

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_key", configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LeagueExpV4Api - functional programming interface
 * @export
 */
export const LeagueExpV4ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LeagueExpV4ApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all the league entries.
         * @summary Get all the league entries.
         * @param {'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'} queue Note that the queue value must be a valid ranked queue.
         * @param {'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
         * @param {'I' | 'II' | 'III' | 'IV'} division 
         * @param {number} [page] Defaults to 1. Starts with page 1.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async leagueExpV4GetLeagueEntries(queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT', tier: 'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LeagueExpV4LeagueEntryDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.leagueExpV4GetLeagueEntries(queue, tier, division, page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LeagueExpV4Api - factory interface
 * @export
 */
export const LeagueExpV4ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LeagueExpV4ApiFp(configuration)
    return {
        /**
         * Get all the league entries.
         * @summary Get all the league entries.
         * @param {'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'} queue Note that the queue value must be a valid ranked queue.
         * @param {'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
         * @param {'I' | 'II' | 'III' | 'IV'} division 
         * @param {number} [page] Defaults to 1. Starts with page 1.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        leagueExpV4GetLeagueEntries(queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT', tier: 'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options?: any): AxiosPromise<Array<LeagueExpV4LeagueEntryDTO>> {
            return localVarFp.leagueExpV4GetLeagueEntries(queue, tier, division, page, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LeagueExpV4Api - interface
 * @export
 * @interface LeagueExpV4Api
 */
export interface LeagueExpV4ApiInterface {
    /**
     * Get all the league entries.
     * @summary Get all the league entries.
     * @param {'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'} queue Note that the queue value must be a valid ranked queue.
     * @param {'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
     * @param {'I' | 'II' | 'III' | 'IV'} division 
     * @param {number} [page] Defaults to 1. Starts with page 1.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeagueExpV4ApiInterface
     */
    leagueExpV4GetLeagueEntries(queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT', tier: 'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options?: any): AxiosPromise<Array<LeagueExpV4LeagueEntryDTO>>;

}

/**
 * LeagueExpV4Api - object-oriented interface
 * @export
 * @class LeagueExpV4Api
 * @extends {BaseAPI}
 */
export class LeagueExpV4Api extends BaseAPI implements LeagueExpV4ApiInterface {
    /**
     * Get all the league entries.
     * @summary Get all the league entries.
     * @param {'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'} queue Note that the queue value must be a valid ranked queue.
     * @param {'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
     * @param {'I' | 'II' | 'III' | 'IV'} division 
     * @param {number} [page] Defaults to 1. Starts with page 1.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeagueExpV4Api
     */
    public leagueExpV4GetLeagueEntries(queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT', tier: 'CHALLENGER' | 'GRANDMASTER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options?: any) {
        return LeagueExpV4ApiFp(this.configuration).leagueExpV4GetLeagueEntries(queue, tier, division, page, options).then((request) => request(this.axios, this.basePath));
    }
}
