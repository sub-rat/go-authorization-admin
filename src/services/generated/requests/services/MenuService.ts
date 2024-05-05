/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { echo_response_Response } from '../models/echo_response_Response';
import type { models_Menu } from '../models/models_Menu';
import type { models_MenuAction } from '../models/models_MenuAction';
import type { models_MenuQueryResult } from '../models/models_MenuQueryResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MenuService {

    /**
     * Menu Query
     * @param current
     * @param direction
     * @param hidden
     * @param ids
     * @param includeActions
     * @param key
     * @param name
     * @param pageSize
     * @param parentId
     * @param prefixParentPath
     * @param queryValue
     * @param status
     * @param tree
     * @returns any ok
     * @throws ApiError
     */
    public static getApiV1Menus(
        current?: number,
        direction?: 'ASC' | 'DESC',
        hidden?: number,
        ids?: Array<string>,
        includeActions?: boolean,
        key?: string,
        name?: string,
        pageSize?: number,
        parentId?: string,
        prefixParentPath?: string,
        queryValue?: string,
        status?: number,
        tree?: boolean,
    ): CancelablePromise<(echo_response_Response & {
        data?: models_MenuQueryResult;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/menus',
            query: {
                'current': current,
                'direction': direction,
                'hidden': hidden,
                'ids': ids,
                'includeActions': includeActions,
                'key': key,
                'name': name,
                'pageSize': pageSize,
                'parentID': parentId,
                'prefixParentPath': prefixParentPath,
                'queryValue': queryValue,
                'status': status,
                'tree': tree,
            },
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * Menu Create
     * @param data Menu
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static postApiV1Menus(
        data: models_Menu,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/menus',
            body: data,
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * Menu Get By ID
     * @param id menu id
     * @returns any ok
     * @throws ApiError
     */
    public static getApiV1Menus1(
        id: string,
    ): CancelablePromise<(echo_response_Response & {
        data?: models_Menu;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/menus/{id}',
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
     * Menu Update By ID
     * @param id menu id
     * @param data Menu
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static putApiV1Menus(
        id: string,
        data: models_Menu,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/menus/{id}',
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
     * Menu Delete By ID
     * @param id menu id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static deleteApiV1Menus(
        id: string,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/menus/{id}',
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
     * MenuActions Get By menuID
     * @param id menu id
     * @returns any ok
     * @throws ApiError
     */
    public static getApiV1MenusActions(
        id: string,
    ): CancelablePromise<(echo_response_Response & {
        data?: Array<models_MenuAction>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/menus/{id}/actions',
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
     * Menu Actions Update By menuID
     * @param id menu id
     * @param data Menu
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static putApiV1MenusActions(
        id: string,
        data: Array<models_MenuAction>,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/menus/{id}/actions',
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
     * Menu Disable By ID
     * @param id menu id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static patchApiV1MenusDisable(
        id: string,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/menus/{id}/disable',
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
     * Menu Enable By ID
     * @param id menu id
     * @returns echo_response_Response ok
     * @throws ApiError
     */
    public static patchApiV1MenusEnable(
        id: string,
    ): CancelablePromise<echo_response_Response> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/menus/{id}/enable',
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
