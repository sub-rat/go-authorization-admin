/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dto_Login } from '../models/dto_Login';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PublicService {

    /**
     * SysRoutes
     * @returns string ok
     * @throws ApiError
     */
    public static getApiV1PublicsSysRoutes(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publics/sys/routes',
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * UserInfo
     * @returns string ok
     * @throws ApiError
     */
    public static getApiV1PublicsUser(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publics/user',
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * UserLogin
     * @param data Login
     * @returns string ok
     * @throws ApiError
     */
    public static postApiV1PublicsUserLogin(
        data: dto_Login,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/publics/user/login',
            body: data,
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

    /**
     * UserLogout
     * @returns string success
     * @throws ApiError
     */
    public static postApiV1PublicsUserLogout(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/publics/user/logout',
        });
    }

    /**
     * UserMenuTree
     * @returns string ok
     * @throws ApiError
     */
    public static getApiV1PublicsUserMenutree(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/publics/user/menutree',
            errors: {
                400: `bad request`,
                500: `internal error`,
            },
        });
    }

}
