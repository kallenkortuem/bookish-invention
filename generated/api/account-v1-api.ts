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
import { AccountV1AccountDto } from '../model';
// @ts-ignore
import { AccountV1ActiveShardDto } from '../model';
/**
 * AccountV1Api - axios parameter creator
 * @export
 */
export const AccountV1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get active shard for a player
         * @summary Get active shard for a player
         * @param {'val' | 'lor'} game 
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountV1GetActiveShard: async (game: 'val' | 'lor', puuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'game' is not null or undefined
            assertParamExists('accountV1GetActiveShard', 'game', game)
            // verify required parameter 'puuid' is not null or undefined
            assertParamExists('accountV1GetActiveShard', 'puuid', puuid)
            const localVarPath = `/riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid}`
                .replace(`{${"game"}}`, encodeURIComponent(String(game)))
                .replace(`{${"puuid"}}`, encodeURIComponent(String(puuid)));
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
         * Get account by access token
         * @summary Get account by access token
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountV1GetByAccessToken: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('accountV1GetByAccessToken', 'authorization', authorization)
            const localVarPath = `/riot/account/v1/accounts/me`;
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

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
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
         * Get account by puuid
         * @summary Get account by puuid
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountV1GetByPuuid: async (puuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'puuid' is not null or undefined
            assertParamExists('accountV1GetByPuuid', 'puuid', puuid)
            const localVarPath = `/riot/account/v1/accounts/by-puuid/{puuid}`
                .replace(`{${"puuid"}}`, encodeURIComponent(String(puuid)));
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
         * Get account by riot id
         * @summary Get account by riot id
         * @param {string} tagLine When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
         * @param {string} gameName When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountV1GetByRiotId: async (tagLine: string, gameName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagLine' is not null or undefined
            assertParamExists('accountV1GetByRiotId', 'tagLine', tagLine)
            // verify required parameter 'gameName' is not null or undefined
            assertParamExists('accountV1GetByRiotId', 'gameName', gameName)
            const localVarPath = `/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}`
                .replace(`{${"tagLine"}}`, encodeURIComponent(String(tagLine)))
                .replace(`{${"gameName"}}`, encodeURIComponent(String(gameName)));
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
 * AccountV1Api - functional programming interface
 * @export
 */
export const AccountV1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountV1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Get active shard for a player
         * @summary Get active shard for a player
         * @param {'val' | 'lor'} game 
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountV1GetActiveShard(game: 'val' | 'lor', puuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountV1ActiveShardDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountV1GetActiveShard(game, puuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get account by access token
         * @summary Get account by access token
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountV1GetByAccessToken(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountV1AccountDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountV1GetByAccessToken(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get account by puuid
         * @summary Get account by puuid
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountV1GetByPuuid(puuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountV1AccountDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountV1GetByPuuid(puuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get account by riot id
         * @summary Get account by riot id
         * @param {string} tagLine When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
         * @param {string} gameName When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountV1GetByRiotId(tagLine: string, gameName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountV1AccountDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountV1GetByRiotId(tagLine, gameName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountV1Api - factory interface
 * @export
 */
export const AccountV1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountV1ApiFp(configuration)
    return {
        /**
         * Get active shard for a player
         * @summary Get active shard for a player
         * @param {'val' | 'lor'} game 
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountV1GetActiveShard(game: 'val' | 'lor', puuid: string, options?: any): AxiosPromise<AccountV1ActiveShardDto> {
            return localVarFp.accountV1GetActiveShard(game, puuid, options).then((request) => request(axios, basePath));
        },
        /**
         * Get account by access token
         * @summary Get account by access token
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountV1GetByAccessToken(authorization: string, options?: any): AxiosPromise<AccountV1AccountDto> {
            return localVarFp.accountV1GetByAccessToken(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Get account by puuid
         * @summary Get account by puuid
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountV1GetByPuuid(puuid: string, options?: any): AxiosPromise<AccountV1AccountDto> {
            return localVarFp.accountV1GetByPuuid(puuid, options).then((request) => request(axios, basePath));
        },
        /**
         * Get account by riot id
         * @summary Get account by riot id
         * @param {string} tagLine When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
         * @param {string} gameName When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountV1GetByRiotId(tagLine: string, gameName: string, options?: any): AxiosPromise<AccountV1AccountDto> {
            return localVarFp.accountV1GetByRiotId(tagLine, gameName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountV1Api - interface
 * @export
 * @interface AccountV1Api
 */
export interface AccountV1ApiInterface {
    /**
     * Get active shard for a player
     * @summary Get active shard for a player
     * @param {'val' | 'lor'} game 
     * @param {string} puuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountV1ApiInterface
     */
    accountV1GetActiveShard(game: 'val' | 'lor', puuid: string, options?: any): AxiosPromise<AccountV1ActiveShardDto>;

    /**
     * Get account by access token
     * @summary Get account by access token
     * @param {string} authorization 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountV1ApiInterface
     */
    accountV1GetByAccessToken(authorization: string, options?: any): AxiosPromise<AccountV1AccountDto>;

    /**
     * Get account by puuid
     * @summary Get account by puuid
     * @param {string} puuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountV1ApiInterface
     */
    accountV1GetByPuuid(puuid: string, options?: any): AxiosPromise<AccountV1AccountDto>;

    /**
     * Get account by riot id
     * @summary Get account by riot id
     * @param {string} tagLine When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
     * @param {string} gameName When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountV1ApiInterface
     */
    accountV1GetByRiotId(tagLine: string, gameName: string, options?: any): AxiosPromise<AccountV1AccountDto>;

}

/**
 * AccountV1Api - object-oriented interface
 * @export
 * @class AccountV1Api
 * @extends {BaseAPI}
 */
export class AccountV1Api extends BaseAPI implements AccountV1ApiInterface {
    /**
     * Get active shard for a player
     * @summary Get active shard for a player
     * @param {'val' | 'lor'} game 
     * @param {string} puuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountV1Api
     */
    public accountV1GetActiveShard(game: 'val' | 'lor', puuid: string, options?: any) {
        return AccountV1ApiFp(this.configuration).accountV1GetActiveShard(game, puuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get account by access token
     * @summary Get account by access token
     * @param {string} authorization 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountV1Api
     */
    public accountV1GetByAccessToken(authorization: string, options?: any) {
        return AccountV1ApiFp(this.configuration).accountV1GetByAccessToken(authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get account by puuid
     * @summary Get account by puuid
     * @param {string} puuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountV1Api
     */
    public accountV1GetByPuuid(puuid: string, options?: any) {
        return AccountV1ApiFp(this.configuration).accountV1GetByPuuid(puuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get account by riot id
     * @summary Get account by riot id
     * @param {string} tagLine When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
     * @param {string} gameName When querying for a player by their riot id, the gameName and tagLine query params are required. However not all accounts have a gameName and tagLine associated so these fields may not be included in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountV1Api
     */
    public accountV1GetByRiotId(tagLine: string, gameName: string, options?: any) {
        return AccountV1ApiFp(this.configuration).accountV1GetByRiotId(tagLine, gameName, options).then((request) => request(this.axios, this.basePath));
    }
}
