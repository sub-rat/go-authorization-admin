/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dto_AstrologerCreate } from '../models/dto_AstrologerCreate';
import type { echo_response_Response } from '../models/echo_response_Response';
import type { models_Astrologer } from '../models/models_Astrologer';
import type { models_AstrologerQueryResult } from '../models/models_AstrologerQueryResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AstrologerService {

    /**
     * Astrologer Query
     * @param address
     * @param current
     * @param direction
     * @param fullName
     * @param key
     * @param pageSize
     * @param queryValue
     * @returns any ok
     * @throws ApiError
     */
    public static getApiV1Astrologers(
        address?: string,
        current?: number,
        direction?: 'ASC' | 'DESC',
        fullName?: string,
        key?: string,
        pageSize?: number,
        queryValue?: string,
    ): CancelablePromise<(echo_response_Response & {
        data?: models_AstrologerQueryResult;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/astrologers',
            query: {
                'address': address,
                'current': current,
                'direction': direction,
                'fullName': fullName,
                'key': key,
                'pageSize': pageSize,
                'queryValue': queryValue,
            },
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * Astrologer Create
     * @param data Astrologer
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static postApiV1Astrologers(
        data: dto_AstrologerCreate,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/astrologers',
            body: data,
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * Astrologer Get By ID
     * @param id astrologer id
     * @returns any ok
     * @throws ApiError
     */
    public static getApiV1Astrologers1(
        id: string,
    ): CancelablePromise<(echo_response_Response & {
        data?: models_Astrologer;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/astrologers/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * Astrologer Update By ID
     * @param id astrologer id
     * @param data Astrologer
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static putApiV1Astrologers(
        id: string,
        data: models_Astrologer,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/astrologers/{id}',
            path: {
                'id': id,
            },
            body: data,
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * Astrologer Delete By ID
     * @param id astrologer id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static deleteApiV1Astrologers(
        id: string,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/astrologers/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

}
