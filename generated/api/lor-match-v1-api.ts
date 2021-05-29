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
import { LorMatchV1MatchDto } from '../model';
/**
 * LorMatchV1Api - axios parameter creator
 * @export
 */
export const LorMatchV1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get match by id
         * @summary Get match by id
         * @param {string} matchId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lorMatchV1GetMatch: async (matchId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'matchId' is not null or undefined
            assertParamExists('lorMatchV1GetMatch', 'matchId', matchId)
            const localVarPath = `/lor/match/v1/matches/{matchId}`
                .replace(`{${"matchId"}}`, encodeURIComponent(String(matchId)));
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
         * Get a list of match ids by PUUID
         * @summary Get a list of match ids by PUUID
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lorMatchV1GetMatchIdsByPUUID: async (puuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'puuid' is not null or undefined
            assertParamExists('lorMatchV1GetMatchIdsByPUUID', 'puuid', puuid)
            const localVarPath = `/lor/match/v1/matches/by-puuid/{puuid}/ids`
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
    }
};

/**
 * LorMatchV1Api - functional programming interface
 * @export
 */
export const LorMatchV1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LorMatchV1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Get match by id
         * @summary Get match by id
         * @param {string} matchId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lorMatchV1GetMatch(matchId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LorMatchV1MatchDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lorMatchV1GetMatch(matchId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of match ids by PUUID
         * @summary Get a list of match ids by PUUID
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lorMatchV1GetMatchIdsByPUUID(puuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lorMatchV1GetMatchIdsByPUUID(puuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LorMatchV1Api - factory interface
 * @export
 */
export const LorMatchV1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LorMatchV1ApiFp(configuration)
    return {
        /**
         * Get match by id
         * @summary Get match by id
         * @param {string} matchId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lorMatchV1GetMatch(matchId: string, options?: any): AxiosPromise<LorMatchV1MatchDto> {
            return localVarFp.lorMatchV1GetMatch(matchId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of match ids by PUUID
         * @summary Get a list of match ids by PUUID
         * @param {string} puuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lorMatchV1GetMatchIdsByPUUID(puuid: string, options?: any): AxiosPromise<Array<string>> {
            return localVarFp.lorMatchV1GetMatchIdsByPUUID(puuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LorMatchV1Api - interface
 * @export
 * @interface LorMatchV1Api
 */
export interface LorMatchV1ApiInterface {
    /**
     * Get match by id
     * @summary Get match by id
     * @param {string} matchId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LorMatchV1ApiInterface
     */
    lorMatchV1GetMatch(matchId: string, options?: any): AxiosPromise<LorMatchV1MatchDto>;

    /**
     * Get a list of match ids by PUUID
     * @summary Get a list of match ids by PUUID
     * @param {string} puuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LorMatchV1ApiInterface
     */
    lorMatchV1GetMatchIdsByPUUID(puuid: string, options?: any): AxiosPromise<Array<string>>;

}

/**
 * LorMatchV1Api - object-oriented interface
 * @export
 * @class LorMatchV1Api
 * @extends {BaseAPI}
 */
export class LorMatchV1Api extends BaseAPI implements LorMatchV1ApiInterface {
    /**
     * Get match by id
     * @summary Get match by id
     * @param {string} matchId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LorMatchV1Api
     */
    public lorMatchV1GetMatch(matchId: string, options?: any) {
        return LorMatchV1ApiFp(this.configuration).lorMatchV1GetMatch(matchId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of match ids by PUUID
     * @summary Get a list of match ids by PUUID
     * @param {string} puuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LorMatchV1Api
     */
    public lorMatchV1GetMatchIdsByPUUID(puuid: string, options?: any) {
        return LorMatchV1ApiFp(this.configuration).lorMatchV1GetMatchIdsByPUUID(puuid, options).then((request) => request(this.axios, this.basePath));
    }
}
