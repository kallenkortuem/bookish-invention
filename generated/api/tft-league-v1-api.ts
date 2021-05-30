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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TftLeagueV1LeagueEntryDTO } from '../model';
// @ts-ignore
import { TftLeagueV1LeagueListDTO } from '../model';
// @ts-ignore
import { TftLeagueV1TopRatedLadderEntryDto } from '../model';
/**
 * TftLeagueV1Api - axios parameter creator
 * @export
 */
export const TftLeagueV1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the challenger league.
         * @summary Get the challenger league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetChallengerLeague: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tft/league/v1/challenger`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the grandmaster league.
         * @summary Get the grandmaster league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetGrandmasterLeague: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tft/league/v1/grandmaster`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get league with given ID, including inactive entries.
         * @summary Get league with given ID, including inactive entries.
         * @param {string} leagueId The UUID of the league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetLeagueById: async (leagueId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'leagueId' is not null or undefined
            assertParamExists('tftLeagueV1GetLeagueById', 'leagueId', leagueId)
            const localVarPath = `/tft/league/v1/leagues/{leagueId}`
                .replace(`{${"leagueId"}}`, encodeURIComponent(String(leagueId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all the league entries.
         * @summary Get all the league entries.
         * @param {'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
         * @param {'I' | 'II' | 'III' | 'IV'} division 
         * @param {number} [page] Defaults to 1. Starts with page 1.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetLeagueEntries: async (tier: 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tier' is not null or undefined
            assertParamExists('tftLeagueV1GetLeagueEntries', 'tier', tier)
            // verify required parameter 'division' is not null or undefined
            assertParamExists('tftLeagueV1GetLeagueEntries', 'division', division)
            const localVarPath = `/tft/league/v1/entries/{tier}/{division}`
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
        /**
         * Get league entries for a given summoner ID.
         * @summary Get league entries for a given summoner ID.
         * @param {string} summonerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetLeagueEntriesForSummoner: async (summonerId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'summonerId' is not null or undefined
            assertParamExists('tftLeagueV1GetLeagueEntriesForSummoner', 'summonerId', summonerId)
            const localVarPath = `/tft/league/v1/entries/by-summoner/{summonerId}`
                .replace(`{${"summonerId"}}`, encodeURIComponent(String(summonerId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the master league.
         * @summary Get the master league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetMasterLeague: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tft/league/v1/master`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the top rated ladder for given queue
         * @summary Get the top rated ladder for given queue
         * @param {'RANKED_TFT_TURBO'} queue 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetTopRatedLadder: async (queue: 'RANKED_TFT_TURBO', options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'queue' is not null or undefined
            assertParamExists('tftLeagueV1GetTopRatedLadder', 'queue', queue)
            const localVarPath = `/tft/league/v1/rated-ladders/{queue}/top`
                .replace(`{${"queue"}}`, encodeURIComponent(String(queue)));
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
 * TftLeagueV1Api - functional programming interface
 * @export
 */
export const TftLeagueV1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TftLeagueV1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the challenger league.
         * @summary Get the challenger league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tftLeagueV1GetChallengerLeague(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TftLeagueV1LeagueListDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tftLeagueV1GetChallengerLeague(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the grandmaster league.
         * @summary Get the grandmaster league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tftLeagueV1GetGrandmasterLeague(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TftLeagueV1LeagueListDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tftLeagueV1GetGrandmasterLeague(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get league with given ID, including inactive entries.
         * @summary Get league with given ID, including inactive entries.
         * @param {string} leagueId The UUID of the league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tftLeagueV1GetLeagueById(leagueId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TftLeagueV1LeagueListDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tftLeagueV1GetLeagueById(leagueId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all the league entries.
         * @summary Get all the league entries.
         * @param {'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
         * @param {'I' | 'II' | 'III' | 'IV'} division 
         * @param {number} [page] Defaults to 1. Starts with page 1.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tftLeagueV1GetLeagueEntries(tier: 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TftLeagueV1LeagueEntryDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tftLeagueV1GetLeagueEntries(tier, division, page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get league entries for a given summoner ID.
         * @summary Get league entries for a given summoner ID.
         * @param {string} summonerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tftLeagueV1GetLeagueEntriesForSummoner(summonerId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TftLeagueV1LeagueEntryDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tftLeagueV1GetLeagueEntriesForSummoner(summonerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the master league.
         * @summary Get the master league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tftLeagueV1GetMasterLeague(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TftLeagueV1LeagueListDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tftLeagueV1GetMasterLeague(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the top rated ladder for given queue
         * @summary Get the top rated ladder for given queue
         * @param {'RANKED_TFT_TURBO'} queue 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tftLeagueV1GetTopRatedLadder(queue: 'RANKED_TFT_TURBO', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TftLeagueV1TopRatedLadderEntryDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tftLeagueV1GetTopRatedLadder(queue, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TftLeagueV1Api - factory interface
 * @export
 */
export const TftLeagueV1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TftLeagueV1ApiFp(configuration)
    return {
        /**
         * Get the challenger league.
         * @summary Get the challenger league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetChallengerLeague(options?: any): AxiosPromise<TftLeagueV1LeagueListDTO> {
            return localVarFp.tftLeagueV1GetChallengerLeague(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the grandmaster league.
         * @summary Get the grandmaster league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetGrandmasterLeague(options?: any): AxiosPromise<TftLeagueV1LeagueListDTO> {
            return localVarFp.tftLeagueV1GetGrandmasterLeague(options).then((request) => request(axios, basePath));
        },
        /**
         * Get league with given ID, including inactive entries.
         * @summary Get league with given ID, including inactive entries.
         * @param {string} leagueId The UUID of the league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetLeagueById(leagueId: string, options?: any): AxiosPromise<TftLeagueV1LeagueListDTO> {
            return localVarFp.tftLeagueV1GetLeagueById(leagueId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all the league entries.
         * @summary Get all the league entries.
         * @param {'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
         * @param {'I' | 'II' | 'III' | 'IV'} division 
         * @param {number} [page] Defaults to 1. Starts with page 1.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetLeagueEntries(tier: 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options?: any): AxiosPromise<Array<TftLeagueV1LeagueEntryDTO>> {
            return localVarFp.tftLeagueV1GetLeagueEntries(tier, division, page, options).then((request) => request(axios, basePath));
        },
        /**
         * Get league entries for a given summoner ID.
         * @summary Get league entries for a given summoner ID.
         * @param {string} summonerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetLeagueEntriesForSummoner(summonerId: string, options?: any): AxiosPromise<Array<TftLeagueV1LeagueEntryDTO>> {
            return localVarFp.tftLeagueV1GetLeagueEntriesForSummoner(summonerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the master league.
         * @summary Get the master league.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetMasterLeague(options?: any): AxiosPromise<TftLeagueV1LeagueListDTO> {
            return localVarFp.tftLeagueV1GetMasterLeague(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the top rated ladder for given queue
         * @summary Get the top rated ladder for given queue
         * @param {'RANKED_TFT_TURBO'} queue 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tftLeagueV1GetTopRatedLadder(queue: 'RANKED_TFT_TURBO', options?: any): AxiosPromise<Array<TftLeagueV1TopRatedLadderEntryDto>> {
            return localVarFp.tftLeagueV1GetTopRatedLadder(queue, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TftLeagueV1Api - interface
 * @export
 * @interface TftLeagueV1Api
 */
export interface TftLeagueV1ApiInterface {
    /**
     * Get the challenger league.
     * @summary Get the challenger league.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1ApiInterface
     */
    tftLeagueV1GetChallengerLeague(options?: any): AxiosPromise<TftLeagueV1LeagueListDTO>;

    /**
     * Get the grandmaster league.
     * @summary Get the grandmaster league.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1ApiInterface
     */
    tftLeagueV1GetGrandmasterLeague(options?: any): AxiosPromise<TftLeagueV1LeagueListDTO>;

    /**
     * Get league with given ID, including inactive entries.
     * @summary Get league with given ID, including inactive entries.
     * @param {string} leagueId The UUID of the league.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1ApiInterface
     */
    tftLeagueV1GetLeagueById(leagueId: string, options?: any): AxiosPromise<TftLeagueV1LeagueListDTO>;

    /**
     * Get all the league entries.
     * @summary Get all the league entries.
     * @param {'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
     * @param {'I' | 'II' | 'III' | 'IV'} division 
     * @param {number} [page] Defaults to 1. Starts with page 1.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1ApiInterface
     */
    tftLeagueV1GetLeagueEntries(tier: 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options?: any): AxiosPromise<Array<TftLeagueV1LeagueEntryDTO>>;

    /**
     * Get league entries for a given summoner ID.
     * @summary Get league entries for a given summoner ID.
     * @param {string} summonerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1ApiInterface
     */
    tftLeagueV1GetLeagueEntriesForSummoner(summonerId: string, options?: any): AxiosPromise<Array<TftLeagueV1LeagueEntryDTO>>;

    /**
     * Get the master league.
     * @summary Get the master league.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1ApiInterface
     */
    tftLeagueV1GetMasterLeague(options?: any): AxiosPromise<TftLeagueV1LeagueListDTO>;

    /**
     * Get the top rated ladder for given queue
     * @summary Get the top rated ladder for given queue
     * @param {'RANKED_TFT_TURBO'} queue 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1ApiInterface
     */
    tftLeagueV1GetTopRatedLadder(queue: 'RANKED_TFT_TURBO', options?: any): AxiosPromise<Array<TftLeagueV1TopRatedLadderEntryDto>>;

}

/**
 * TftLeagueV1Api - object-oriented interface
 * @export
 * @class TftLeagueV1Api
 * @extends {BaseAPI}
 */
export class TftLeagueV1Api extends BaseAPI implements TftLeagueV1ApiInterface {
    /**
     * Get the challenger league.
     * @summary Get the challenger league.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1Api
     */
    public tftLeagueV1GetChallengerLeague(options?: any) {
        return TftLeagueV1ApiFp(this.configuration).tftLeagueV1GetChallengerLeague(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the grandmaster league.
     * @summary Get the grandmaster league.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1Api
     */
    public tftLeagueV1GetGrandmasterLeague(options?: any) {
        return TftLeagueV1ApiFp(this.configuration).tftLeagueV1GetGrandmasterLeague(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get league with given ID, including inactive entries.
     * @summary Get league with given ID, including inactive entries.
     * @param {string} leagueId The UUID of the league.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1Api
     */
    public tftLeagueV1GetLeagueById(leagueId: string, options?: any) {
        return TftLeagueV1ApiFp(this.configuration).tftLeagueV1GetLeagueById(leagueId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all the league entries.
     * @summary Get all the league entries.
     * @param {'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'} tier 
     * @param {'I' | 'II' | 'III' | 'IV'} division 
     * @param {number} [page] Defaults to 1. Starts with page 1.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1Api
     */
    public tftLeagueV1GetLeagueEntries(tier: 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON', division: 'I' | 'II' | 'III' | 'IV', page?: number, options?: any) {
        return TftLeagueV1ApiFp(this.configuration).tftLeagueV1GetLeagueEntries(tier, division, page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get league entries for a given summoner ID.
     * @summary Get league entries for a given summoner ID.
     * @param {string} summonerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1Api
     */
    public tftLeagueV1GetLeagueEntriesForSummoner(summonerId: string, options?: any) {
        return TftLeagueV1ApiFp(this.configuration).tftLeagueV1GetLeagueEntriesForSummoner(summonerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the master league.
     * @summary Get the master league.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1Api
     */
    public tftLeagueV1GetMasterLeague(options?: any) {
        return TftLeagueV1ApiFp(this.configuration).tftLeagueV1GetMasterLeague(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the top rated ladder for given queue
     * @summary Get the top rated ladder for given queue
     * @param {'RANKED_TFT_TURBO'} queue 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TftLeagueV1Api
     */
    public tftLeagueV1GetTopRatedLadder(queue: 'RANKED_TFT_TURBO', options?: any) {
        return TftLeagueV1ApiFp(this.configuration).tftLeagueV1GetTopRatedLadder(queue, options).then((request) => request(this.axios, this.basePath));
    }
}
