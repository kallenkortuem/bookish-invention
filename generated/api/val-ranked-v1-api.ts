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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ValRankedV1LeaderboardDto } from '../model';
/**
 * ValRankedV1Api - axios parameter creator
 * @export
 */
export const ValRankedV1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get leaderboard for the competitive queue
         * @summary Get leaderboard for the competitive queue
         * @param {string} actId Act ids can be found using the val-content API.
         * @param {number} [size] Defaults to 200. Valid values: 1 to 200.
         * @param {number} [startIndex] Defaults to 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valRankedV1GetLeaderboard: async (actId: string, size?: number, startIndex?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'actId' is not null or undefined
            assertParamExists('valRankedV1GetLeaderboard', 'actId', actId)
            const localVarPath = `/val/ranked/v1/leaderboards/by-act/{actId}`
                .replace(`{${"actId"}}`, encodeURIComponent(String(actId)));
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

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
 * ValRankedV1Api - functional programming interface
 * @export
 */
export const ValRankedV1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ValRankedV1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Get leaderboard for the competitive queue
         * @summary Get leaderboard for the competitive queue
         * @param {string} actId Act ids can be found using the val-content API.
         * @param {number} [size] Defaults to 200. Valid values: 1 to 200.
         * @param {number} [startIndex] Defaults to 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async valRankedV1GetLeaderboard(actId: string, size?: number, startIndex?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValRankedV1LeaderboardDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.valRankedV1GetLeaderboard(actId, size, startIndex, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ValRankedV1Api - factory interface
 * @export
 */
export const ValRankedV1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ValRankedV1ApiFp(configuration)
    return {
        /**
         * Get leaderboard for the competitive queue
         * @summary Get leaderboard for the competitive queue
         * @param {string} actId Act ids can be found using the val-content API.
         * @param {number} [size] Defaults to 200. Valid values: 1 to 200.
         * @param {number} [startIndex] Defaults to 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valRankedV1GetLeaderboard(actId: string, size?: number, startIndex?: number, options?: any): AxiosPromise<ValRankedV1LeaderboardDto> {
            return localVarFp.valRankedV1GetLeaderboard(actId, size, startIndex, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ValRankedV1Api - interface
 * @export
 * @interface ValRankedV1Api
 */
export interface ValRankedV1ApiInterface {
    /**
     * Get leaderboard for the competitive queue
     * @summary Get leaderboard for the competitive queue
     * @param {string} actId Act ids can be found using the val-content API.
     * @param {number} [size] Defaults to 200. Valid values: 1 to 200.
     * @param {number} [startIndex] Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValRankedV1ApiInterface
     */
    valRankedV1GetLeaderboard(actId: string, size?: number, startIndex?: number, options?: any): AxiosPromise<ValRankedV1LeaderboardDto>;

}

/**
 * ValRankedV1Api - object-oriented interface
 * @export
 * @class ValRankedV1Api
 * @extends {BaseAPI}
 */
export class ValRankedV1Api extends BaseAPI implements ValRankedV1ApiInterface {
    /**
     * Get leaderboard for the competitive queue
     * @summary Get leaderboard for the competitive queue
     * @param {string} actId Act ids can be found using the val-content API.
     * @param {number} [size] Defaults to 200. Valid values: 1 to 200.
     * @param {number} [startIndex] Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValRankedV1Api
     */
    public valRankedV1GetLeaderboard(actId: string, size?: number, startIndex?: number, options?: any) {
        return ValRankedV1ApiFp(this.configuration).valRankedV1GetLeaderboard(actId, size, startIndex, options).then((request) => request(this.axios, this.basePath));
    }
}
