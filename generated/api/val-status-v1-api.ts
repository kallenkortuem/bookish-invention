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
import { ValStatusV1PlatformDataDto } from '../model';
/**
 * ValStatusV1Api - axios parameter creator
 * @export
 */
export const ValStatusV1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get VALORANT status for the given platform.
         * @summary Get VALORANT status for the given platform.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valStatusV1GetPlatformData: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/val/status/v1/platform-data`;
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
 * ValStatusV1Api - functional programming interface
 * @export
 */
export const ValStatusV1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ValStatusV1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Get VALORANT status for the given platform.
         * @summary Get VALORANT status for the given platform.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async valStatusV1GetPlatformData(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValStatusV1PlatformDataDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.valStatusV1GetPlatformData(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ValStatusV1Api - factory interface
 * @export
 */
export const ValStatusV1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ValStatusV1ApiFp(configuration)
    return {
        /**
         * Get VALORANT status for the given platform.
         * @summary Get VALORANT status for the given platform.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valStatusV1GetPlatformData(options?: any): AxiosPromise<ValStatusV1PlatformDataDto> {
            return localVarFp.valStatusV1GetPlatformData(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ValStatusV1Api - interface
 * @export
 * @interface ValStatusV1Api
 */
export interface ValStatusV1ApiInterface {
    /**
     * Get VALORANT status for the given platform.
     * @summary Get VALORANT status for the given platform.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValStatusV1ApiInterface
     */
    valStatusV1GetPlatformData(options?: any): AxiosPromise<ValStatusV1PlatformDataDto>;

}

/**
 * ValStatusV1Api - object-oriented interface
 * @export
 * @class ValStatusV1Api
 * @extends {BaseAPI}
 */
export class ValStatusV1Api extends BaseAPI implements ValStatusV1ApiInterface {
    /**
     * Get VALORANT status for the given platform.
     * @summary Get VALORANT status for the given platform.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValStatusV1Api
     */
    public valStatusV1GetPlatformData(options?: any) {
        return ValStatusV1ApiFp(this.configuration).valStatusV1GetPlatformData(options).then((request) => request(this.axios, this.basePath));
    }
}
