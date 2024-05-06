/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dto_CustomerCreate } from "../models/dto_CustomerCreate"
import type { echo_response_Response } from "../models/echo_response_Response"
import type { models_Customer } from "../models/models_Customer"
import type { models_CustomerQueryResult } from "../models/models_CustomerQueryResult"

import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"

export class CustomerService {
  /**
   * Customer Query
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
  public static getApiV1Customers(
    address?: string,
    current?: number,
    direction?: "ASC" | "DESC",
    fullName?: string,
    key?: string,
    pageSize?: number,
    queryValue?: string,
  ): CancelablePromise<
    echo_response_Response & {
      data?: models_CustomerQueryResult
    }
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/customers",
      query: {
        address: address,
        current: current,
        direction: direction,
        fullName: fullName,
        key: key,
        pageSize: pageSize,
        queryValue: queryValue,
      },
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * Customer Create
   * @param data Customer
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static postApiV1Customers(
    data: dto_CustomerCreate,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/customers",
      body: data,
      errors: {
        400: `bad request`,
        500: `internal error`,
      },
    })
  }

  /**
   * Customer Get By ID
   * @param id customer id
   * @returns any ok
   * @throws ApiError
   */
  public static getApiV1Customers1(id: string): CancelablePromise<
    echo_response_Response & {
      data?: models_Customer
    }
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/customers/{id}",
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
   * Customer Update By ID
   * @param id customer id
   * @param data Customer
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static putApiV1Customers(
    id: string,
    data: models_Customer,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/customers/{id}",
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
   * Customer Delete By ID
   * @param id customer id
   * @returns echo_response_Response ok
   * @throws ApiError
   */
  public static deleteApiV1Customers(
    id: string,
  ): CancelablePromise<echo_response_Response> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/customers/{id}",
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
