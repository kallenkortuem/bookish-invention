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
import { TournamentStubV4LobbyEventDTOWrapper } from '../model';
// @ts-ignore
import { TournamentStubV4ProviderRegistrationParameters } from '../model';
// @ts-ignore
import { TournamentStubV4TournamentCodeParameters } from '../model';
// @ts-ignore
import { TournamentStubV4TournamentRegistrationParameters } from '../model';
/**
 * TournamentStubV4Api - axios parameter creator
 * @export
 */
export const TournamentStubV4ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a mock tournament code for the given tournament.
         * @summary Create a mock tournament code for the given tournament.
         * @param {number} tournamentId The tournament ID
         * @param {TournamentStubV4TournamentCodeParameters} tournamentStubV4TournamentCodeParameters Metadata for the generated code
         * @param {number} [count] The number of codes to create (max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentStubV4CreateTournamentCode: async (tournamentId: number, tournamentStubV4TournamentCodeParameters: TournamentStubV4TournamentCodeParameters, count?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentId' is not null or undefined
            assertParamExists('tournamentStubV4CreateTournamentCode', 'tournamentId', tournamentId)
            // verify required parameter 'tournamentStubV4TournamentCodeParameters' is not null or undefined
            assertParamExists('tournamentStubV4CreateTournamentCode', 'tournamentStubV4TournamentCodeParameters', tournamentStubV4TournamentCodeParameters)
            const localVarPath = `/lol/tournament-stub/v4/codes`;
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (tournamentId !== undefined) {
                localVarQueryParameter['tournamentId'] = tournamentId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tournamentStubV4TournamentCodeParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a mock list of lobby events by tournament code.
         * @summary Gets a mock list of lobby events by tournament code.
         * @param {string} tournamentCode The short code to look up lobby events for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentStubV4GetLobbyEventsByCode: async (tournamentCode: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentCode' is not null or undefined
            assertParamExists('tournamentStubV4GetLobbyEventsByCode', 'tournamentCode', tournamentCode)
            const localVarPath = `/lol/tournament-stub/v4/lobby-events/by-code/{tournamentCode}`
                .replace(`{${"tournamentCode"}}`, encodeURIComponent(String(tournamentCode)));
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
         * Creates a mock tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
         * @summary Creates a mock tournament provider and returns its ID.
         * @param {TournamentStubV4ProviderRegistrationParameters} tournamentStubV4ProviderRegistrationParameters The provider definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentStubV4RegisterProviderData: async (tournamentStubV4ProviderRegistrationParameters: TournamentStubV4ProviderRegistrationParameters, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentStubV4ProviderRegistrationParameters' is not null or undefined
            assertParamExists('tournamentStubV4RegisterProviderData', 'tournamentStubV4ProviderRegistrationParameters', tournamentStubV4ProviderRegistrationParameters)
            const localVarPath = `/lol/tournament-stub/v4/providers`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tournamentStubV4ProviderRegistrationParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a mock tournament and returns its ID.
         * @summary Creates a mock tournament and returns its ID.
         * @param {TournamentStubV4TournamentRegistrationParameters} tournamentStubV4TournamentRegistrationParameters The tournament definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentStubV4RegisterTournament: async (tournamentStubV4TournamentRegistrationParameters: TournamentStubV4TournamentRegistrationParameters, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentStubV4TournamentRegistrationParameters' is not null or undefined
            assertParamExists('tournamentStubV4RegisterTournament', 'tournamentStubV4TournamentRegistrationParameters', tournamentStubV4TournamentRegistrationParameters)
            const localVarPath = `/lol/tournament-stub/v4/tournaments`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tournamentStubV4TournamentRegistrationParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TournamentStubV4Api - functional programming interface
 * @export
 */
export const TournamentStubV4ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TournamentStubV4ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a mock tournament code for the given tournament.
         * @summary Create a mock tournament code for the given tournament.
         * @param {number} tournamentId The tournament ID
         * @param {TournamentStubV4TournamentCodeParameters} tournamentStubV4TournamentCodeParameters Metadata for the generated code
         * @param {number} [count] The number of codes to create (max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentStubV4CreateTournamentCode(tournamentId: number, tournamentStubV4TournamentCodeParameters: TournamentStubV4TournamentCodeParameters, count?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentStubV4CreateTournamentCode(tournamentId, tournamentStubV4TournamentCodeParameters, count, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a mock list of lobby events by tournament code.
         * @summary Gets a mock list of lobby events by tournament code.
         * @param {string} tournamentCode The short code to look up lobby events for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentStubV4GetLobbyEventsByCode(tournamentCode: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TournamentStubV4LobbyEventDTOWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentStubV4GetLobbyEventsByCode(tournamentCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a mock tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
         * @summary Creates a mock tournament provider and returns its ID.
         * @param {TournamentStubV4ProviderRegistrationParameters} tournamentStubV4ProviderRegistrationParameters The provider definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentStubV4RegisterProviderData(tournamentStubV4ProviderRegistrationParameters: TournamentStubV4ProviderRegistrationParameters, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentStubV4RegisterProviderData(tournamentStubV4ProviderRegistrationParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a mock tournament and returns its ID.
         * @summary Creates a mock tournament and returns its ID.
         * @param {TournamentStubV4TournamentRegistrationParameters} tournamentStubV4TournamentRegistrationParameters The tournament definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentStubV4RegisterTournament(tournamentStubV4TournamentRegistrationParameters: TournamentStubV4TournamentRegistrationParameters, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentStubV4RegisterTournament(tournamentStubV4TournamentRegistrationParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TournamentStubV4Api - factory interface
 * @export
 */
export const TournamentStubV4ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TournamentStubV4ApiFp(configuration)
    return {
        /**
         * Create a mock tournament code for the given tournament.
         * @summary Create a mock tournament code for the given tournament.
         * @param {number} tournamentId The tournament ID
         * @param {TournamentStubV4TournamentCodeParameters} tournamentStubV4TournamentCodeParameters Metadata for the generated code
         * @param {number} [count] The number of codes to create (max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentStubV4CreateTournamentCode(tournamentId: number, tournamentStubV4TournamentCodeParameters: TournamentStubV4TournamentCodeParameters, count?: number, options?: any): AxiosPromise<Array<string>> {
            return localVarFp.tournamentStubV4CreateTournamentCode(tournamentId, tournamentStubV4TournamentCodeParameters, count, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a mock list of lobby events by tournament code.
         * @summary Gets a mock list of lobby events by tournament code.
         * @param {string} tournamentCode The short code to look up lobby events for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentStubV4GetLobbyEventsByCode(tournamentCode: string, options?: any): AxiosPromise<TournamentStubV4LobbyEventDTOWrapper> {
            return localVarFp.tournamentStubV4GetLobbyEventsByCode(tournamentCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a mock tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
         * @summary Creates a mock tournament provider and returns its ID.
         * @param {TournamentStubV4ProviderRegistrationParameters} tournamentStubV4ProviderRegistrationParameters The provider definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentStubV4RegisterProviderData(tournamentStubV4ProviderRegistrationParameters: TournamentStubV4ProviderRegistrationParameters, options?: any): AxiosPromise<number> {
            return localVarFp.tournamentStubV4RegisterProviderData(tournamentStubV4ProviderRegistrationParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a mock tournament and returns its ID.
         * @summary Creates a mock tournament and returns its ID.
         * @param {TournamentStubV4TournamentRegistrationParameters} tournamentStubV4TournamentRegistrationParameters The tournament definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentStubV4RegisterTournament(tournamentStubV4TournamentRegistrationParameters: TournamentStubV4TournamentRegistrationParameters, options?: any): AxiosPromise<number> {
            return localVarFp.tournamentStubV4RegisterTournament(tournamentStubV4TournamentRegistrationParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TournamentStubV4Api - interface
 * @export
 * @interface TournamentStubV4Api
 */
export interface TournamentStubV4ApiInterface {
    /**
     * Create a mock tournament code for the given tournament.
     * @summary Create a mock tournament code for the given tournament.
     * @param {number} tournamentId The tournament ID
     * @param {TournamentStubV4TournamentCodeParameters} tournamentStubV4TournamentCodeParameters Metadata for the generated code
     * @param {number} [count] The number of codes to create (max 1000)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentStubV4ApiInterface
     */
    tournamentStubV4CreateTournamentCode(tournamentId: number, tournamentStubV4TournamentCodeParameters: TournamentStubV4TournamentCodeParameters, count?: number, options?: any): AxiosPromise<Array<string>>;

    /**
     * Gets a mock list of lobby events by tournament code.
     * @summary Gets a mock list of lobby events by tournament code.
     * @param {string} tournamentCode The short code to look up lobby events for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentStubV4ApiInterface
     */
    tournamentStubV4GetLobbyEventsByCode(tournamentCode: string, options?: any): AxiosPromise<TournamentStubV4LobbyEventDTOWrapper>;

    /**
     * Creates a mock tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
     * @summary Creates a mock tournament provider and returns its ID.
     * @param {TournamentStubV4ProviderRegistrationParameters} tournamentStubV4ProviderRegistrationParameters The provider definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentStubV4ApiInterface
     */
    tournamentStubV4RegisterProviderData(tournamentStubV4ProviderRegistrationParameters: TournamentStubV4ProviderRegistrationParameters, options?: any): AxiosPromise<number>;

    /**
     * Creates a mock tournament and returns its ID.
     * @summary Creates a mock tournament and returns its ID.
     * @param {TournamentStubV4TournamentRegistrationParameters} tournamentStubV4TournamentRegistrationParameters The tournament definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentStubV4ApiInterface
     */
    tournamentStubV4RegisterTournament(tournamentStubV4TournamentRegistrationParameters: TournamentStubV4TournamentRegistrationParameters, options?: any): AxiosPromise<number>;

}

/**
 * TournamentStubV4Api - object-oriented interface
 * @export
 * @class TournamentStubV4Api
 * @extends {BaseAPI}
 */
export class TournamentStubV4Api extends BaseAPI implements TournamentStubV4ApiInterface {
    /**
     * Create a mock tournament code for the given tournament.
     * @summary Create a mock tournament code for the given tournament.
     * @param {number} tournamentId The tournament ID
     * @param {TournamentStubV4TournamentCodeParameters} tournamentStubV4TournamentCodeParameters Metadata for the generated code
     * @param {number} [count] The number of codes to create (max 1000)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentStubV4Api
     */
    public tournamentStubV4CreateTournamentCode(tournamentId: number, tournamentStubV4TournamentCodeParameters: TournamentStubV4TournamentCodeParameters, count?: number, options?: any) {
        return TournamentStubV4ApiFp(this.configuration).tournamentStubV4CreateTournamentCode(tournamentId, tournamentStubV4TournamentCodeParameters, count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a mock list of lobby events by tournament code.
     * @summary Gets a mock list of lobby events by tournament code.
     * @param {string} tournamentCode The short code to look up lobby events for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentStubV4Api
     */
    public tournamentStubV4GetLobbyEventsByCode(tournamentCode: string, options?: any) {
        return TournamentStubV4ApiFp(this.configuration).tournamentStubV4GetLobbyEventsByCode(tournamentCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a mock tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
     * @summary Creates a mock tournament provider and returns its ID.
     * @param {TournamentStubV4ProviderRegistrationParameters} tournamentStubV4ProviderRegistrationParameters The provider definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentStubV4Api
     */
    public tournamentStubV4RegisterProviderData(tournamentStubV4ProviderRegistrationParameters: TournamentStubV4ProviderRegistrationParameters, options?: any) {
        return TournamentStubV4ApiFp(this.configuration).tournamentStubV4RegisterProviderData(tournamentStubV4ProviderRegistrationParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a mock tournament and returns its ID.
     * @summary Creates a mock tournament and returns its ID.
     * @param {TournamentStubV4TournamentRegistrationParameters} tournamentStubV4TournamentRegistrationParameters The tournament definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentStubV4Api
     */
    public tournamentStubV4RegisterTournament(tournamentStubV4TournamentRegistrationParameters: TournamentStubV4TournamentRegistrationParameters, options?: any) {
        return TournamentStubV4ApiFp(this.configuration).tournamentStubV4RegisterTournament(tournamentStubV4TournamentRegistrationParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
