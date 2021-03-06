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
import { SpectatorV4CurrentGameInfo } from '../model';
// @ts-ignore
import { SpectatorV4FeaturedGames } from '../model';
/**
 * SpectatorV4Api - axios parameter creator
 * @export
 */
export const SpectatorV4ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get current game information for the given summoner ID.
         * @summary Get current game information for the given summoner ID.
         * @param {string} encryptedSummonerId The ID of the summoner.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectatorV4GetCurrentGameInfoBySummoner: async (encryptedSummonerId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'encryptedSummonerId' is not null or undefined
            assertParamExists('spectatorV4GetCurrentGameInfoBySummoner', 'encryptedSummonerId', encryptedSummonerId)
            const localVarPath = `/lol/spectator/v4/active-games/by-summoner/{encryptedSummonerId}`
                .replace(`{${"encryptedSummonerId"}}`, encodeURIComponent(String(encryptedSummonerId)));
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
         * Get list of featured games.
         * @summary Get list of featured games.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectatorV4GetFeaturedGames: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/lol/spectator/v4/featured-games`;
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
 * SpectatorV4Api - functional programming interface
 * @export
 */
export const SpectatorV4ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SpectatorV4ApiAxiosParamCreator(configuration)
    return {
        /**
         * Get current game information for the given summoner ID.
         * @summary Get current game information for the given summoner ID.
         * @param {string} encryptedSummonerId The ID of the summoner.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectatorV4GetCurrentGameInfoBySummoner(encryptedSummonerId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpectatorV4CurrentGameInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.spectatorV4GetCurrentGameInfoBySummoner(encryptedSummonerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get list of featured games.
         * @summary Get list of featured games.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectatorV4GetFeaturedGames(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpectatorV4FeaturedGames>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.spectatorV4GetFeaturedGames(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SpectatorV4Api - factory interface
 * @export
 */
export const SpectatorV4ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SpectatorV4ApiFp(configuration)
    return {
        /**
         * Get current game information for the given summoner ID.
         * @summary Get current game information for the given summoner ID.
         * @param {string} encryptedSummonerId The ID of the summoner.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectatorV4GetCurrentGameInfoBySummoner(encryptedSummonerId: string, options?: any): AxiosPromise<SpectatorV4CurrentGameInfo> {
            return localVarFp.spectatorV4GetCurrentGameInfoBySummoner(encryptedSummonerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get list of featured games.
         * @summary Get list of featured games.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectatorV4GetFeaturedGames(options?: any): AxiosPromise<SpectatorV4FeaturedGames> {
            return localVarFp.spectatorV4GetFeaturedGames(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SpectatorV4Api - interface
 * @export
 * @interface SpectatorV4Api
 */
export interface SpectatorV4ApiInterface {
    /**
     * Get current game information for the given summoner ID.
     * @summary Get current game information for the given summoner ID.
     * @param {string} encryptedSummonerId The ID of the summoner.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectatorV4ApiInterface
     */
    spectatorV4GetCurrentGameInfoBySummoner(encryptedSummonerId: string, options?: any): AxiosPromise<SpectatorV4CurrentGameInfo>;

    /**
     * Get list of featured games.
     * @summary Get list of featured games.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectatorV4ApiInterface
     */
    spectatorV4GetFeaturedGames(options?: any): AxiosPromise<SpectatorV4FeaturedGames>;

}

/**
 * SpectatorV4Api - object-oriented interface
 * @export
 * @class SpectatorV4Api
 * @extends {BaseAPI}
 */
export class SpectatorV4Api extends BaseAPI implements SpectatorV4ApiInterface {
    /**
     * Get current game information for the given summoner ID.
     * @summary Get current game information for the given summoner ID.
     * @param {string} encryptedSummonerId The ID of the summoner.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectatorV4Api
     */
    public spectatorV4GetCurrentGameInfoBySummoner(encryptedSummonerId: string, options?: any) {
        return SpectatorV4ApiFp(this.configuration).spectatorV4GetCurrentGameInfoBySummoner(encryptedSummonerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get list of featured games.
     * @summary Get list of featured games.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectatorV4Api
     */
    public spectatorV4GetFeaturedGames(options?: any) {
        return SpectatorV4ApiFp(this.configuration).spectatorV4GetFeaturedGames(options).then((request) => request(this.axios, this.basePath));
    }
}
