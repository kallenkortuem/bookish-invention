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
import { TournamentV4LobbyEventDTOWrapper } from '../model';
// @ts-ignore
import { TournamentV4ProviderRegistrationParameters } from '../model';
// @ts-ignore
import { TournamentV4TournamentCodeDTO } from '../model';
// @ts-ignore
import { TournamentV4TournamentCodeParameters } from '../model';
// @ts-ignore
import { TournamentV4TournamentCodeUpdateParameters } from '../model';
// @ts-ignore
import { TournamentV4TournamentRegistrationParameters } from '../model';
/**
 * TournamentV4Api - axios parameter creator
 * @export
 */
export const TournamentV4ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a tournament code for the given tournament.
         * @summary Create a tournament code for the given tournament.
         * @param {number} tournamentId The tournament ID
         * @param {TournamentV4TournamentCodeParameters} tournamentV4TournamentCodeParameters Metadata for the generated code
         * @param {number} [count] The number of codes to create (max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4CreateTournamentCode: async (tournamentId: number, tournamentV4TournamentCodeParameters: TournamentV4TournamentCodeParameters, count?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentId' is not null or undefined
            assertParamExists('tournamentV4CreateTournamentCode', 'tournamentId', tournamentId)
            // verify required parameter 'tournamentV4TournamentCodeParameters' is not null or undefined
            assertParamExists('tournamentV4CreateTournamentCode', 'tournamentV4TournamentCodeParameters', tournamentV4TournamentCodeParameters)
            const localVarPath = `/lol/tournament/v4/codes`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tournamentV4TournamentCodeParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a list of lobby events by tournament code.
         * @summary Gets a list of lobby events by tournament code.
         * @param {string} tournamentCode The short code to look up lobby events for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4GetLobbyEventsByCode: async (tournamentCode: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentCode' is not null or undefined
            assertParamExists('tournamentV4GetLobbyEventsByCode', 'tournamentCode', tournamentCode)
            const localVarPath = `/lol/tournament/v4/lobby-events/by-code/{tournamentCode}`
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
         * Returns the tournament code DTO associated with a tournament code string.
         * @summary Returns the tournament code DTO associated with a tournament code string.
         * @param {string} tournamentCode The tournament code string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4GetTournamentCode: async (tournamentCode: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentCode' is not null or undefined
            assertParamExists('tournamentV4GetTournamentCode', 'tournamentCode', tournamentCode)
            const localVarPath = `/lol/tournament/v4/codes/{tournamentCode}`
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
         * Creates a tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
         * @summary Creates a tournament provider and returns its ID.
         * @param {TournamentV4ProviderRegistrationParameters} tournamentV4ProviderRegistrationParameters The provider definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4RegisterProviderData: async (tournamentV4ProviderRegistrationParameters: TournamentV4ProviderRegistrationParameters, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentV4ProviderRegistrationParameters' is not null or undefined
            assertParamExists('tournamentV4RegisterProviderData', 'tournamentV4ProviderRegistrationParameters', tournamentV4ProviderRegistrationParameters)
            const localVarPath = `/lol/tournament/v4/providers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tournamentV4ProviderRegistrationParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a tournament and returns its ID.
         * @summary Creates a tournament and returns its ID.
         * @param {TournamentV4TournamentRegistrationParameters} tournamentV4TournamentRegistrationParameters The tournament definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4RegisterTournament: async (tournamentV4TournamentRegistrationParameters: TournamentV4TournamentRegistrationParameters, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentV4TournamentRegistrationParameters' is not null or undefined
            assertParamExists('tournamentV4RegisterTournament', 'tournamentV4TournamentRegistrationParameters', tournamentV4TournamentRegistrationParameters)
            const localVarPath = `/lol/tournament/v4/tournaments`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tournamentV4TournamentRegistrationParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the pick type, map, spectator type, or allowed summoners for a code.
         * @summary Update the pick type, map, spectator type, or allowed summoners for a code.
         * @param {string} tournamentCode The tournament code to update
         * @param {TournamentV4TournamentCodeUpdateParameters} [tournamentV4TournamentCodeUpdateParameters] The fields to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4UpdateCode: async (tournamentCode: string, tournamentV4TournamentCodeUpdateParameters?: TournamentV4TournamentCodeUpdateParameters, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentCode' is not null or undefined
            assertParamExists('tournamentV4UpdateCode', 'tournamentCode', tournamentCode)
            const localVarPath = `/lol/tournament/v4/codes/{tournamentCode}`
                .replace(`{${"tournamentCode"}}`, encodeURIComponent(String(tournamentCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(tournamentV4TournamentCodeUpdateParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TournamentV4Api - functional programming interface
 * @export
 */
export const TournamentV4ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TournamentV4ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a tournament code for the given tournament.
         * @summary Create a tournament code for the given tournament.
         * @param {number} tournamentId The tournament ID
         * @param {TournamentV4TournamentCodeParameters} tournamentV4TournamentCodeParameters Metadata for the generated code
         * @param {number} [count] The number of codes to create (max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentV4CreateTournamentCode(tournamentId: number, tournamentV4TournamentCodeParameters: TournamentV4TournamentCodeParameters, count?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentV4CreateTournamentCode(tournamentId, tournamentV4TournamentCodeParameters, count, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a list of lobby events by tournament code.
         * @summary Gets a list of lobby events by tournament code.
         * @param {string} tournamentCode The short code to look up lobby events for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentV4GetLobbyEventsByCode(tournamentCode: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TournamentV4LobbyEventDTOWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentV4GetLobbyEventsByCode(tournamentCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the tournament code DTO associated with a tournament code string.
         * @summary Returns the tournament code DTO associated with a tournament code string.
         * @param {string} tournamentCode The tournament code string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentV4GetTournamentCode(tournamentCode: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TournamentV4TournamentCodeDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentV4GetTournamentCode(tournamentCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
         * @summary Creates a tournament provider and returns its ID.
         * @param {TournamentV4ProviderRegistrationParameters} tournamentV4ProviderRegistrationParameters The provider definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentV4RegisterProviderData(tournamentV4ProviderRegistrationParameters: TournamentV4ProviderRegistrationParameters, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentV4RegisterProviderData(tournamentV4ProviderRegistrationParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a tournament and returns its ID.
         * @summary Creates a tournament and returns its ID.
         * @param {TournamentV4TournamentRegistrationParameters} tournamentV4TournamentRegistrationParameters The tournament definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentV4RegisterTournament(tournamentV4TournamentRegistrationParameters: TournamentV4TournamentRegistrationParameters, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentV4RegisterTournament(tournamentV4TournamentRegistrationParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the pick type, map, spectator type, or allowed summoners for a code.
         * @summary Update the pick type, map, spectator type, or allowed summoners for a code.
         * @param {string} tournamentCode The tournament code to update
         * @param {TournamentV4TournamentCodeUpdateParameters} [tournamentV4TournamentCodeUpdateParameters] The fields to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tournamentV4UpdateCode(tournamentCode: string, tournamentV4TournamentCodeUpdateParameters?: TournamentV4TournamentCodeUpdateParameters, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentV4UpdateCode(tournamentCode, tournamentV4TournamentCodeUpdateParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TournamentV4Api - factory interface
 * @export
 */
export const TournamentV4ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TournamentV4ApiFp(configuration)
    return {
        /**
         * Create a tournament code for the given tournament.
         * @summary Create a tournament code for the given tournament.
         * @param {number} tournamentId The tournament ID
         * @param {TournamentV4TournamentCodeParameters} tournamentV4TournamentCodeParameters Metadata for the generated code
         * @param {number} [count] The number of codes to create (max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4CreateTournamentCode(tournamentId: number, tournamentV4TournamentCodeParameters: TournamentV4TournamentCodeParameters, count?: number, options?: any): AxiosPromise<Array<string>> {
            return localVarFp.tournamentV4CreateTournamentCode(tournamentId, tournamentV4TournamentCodeParameters, count, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of lobby events by tournament code.
         * @summary Gets a list of lobby events by tournament code.
         * @param {string} tournamentCode The short code to look up lobby events for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4GetLobbyEventsByCode(tournamentCode: string, options?: any): AxiosPromise<TournamentV4LobbyEventDTOWrapper> {
            return localVarFp.tournamentV4GetLobbyEventsByCode(tournamentCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the tournament code DTO associated with a tournament code string.
         * @summary Returns the tournament code DTO associated with a tournament code string.
         * @param {string} tournamentCode The tournament code string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4GetTournamentCode(tournamentCode: string, options?: any): AxiosPromise<TournamentV4TournamentCodeDTO> {
            return localVarFp.tournamentV4GetTournamentCode(tournamentCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
         * @summary Creates a tournament provider and returns its ID.
         * @param {TournamentV4ProviderRegistrationParameters} tournamentV4ProviderRegistrationParameters The provider definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4RegisterProviderData(tournamentV4ProviderRegistrationParameters: TournamentV4ProviderRegistrationParameters, options?: any): AxiosPromise<number> {
            return localVarFp.tournamentV4RegisterProviderData(tournamentV4ProviderRegistrationParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a tournament and returns its ID.
         * @summary Creates a tournament and returns its ID.
         * @param {TournamentV4TournamentRegistrationParameters} tournamentV4TournamentRegistrationParameters The tournament definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4RegisterTournament(tournamentV4TournamentRegistrationParameters: TournamentV4TournamentRegistrationParameters, options?: any): AxiosPromise<number> {
            return localVarFp.tournamentV4RegisterTournament(tournamentV4TournamentRegistrationParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the pick type, map, spectator type, or allowed summoners for a code.
         * @summary Update the pick type, map, spectator type, or allowed summoners for a code.
         * @param {string} tournamentCode The tournament code to update
         * @param {TournamentV4TournamentCodeUpdateParameters} [tournamentV4TournamentCodeUpdateParameters] The fields to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tournamentV4UpdateCode(tournamentCode: string, tournamentV4TournamentCodeUpdateParameters?: TournamentV4TournamentCodeUpdateParameters, options?: any): AxiosPromise<void> {
            return localVarFp.tournamentV4UpdateCode(tournamentCode, tournamentV4TournamentCodeUpdateParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TournamentV4Api - interface
 * @export
 * @interface TournamentV4Api
 */
export interface TournamentV4ApiInterface {
    /**
     * Create a tournament code for the given tournament.
     * @summary Create a tournament code for the given tournament.
     * @param {number} tournamentId The tournament ID
     * @param {TournamentV4TournamentCodeParameters} tournamentV4TournamentCodeParameters Metadata for the generated code
     * @param {number} [count] The number of codes to create (max 1000)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4ApiInterface
     */
    tournamentV4CreateTournamentCode(tournamentId: number, tournamentV4TournamentCodeParameters: TournamentV4TournamentCodeParameters, count?: number, options?: any): AxiosPromise<Array<string>>;

    /**
     * Gets a list of lobby events by tournament code.
     * @summary Gets a list of lobby events by tournament code.
     * @param {string} tournamentCode The short code to look up lobby events for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4ApiInterface
     */
    tournamentV4GetLobbyEventsByCode(tournamentCode: string, options?: any): AxiosPromise<TournamentV4LobbyEventDTOWrapper>;

    /**
     * Returns the tournament code DTO associated with a tournament code string.
     * @summary Returns the tournament code DTO associated with a tournament code string.
     * @param {string} tournamentCode The tournament code string.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4ApiInterface
     */
    tournamentV4GetTournamentCode(tournamentCode: string, options?: any): AxiosPromise<TournamentV4TournamentCodeDTO>;

    /**
     * Creates a tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
     * @summary Creates a tournament provider and returns its ID.
     * @param {TournamentV4ProviderRegistrationParameters} tournamentV4ProviderRegistrationParameters The provider definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4ApiInterface
     */
    tournamentV4RegisterProviderData(tournamentV4ProviderRegistrationParameters: TournamentV4ProviderRegistrationParameters, options?: any): AxiosPromise<number>;

    /**
     * Creates a tournament and returns its ID.
     * @summary Creates a tournament and returns its ID.
     * @param {TournamentV4TournamentRegistrationParameters} tournamentV4TournamentRegistrationParameters The tournament definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4ApiInterface
     */
    tournamentV4RegisterTournament(tournamentV4TournamentRegistrationParameters: TournamentV4TournamentRegistrationParameters, options?: any): AxiosPromise<number>;

    /**
     * Update the pick type, map, spectator type, or allowed summoners for a code.
     * @summary Update the pick type, map, spectator type, or allowed summoners for a code.
     * @param {string} tournamentCode The tournament code to update
     * @param {TournamentV4TournamentCodeUpdateParameters} [tournamentV4TournamentCodeUpdateParameters] The fields to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4ApiInterface
     */
    tournamentV4UpdateCode(tournamentCode: string, tournamentV4TournamentCodeUpdateParameters?: TournamentV4TournamentCodeUpdateParameters, options?: any): AxiosPromise<void>;

}

/**
 * TournamentV4Api - object-oriented interface
 * @export
 * @class TournamentV4Api
 * @extends {BaseAPI}
 */
export class TournamentV4Api extends BaseAPI implements TournamentV4ApiInterface {
    /**
     * Create a tournament code for the given tournament.
     * @summary Create a tournament code for the given tournament.
     * @param {number} tournamentId The tournament ID
     * @param {TournamentV4TournamentCodeParameters} tournamentV4TournamentCodeParameters Metadata for the generated code
     * @param {number} [count] The number of codes to create (max 1000)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4Api
     */
    public tournamentV4CreateTournamentCode(tournamentId: number, tournamentV4TournamentCodeParameters: TournamentV4TournamentCodeParameters, count?: number, options?: any) {
        return TournamentV4ApiFp(this.configuration).tournamentV4CreateTournamentCode(tournamentId, tournamentV4TournamentCodeParameters, count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of lobby events by tournament code.
     * @summary Gets a list of lobby events by tournament code.
     * @param {string} tournamentCode The short code to look up lobby events for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4Api
     */
    public tournamentV4GetLobbyEventsByCode(tournamentCode: string, options?: any) {
        return TournamentV4ApiFp(this.configuration).tournamentV4GetLobbyEventsByCode(tournamentCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the tournament code DTO associated with a tournament code string.
     * @summary Returns the tournament code DTO associated with a tournament code string.
     * @param {string} tournamentCode The tournament code string.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4Api
     */
    public tournamentV4GetTournamentCode(tournamentCode: string, options?: any) {
        return TournamentV4ApiFp(this.configuration).tournamentV4GetTournamentCode(tournamentCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a tournament provider and returns its ID. ## Implementation Notes Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.
     * @summary Creates a tournament provider and returns its ID.
     * @param {TournamentV4ProviderRegistrationParameters} tournamentV4ProviderRegistrationParameters The provider definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4Api
     */
    public tournamentV4RegisterProviderData(tournamentV4ProviderRegistrationParameters: TournamentV4ProviderRegistrationParameters, options?: any) {
        return TournamentV4ApiFp(this.configuration).tournamentV4RegisterProviderData(tournamentV4ProviderRegistrationParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a tournament and returns its ID.
     * @summary Creates a tournament and returns its ID.
     * @param {TournamentV4TournamentRegistrationParameters} tournamentV4TournamentRegistrationParameters The tournament definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4Api
     */
    public tournamentV4RegisterTournament(tournamentV4TournamentRegistrationParameters: TournamentV4TournamentRegistrationParameters, options?: any) {
        return TournamentV4ApiFp(this.configuration).tournamentV4RegisterTournament(tournamentV4TournamentRegistrationParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the pick type, map, spectator type, or allowed summoners for a code.
     * @summary Update the pick type, map, spectator type, or allowed summoners for a code.
     * @param {string} tournamentCode The tournament code to update
     * @param {TournamentV4TournamentCodeUpdateParameters} [tournamentV4TournamentCodeUpdateParameters] The fields to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TournamentV4Api
     */
    public tournamentV4UpdateCode(tournamentCode: string, tournamentV4TournamentCodeUpdateParameters?: TournamentV4TournamentCodeUpdateParameters, options?: any) {
        return TournamentV4ApiFp(this.configuration).tournamentV4UpdateCode(tournamentCode, tournamentV4TournamentCodeUpdateParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
