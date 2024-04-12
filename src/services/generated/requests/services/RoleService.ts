/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { echo_response_Response } from '../models/echo_response_Response';
import type { models_Role } from '../models/models_Role';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RoleService {

    /**
     * Role Get All
     * @param current
     * @param direction
     * @param ids
     * @param key
     * @param name
     * @param pageSize
     * @param queryValue
     * @param status
     * @param userId
     * @returns any ok
     * @throws ApiError
     */
    public static getApiRoles(
        current?: number,
        direction?: 'ASC' | 'DESC',
        ids?: Array<string>,
        key?: string,
        name?: string,
        pageSize?: number,
        queryValue?: string,
        status?: number,
        userId?: string,
    ): CancelablePromise<(echo_response_Response & {
        data?: Array<models_Role>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles',
            query: {
                'current': current,
                'direction': direction,
                'ids': ids,
                'key': key,
                'name': name,
                'pageSize': pageSize,
                'queryValue': queryValue,
                'status': status,
                'userID': userId,
            },
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * Role Create
     * @param data Role
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static postApiRoles(
        data: models_Role,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/roles',
            body: data,
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * Role Get By ID
     * @param id role id
     * @returns any ok
     * @throws ApiError
     */
    public static getApiRoles1(
        id: number,
    ): CancelablePromise<(echo_response_Response & {
        data?: models_Role;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles/{id}',
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
     * Role Update By ID
     * @param id role id
     * @param data Role
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static putApiRoles(
        id: number,
        data: models_Role,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/roles/{id}',
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
     * Role Delete By ID
     * @param id role id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static deleteApiRoles(
        id: number,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/roles/{id}',
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
     * Role Disable By ID
     * @param id role id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static patchApiRolesDisable(
        id: number,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/roles/{id}/disable',
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
     * Role Enable By ID
     * @param id role id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static patchApiRolesEnable(
        id: number,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/roles/{id}/enable',
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
