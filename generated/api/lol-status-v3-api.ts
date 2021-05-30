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
import { LolStatusV3ShardStatus } from '../model';
/**
 * LolStatusV3Api - axios parameter creator
 * @export
 */
export const LolStatusV3ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get League of Legends status for the given shard. ## Rate Limit Notes Requests to this API are not counted against the application Rate Limits.
         * @summary Get League of Legends status for the given shard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lolStatusV3GetShardData: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/lol/status/v3/shard-data`;
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
 * LolStatusV3Api - functional programming interface
 * @export
 */
export const LolStatusV3ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LolStatusV3ApiAxiosParamCreator(configuration)
    return {
        /**
         * Get League of Legends status for the given shard. ## Rate Limit Notes Requests to this API are not counted against the application Rate Limits.
         * @summary Get League of Legends status for the given shard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lolStatusV3GetShardData(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LolStatusV3ShardStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lolStatusV3GetShardData(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LolStatusV3Api - factory interface
 * @export
 */
export const LolStatusV3ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LolStatusV3ApiFp(configuration)
    return {
        /**
         * Get League of Legends status for the given shard. ## Rate Limit Notes Requests to this API are not counted against the application Rate Limits.
         * @summary Get League of Legends status for the given shard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lolStatusV3GetShardData(options?: any): AxiosPromise<LolStatusV3ShardStatus> {
            return localVarFp.lolStatusV3GetShardData(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LolStatusV3Api - interface
 * @export
 * @interface LolStatusV3Api
 */
export interface LolStatusV3ApiInterface {
    /**
     * Get League of Legends status for the given shard. ## Rate Limit Notes Requests to this API are not counted against the application Rate Limits.
     * @summary Get League of Legends status for the given shard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LolStatusV3ApiInterface
     */
    lolStatusV3GetShardData(options?: any): AxiosPromise<LolStatusV3ShardStatus>;

}

/**
 * LolStatusV3Api - object-oriented interface
 * @export
 * @class LolStatusV3Api
 * @extends {BaseAPI}
 */
export class LolStatusV3Api extends BaseAPI implements LolStatusV3ApiInterface {
    /**
     * Get League of Legends status for the given shard. ## Rate Limit Notes Requests to this API are not counted against the application Rate Limits.
     * @summary Get League of Legends status for the given shard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LolStatusV3Api
     */
    public lolStatusV3GetShardData(options?: any) {
        return LolStatusV3ApiFp(this.configuration).lolStatusV3GetShardData(options).then((request) => request(this.axios, this.basePath));
    }
}
