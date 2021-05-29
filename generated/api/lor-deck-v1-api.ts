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
import { LorDeckV1DeckDto } from '../model';
// @ts-ignore
import { LorDeckV1NewDeckDto } from '../model';
/**
 * LorDeckV1Api - axios parameter creator
 * @export
 */
export const LorDeckV1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new deck for the calling user.
         * @summary Create a new deck for the calling user.
         * @param {string} authorization 
         * @param {LorDeckV1NewDeckDto} lorDeckV1NewDeckDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lorDeckV1CreateDeck: async (authorization: string, lorDeckV1NewDeckDto: LorDeckV1NewDeckDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('lorDeckV1CreateDeck', 'authorization', authorization)
            // verify required parameter 'lorDeckV1NewDeckDto' is not null or undefined
            assertParamExists('lorDeckV1CreateDeck', 'lorDeckV1NewDeckDto', lorDeckV1NewDeckDto)
            const localVarPath = `/lor/deck/v1/decks/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication X-Riot-Token required
            await setApiKeyToObject(localVarHeaderParameter, "X-Riot-Token", configuration)

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_key", configuration)

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(lorDeckV1NewDeckDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of the calling user\'s decks.
         * @summary Get a list of the calling user\'s decks.
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lorDeckV1GetDecks: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('lorDeckV1GetDecks', 'authorization', authorization)
            const localVarPath = `/lor/deck/v1/decks/me`;
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
    }
};

/**
 * LorDeckV1Api - functional programming interface
 * @export
 */
export const LorDeckV1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LorDeckV1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new deck for the calling user.
         * @summary Create a new deck for the calling user.
         * @param {string} authorization 
         * @param {LorDeckV1NewDeckDto} lorDeckV1NewDeckDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lorDeckV1CreateDeck(authorization: string, lorDeckV1NewDeckDto: LorDeckV1NewDeckDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lorDeckV1CreateDeck(authorization, lorDeckV1NewDeckDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of the calling user\'s decks.
         * @summary Get a list of the calling user\'s decks.
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lorDeckV1GetDecks(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LorDeckV1DeckDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lorDeckV1GetDecks(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LorDeckV1Api - factory interface
 * @export
 */
export const LorDeckV1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LorDeckV1ApiFp(configuration)
    return {
        /**
         * Create a new deck for the calling user.
         * @summary Create a new deck for the calling user.
         * @param {string} authorization 
         * @param {LorDeckV1NewDeckDto} lorDeckV1NewDeckDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lorDeckV1CreateDeck(authorization: string, lorDeckV1NewDeckDto: LorDeckV1NewDeckDto, options?: any): AxiosPromise<string> {
            return localVarFp.lorDeckV1CreateDeck(authorization, lorDeckV1NewDeckDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of the calling user\'s decks.
         * @summary Get a list of the calling user\'s decks.
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lorDeckV1GetDecks(authorization: string, options?: any): AxiosPromise<Array<LorDeckV1DeckDto>> {
            return localVarFp.lorDeckV1GetDecks(authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LorDeckV1Api - interface
 * @export
 * @interface LorDeckV1Api
 */
export interface LorDeckV1ApiInterface {
    /**
     * Create a new deck for the calling user.
     * @summary Create a new deck for the calling user.
     * @param {string} authorization 
     * @param {LorDeckV1NewDeckDto} lorDeckV1NewDeckDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LorDeckV1ApiInterface
     */
    lorDeckV1CreateDeck(authorization: string, lorDeckV1NewDeckDto: LorDeckV1NewDeckDto, options?: any): AxiosPromise<string>;

    /**
     * Get a list of the calling user\'s decks.
     * @summary Get a list of the calling user\'s decks.
     * @param {string} authorization 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LorDeckV1ApiInterface
     */
    lorDeckV1GetDecks(authorization: string, options?: any): AxiosPromise<Array<LorDeckV1DeckDto>>;

}

/**
 * LorDeckV1Api - object-oriented interface
 * @export
 * @class LorDeckV1Api
 * @extends {BaseAPI}
 */
export class LorDeckV1Api extends BaseAPI implements LorDeckV1ApiInterface {
    /**
     * Create a new deck for the calling user.
     * @summary Create a new deck for the calling user.
     * @param {string} authorization 
     * @param {LorDeckV1NewDeckDto} lorDeckV1NewDeckDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LorDeckV1Api
     */
    public lorDeckV1CreateDeck(authorization: string, lorDeckV1NewDeckDto: LorDeckV1NewDeckDto, options?: any) {
        return LorDeckV1ApiFp(this.configuration).lorDeckV1CreateDeck(authorization, lorDeckV1NewDeckDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of the calling user\'s decks.
     * @summary Get a list of the calling user\'s decks.
     * @param {string} authorization 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LorDeckV1Api
     */
    public lorDeckV1GetDecks(authorization: string, options?: any) {
        return LorDeckV1ApiFp(this.configuration).lorDeckV1GetDecks(authorization, options).then((request) => request(this.axios, this.basePath));
    }
}
