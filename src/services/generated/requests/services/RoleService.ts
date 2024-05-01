/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { echo_response_Response } from "../models/echo_response_Response"
import type { models_Role } from "../models/models_Role"

import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"

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
  public static getApiV1Roles(
    current?: number,
    direction?: "ASC" | "DESC",
    ids?: Array<string>,
    key?: string,
    name?: string,
    pageSize?: number,
    queryValue?: string,
    status?: number,
    userId?: string,
  ): CancelablePromise<
    echo_response_Response & {
      data?: Array<models_Role>
    }
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/roles",
      query: {
        current: current,
        direction: direction,
        ids: ids,
        key: key,
        name: name,
        pageSize: pageSize,
        queryValue: queryValue,
        status: status,
        userID: userId,
      },
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * Role Create
   * @param data Role
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static postApiV1Roles(
    data: models_Role,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/roles",
      body: data,
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * Role Get By ID
   * @param id role id
   * @returns any ok
   * @throws ApiError
   */
  public static getApiV1Roles1(id: number): CancelablePromise<
    echo_response_Response & {
      data?: models_Role
    }
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/roles/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * Role Update By ID
   * @param id role id
   * @param data Role
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static putApiV1Roles(
    id: number,
    data: models_Role,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/roles/{id}",
      path: {
        id: id,
      },
      body: data,
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * Role Delete By ID
   * @param id role id
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static deleteApiV1Roles(
    id: number,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/roles/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * Role Disable By ID
   * @param id role id
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static patchApiV1RolesDisable(
    id: number,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/roles/{id}/disable",
      path: {
        id: id,
      },
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * Role Enable By ID
   * @param id role id
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static patchApiV1RolesEnable(
    id: number,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/roles/{id}/enable",
      path: {
        id: id,
      },
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }
}
