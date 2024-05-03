/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { echo_response_Response } from '../models/echo_response_Response';
import type { models_User } from '../models/models_User';
import type { models_UserQueryResult } from '../models/models_UserQueryResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * User Query
     * @param current
     * @param direction
     * @param fullName
     * @param key
     * @param pageSize
     * @param queryPassword
     * @param queryValue
     * @param roleIDs
     * @param status
     * @param username
     * @returns any ok
     * @throws ApiError
     */
    public static getApiV1Users(
        current?: number,
        direction?: 'ASC' | 'DESC',
        fullName?: string,
        key?: string,
        pageSize?: number,
        queryPassword?: boolean,
        queryValue?: string,
        roleIDs?: Array<string>,
        status?: number,
        username?: string,
    ): CancelablePromise<(echo_response_Response & {
        data?: models_UserQueryResult;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users',
            query: {
                'current': current,
                'direction': direction,
                'fullName': fullName,
                'key': key,
                'pageSize': pageSize,
                'queryPassword': queryPassword,
                'queryValue': queryValue,
                'roleIDs': roleIDs,
                'status': status,
                'username': username,
            },
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * User Create
     * @param data User
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static postApiV1Users(
        data: models_User,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users',
            body: data,
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * User Get By ID
     * @param id user id
     * @returns any ok
     * @throws ApiError
     */
    public static getApiV1Users1(
        id: number,
    ): CancelablePromise<(echo_response_Response & {
        data?: models_User;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/{id}',
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
     * User Update By ID
     * @param id user id
     * @param data User
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static putApiV1Users(
        id: number,
        data: models_User,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/users/{id}',
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
     * User Delete By ID
     * @param id user id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static deleteApiV1Users(
        id: number,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/users/{id}',
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
     * User Disable By ID
     * @param id user id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static patchApiV1UsersDisable(
        id: number,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/{id}/disable',
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
     * User Enable By ID
     * @param id user id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static patchApiV1UsersEnable(
        id: number,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/{id}/enable',
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
