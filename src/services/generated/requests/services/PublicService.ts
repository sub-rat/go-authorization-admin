/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dto_Login } from "../models/dto_Login"
import type { echo_response_Response } from "../models/echo_response_Response"
import type { models_MenuTree } from "../models/models_MenuTree"
import type { models_UserInfo } from "../models/models_UserInfo"

import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"

export class PublicService {
  /**
   * SysRoutes
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static getApiV1PublicsSysRoutes(): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/publics/sys/routes",
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * UserInfo
   * @returns any ok
   * @throws ApiError
   */
  public static getApiV1PublicsUser(): CancelablePromise<
    echo_response_Response & {
      data?: models_UserInfo
    }
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/publics/user",
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * UserLogin
   * @param data Login
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static postApiV1PublicsUserLogin(
    data: dto_Login,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/publics/user/login",
      body: data,
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * UserLogout
   * @returns echo_response_Response success
   * @throws ApiError
   */
  public static postApiV1PublicsUserLogout(): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/publics/user/logout",
    })
  }

  /**
   * UserMenuTree
   * @returns any ok
   * @throws ApiError
   */
  public static getApiV1PublicsUserMenutree(): CancelablePromise<
    echo_response_Response & {
      data?: Array<models_MenuTree>
    }
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/publics/user/menutree",
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }
}
