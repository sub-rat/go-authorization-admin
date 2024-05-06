// generated with @7nohe/openapi-react-query-codegen@0.5.3
import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseQueryOptions,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query"
import { models_UserRole } from "../requests/models/models_UserRole"
import { models_UserQueryResult } from "../requests/models/models_UserQueryResult"
import { models_UserInfo } from "../requests/models/models_UserInfo"
import { models_User } from "../requests/models/models_User"
import { models_RoleQueryResult } from "../requests/models/models_RoleQueryResult"
import { models_RoleMenu } from "../requests/models/models_RoleMenu"
import { models_Role } from "../requests/models/models_Role"
import { models_MenuTrees } from "../requests/models/models_MenuTrees"
import { models_MenuTree } from "../requests/models/models_MenuTree"
import { models_MenuQueryResult } from "../requests/models/models_MenuQueryResult"
import { models_MenuActionResource } from "../requests/models/models_MenuActionResource"
import { models_MenuAction } from "../requests/models/models_MenuAction"
import { models_Menu } from "../requests/models/models_Menu"
import { models_CustomerQueryResult } from "../requests/models/models_CustomerQueryResult"
import { models_Customer } from "../requests/models/models_Customer"
import { models_AstrologerQueryResult } from "../requests/models/models_AstrologerQueryResult"
import { models_Astrologer } from "../requests/models/models_Astrologer"
import { echo_response_Response } from "../requests/models/echo_response_Response"
import { dto_Pagination } from "../requests/models/dto_Pagination"
import { dto_OrderDirection } from "../requests/models/dto_OrderDirection"
import { dto_Login } from "../requests/models/dto_Login"
import { dto_CustomerCreate } from "../requests/models/dto_CustomerCreate"
import { dto_AstrologerCreate } from "../requests/models/dto_AstrologerCreate"
import { database_Datetime } from "../requests/models/database_Datetime"
import { UserService } from "../requests/services/UserService"
import { RoleService } from "../requests/services/RoleService"
import { PublicService } from "../requests/services/PublicService"
import { MenuService } from "../requests/services/MenuService"
import { CustomerService } from "../requests/services/CustomerService"
import { AstrologerService } from "../requests/services/AstrologerService"
export type UserServiceGetApiV1UsersDefaultResponse = Awaited<
  ReturnType<typeof UserService.getApiV1Users>
>
export type UserServiceGetApiV1UsersQueryResult<
  TData = UserServiceGetApiV1UsersDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useUserServiceGetApiV1UsersKey = "UserServiceGetApiV1Users"
/**
 * User Query
 */
export const useUserServiceGetApiV1Users = <
  TData = UserServiceGetApiV1UsersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    current,
    direction,
    fullName,
    key,
    pageSize,
    queryPassword,
    queryValue,
    roleIDs,
    status,
    username,
  }: {
    current?: number
    direction?: "ASC" | "DESC"
    fullName?: string
    key?: string
    pageSize?: number
    queryPassword?: boolean
    queryValue?: string
    roleIDs?: Array<string>
    status?: number
    username?: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      useUserServiceGetApiV1UsersKey,
      ...(queryKey ?? [
        {
          current,
          direction,
          fullName,
          key,
          pageSize,
          queryPassword,
          queryValue,
          roleIDs,
          status,
          username,
        },
      ]),
    ],
    queryFn: () =>
      UserService.getApiV1Users(
        current,
        direction,
        fullName,
        key,
        pageSize,
        queryPassword,
        queryValue,
        roleIDs,
        status,
        username,
      ) as TData,
    ...options,
  })
export type UserServicePostApiV1UsersMutationResult = Awaited<
  ReturnType<typeof UserService.postApiV1Users>
>
/**
 * User Create
 */
export const useUserServicePostApiV1Users = <
  TData = UserServicePostApiV1UsersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        data: models_User
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      data: models_User
    },
    TContext
  >({
    mutationFn: ({ data }) =>
      UserService.postApiV1Users(data) as unknown as Promise<TData>,
    ...options,
  })
export type UserServiceGetApiV1Users1DefaultResponse = Awaited<
  ReturnType<typeof UserService.getApiV1Users1>
>
export type UserServiceGetApiV1Users1QueryResult<
  TData = UserServiceGetApiV1Users1DefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useUserServiceGetApiV1Users1Key = "UserServiceGetApiV1Users1"
/**
 * User Get By ID
 */
export const useUserServiceGetApiV1Users1 = <
  TData = UserServiceGetApiV1Users1DefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [useUserServiceGetApiV1Users1Key, ...(queryKey ?? [{ id }])],
    queryFn: () => UserService.getApiV1Users1(id) as TData,
    ...options,
  })
export type UserServicePutApiV1UsersMutationResult = Awaited<
  ReturnType<typeof UserService.putApiV1Users>
>
/**
 * User Update By ID
 */
export const useUserServicePutApiV1Users = <
  TData = UserServicePutApiV1UsersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
        data: models_User
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
      data: models_User
    },
    TContext
  >({
    mutationFn: ({ id, data }) =>
      UserService.putApiV1Users(id, data) as unknown as Promise<TData>,
    ...options,
  })
export type UserServiceDeleteApiV1UsersMutationResult = Awaited<
  ReturnType<typeof UserService.deleteApiV1Users>
>
/**
 * User Delete By ID
 */
export const useUserServiceDeleteApiV1Users = <
  TData = UserServiceDeleteApiV1UsersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      UserService.deleteApiV1Users(id) as unknown as Promise<TData>,
    ...options,
  })
export type UserServicePatchApiV1UsersDisableMutationResult = Awaited<
  ReturnType<typeof UserService.patchApiV1UsersDisable>
>
/**
 * User Disable By ID
 */
export const useUserServicePatchApiV1UsersDisable = <
  TData = UserServicePatchApiV1UsersDisableMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      UserService.patchApiV1UsersDisable(id) as unknown as Promise<TData>,
    ...options,
  })
export type UserServicePatchApiV1UsersEnableMutationResult = Awaited<
  ReturnType<typeof UserService.patchApiV1UsersEnable>
>
/**
 * User Enable By ID
 */
export const useUserServicePatchApiV1UsersEnable = <
  TData = UserServicePatchApiV1UsersEnableMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      UserService.patchApiV1UsersEnable(id) as unknown as Promise<TData>,
    ...options,
  })
export type RoleServiceGetApiV1RolesDefaultResponse = Awaited<
  ReturnType<typeof RoleService.getApiV1Roles>
>
export type RoleServiceGetApiV1RolesQueryResult<
  TData = RoleServiceGetApiV1RolesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useRoleServiceGetApiV1RolesKey = "RoleServiceGetApiV1Roles"
/**
 * Role Get All
 */
export const useRoleServiceGetApiV1Roles = <
  TData = RoleServiceGetApiV1RolesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    current,
    direction,
    ids,
    key,
    name,
    pageSize,
    queryValue,
    status,
    userId,
  }: {
    current?: number
    direction?: "ASC" | "DESC"
    ids?: Array<string>
    key?: string
    name?: string
    pageSize?: number
    queryValue?: string
    status?: number
    userId?: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      useRoleServiceGetApiV1RolesKey,
      ...(queryKey ?? [
        {
          current,
          direction,
          ids,
          key,
          name,
          pageSize,
          queryValue,
          status,
          userId,
        },
      ]),
    ],
    queryFn: () =>
      RoleService.getApiV1Roles(
        current,
        direction,
        ids,
        key,
        name,
        pageSize,
        queryValue,
        status,
        userId,
      ) as TData,
    ...options,
  })
export type RoleServicePostApiV1RolesMutationResult = Awaited<
  ReturnType<typeof RoleService.postApiV1Roles>
>
/**
 * Role Create
 */
export const useRoleServicePostApiV1Roles = <
  TData = RoleServicePostApiV1RolesMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        data: models_Role
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      data: models_Role
    },
    TContext
  >({
    mutationFn: ({ data }) =>
      RoleService.postApiV1Roles(data) as unknown as Promise<TData>,
    ...options,
  })
export type RoleServiceGetApiV1Roles1DefaultResponse = Awaited<
  ReturnType<typeof RoleService.getApiV1Roles1>
>
export type RoleServiceGetApiV1Roles1QueryResult<
  TData = RoleServiceGetApiV1Roles1DefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useRoleServiceGetApiV1Roles1Key = "RoleServiceGetApiV1Roles1"
/**
 * Role Get By ID
 */
export const useRoleServiceGetApiV1Roles1 = <
  TData = RoleServiceGetApiV1Roles1DefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [useRoleServiceGetApiV1Roles1Key, ...(queryKey ?? [{ id }])],
    queryFn: () => RoleService.getApiV1Roles1(id) as TData,
    ...options,
  })
export type RoleServicePutApiV1RolesMutationResult = Awaited<
  ReturnType<typeof RoleService.putApiV1Roles>
>
/**
 * Role Update By ID
 */
export const useRoleServicePutApiV1Roles = <
  TData = RoleServicePutApiV1RolesMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
        data: models_Role
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
      data: models_Role
    },
    TContext
  >({
    mutationFn: ({ id, data }) =>
      RoleService.putApiV1Roles(id, data) as unknown as Promise<TData>,
    ...options,
  })
export type RoleServiceDeleteApiV1RolesMutationResult = Awaited<
  ReturnType<typeof RoleService.deleteApiV1Roles>
>
/**
 * Role Delete By ID
 */
export const useRoleServiceDeleteApiV1Roles = <
  TData = RoleServiceDeleteApiV1RolesMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      RoleService.deleteApiV1Roles(id) as unknown as Promise<TData>,
    ...options,
  })
export type RoleServicePatchApiV1RolesDisableMutationResult = Awaited<
  ReturnType<typeof RoleService.patchApiV1RolesDisable>
>
/**
 * Role Disable By ID
 */
export const useRoleServicePatchApiV1RolesDisable = <
  TData = RoleServicePatchApiV1RolesDisableMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      RoleService.patchApiV1RolesDisable(id) as unknown as Promise<TData>,
    ...options,
  })
export type RoleServicePatchApiV1RolesEnableMutationResult = Awaited<
  ReturnType<typeof RoleService.patchApiV1RolesEnable>
>
/**
 * Role Enable By ID
 */
export const useRoleServicePatchApiV1RolesEnable = <
  TData = RoleServicePatchApiV1RolesEnableMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      RoleService.patchApiV1RolesEnable(id) as unknown as Promise<TData>,
    ...options,
  })
export type PublicServiceGetApiV1PublicsSysRoutesDefaultResponse = Awaited<
  ReturnType<typeof PublicService.getApiV1PublicsSysRoutes>
>
export type PublicServiceGetApiV1PublicsSysRoutesQueryResult<
  TData = PublicServiceGetApiV1PublicsSysRoutesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const usePublicServiceGetApiV1PublicsSysRoutesKey =
  "PublicServiceGetApiV1PublicsSysRoutes"
/**
 * SysRoutes
 */
export const usePublicServiceGetApiV1PublicsSysRoutes = <
  TData = PublicServiceGetApiV1PublicsSysRoutesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      usePublicServiceGetApiV1PublicsSysRoutesKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => PublicService.getApiV1PublicsSysRoutes() as TData,
    ...options,
  })
export type PublicServiceGetApiV1PublicsUserDefaultResponse = Awaited<
  ReturnType<typeof PublicService.getApiV1PublicsUser>
>
export type PublicServiceGetApiV1PublicsUserQueryResult<
  TData = PublicServiceGetApiV1PublicsUserDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const usePublicServiceGetApiV1PublicsUserKey =
  "PublicServiceGetApiV1PublicsUser"
/**
 * UserInfo
 */
export const usePublicServiceGetApiV1PublicsUser = <
  TData = PublicServiceGetApiV1PublicsUserDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [usePublicServiceGetApiV1PublicsUserKey, ...(queryKey ?? [])],
    queryFn: () => PublicService.getApiV1PublicsUser() as TData,
    ...options,
  })
export type PublicServicePostApiV1PublicsUserLoginMutationResult = Awaited<
  ReturnType<typeof PublicService.postApiV1PublicsUserLogin>
>
/**
 * UserLogin
 */
export const usePublicServicePostApiV1PublicsUserLogin = <
  TData = PublicServicePostApiV1PublicsUserLoginMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        data: dto_Login
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      data: dto_Login
    },
    TContext
  >({
    mutationFn: ({ data }) =>
      PublicService.postApiV1PublicsUserLogin(
        data,
      ) as unknown as Promise<TData>,
    ...options,
  })
export type PublicServicePostApiV1PublicsUserLogoutMutationResult = Awaited<
  ReturnType<typeof PublicService.postApiV1PublicsUserLogout>
>
/**
 * UserLogout
 */
export const usePublicServicePostApiV1PublicsUserLogout = <
  TData = PublicServicePostApiV1PublicsUserLogoutMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<TData, TError, void, TContext>,
    "mutationFn"
  >,
) =>
  useMutation<TData, TError, void, TContext>({
    mutationFn: () =>
      PublicService.postApiV1PublicsUserLogout() as unknown as Promise<TData>,
    ...options,
  })
export type PublicServiceGetApiV1PublicsUserMenutreeDefaultResponse = Awaited<
  ReturnType<typeof PublicService.getApiV1PublicsUserMenutree>
>
export type PublicServiceGetApiV1PublicsUserMenutreeQueryResult<
  TData = PublicServiceGetApiV1PublicsUserMenutreeDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const usePublicServiceGetApiV1PublicsUserMenutreeKey =
  "PublicServiceGetApiV1PublicsUserMenutree"
/**
 * UserMenuTree
 */
export const usePublicServiceGetApiV1PublicsUserMenutree = <
  TData = PublicServiceGetApiV1PublicsUserMenutreeDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      usePublicServiceGetApiV1PublicsUserMenutreeKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => PublicService.getApiV1PublicsUserMenutree() as TData,
    ...options,
  })
export type MenuServiceGetApiV1MenusDefaultResponse = Awaited<
  ReturnType<typeof MenuService.getApiV1Menus>
>
export type MenuServiceGetApiV1MenusQueryResult<
  TData = MenuServiceGetApiV1MenusDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useMenuServiceGetApiV1MenusKey = "MenuServiceGetApiV1Menus"
/**
 * Menu Query
 */
export const useMenuServiceGetApiV1Menus = <
  TData = MenuServiceGetApiV1MenusDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    current,
    direction,
    hidden,
    ids,
    includeActions,
    key,
    name,
    pageSize,
    parentId,
    prefixParentPath,
    queryValue,
    status,
    tree,
  }: {
    current?: number
    direction?: "ASC" | "DESC"
    hidden?: number
    ids?: Array<string>
    includeActions?: boolean
    key?: string
    name?: string
    pageSize?: number
    parentId?: string
    prefixParentPath?: string
    queryValue?: string
    status?: number
    tree?: boolean
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      useMenuServiceGetApiV1MenusKey,
      ...(queryKey ?? [
        {
          current,
          direction,
          hidden,
          ids,
          includeActions,
          key,
          name,
          pageSize,
          parentId,
          prefixParentPath,
          queryValue,
          status,
          tree,
        },
      ]),
    ],
    queryFn: () =>
      MenuService.getApiV1Menus(
        current,
        direction,
        hidden,
        ids,
        includeActions,
        key,
        name,
        pageSize,
        parentId,
        prefixParentPath,
        queryValue,
        status,
        tree,
      ) as TData,
    ...options,
  })
export type MenuServicePostApiV1MenusMutationResult = Awaited<
  ReturnType<typeof MenuService.postApiV1Menus>
>
/**
 * Menu Create
 */
export const useMenuServicePostApiV1Menus = <
  TData = MenuServicePostApiV1MenusMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        data: models_Menu
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      data: models_Menu
    },
    TContext
  >({
    mutationFn: ({ data }) =>
      MenuService.postApiV1Menus(data) as unknown as Promise<TData>,
    ...options,
  })
export type MenuServiceGetApiV1Menus1DefaultResponse = Awaited<
  ReturnType<typeof MenuService.getApiV1Menus1>
>
export type MenuServiceGetApiV1Menus1QueryResult<
  TData = MenuServiceGetApiV1Menus1DefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useMenuServiceGetApiV1Menus1Key = "MenuServiceGetApiV1Menus1"
/**
 * Menu Get By ID
 */
export const useMenuServiceGetApiV1Menus1 = <
  TData = MenuServiceGetApiV1Menus1DefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [useMenuServiceGetApiV1Menus1Key, ...(queryKey ?? [{ id }])],
    queryFn: () => MenuService.getApiV1Menus1(id) as TData,
    ...options,
  })
export type MenuServicePutApiV1MenusMutationResult = Awaited<
  ReturnType<typeof MenuService.putApiV1Menus>
>
/**
 * Menu Update By ID
 */
export const useMenuServicePutApiV1Menus = <
  TData = MenuServicePutApiV1MenusMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
        data: models_Menu
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
      data: models_Menu
    },
    TContext
  >({
    mutationFn: ({ id, data }) =>
      MenuService.putApiV1Menus(id, data) as unknown as Promise<TData>,
    ...options,
  })
export type MenuServiceDeleteApiV1MenusMutationResult = Awaited<
  ReturnType<typeof MenuService.deleteApiV1Menus>
>
/**
 * Menu Delete By ID
 */
export const useMenuServiceDeleteApiV1Menus = <
  TData = MenuServiceDeleteApiV1MenusMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      MenuService.deleteApiV1Menus(id) as unknown as Promise<TData>,
    ...options,
  })
export type MenuServiceGetApiV1MenusActionsDefaultResponse = Awaited<
  ReturnType<typeof MenuService.getApiV1MenusActions>
>
export type MenuServiceGetApiV1MenusActionsQueryResult<
  TData = MenuServiceGetApiV1MenusActionsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useMenuServiceGetApiV1MenusActionsKey =
  "MenuServiceGetApiV1MenusActions"
/**
 * MenuActions Get By menuID
 */
export const useMenuServiceGetApiV1MenusActions = <
  TData = MenuServiceGetApiV1MenusActionsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      useMenuServiceGetApiV1MenusActionsKey,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => MenuService.getApiV1MenusActions(id) as TData,
    ...options,
  })
export type MenuServicePutApiV1MenusActionsMutationResult = Awaited<
  ReturnType<typeof MenuService.putApiV1MenusActions>
>
/**
 * Menu Actions Update By menuID
 */
export const useMenuServicePutApiV1MenusActions = <
  TData = MenuServicePutApiV1MenusActionsMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
        data: Array<models_MenuAction>
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
      data: Array<models_MenuAction>
    },
    TContext
  >({
    mutationFn: ({ id, data }) =>
      MenuService.putApiV1MenusActions(id, data) as unknown as Promise<TData>,
    ...options,
  })
export type MenuServicePatchApiV1MenusDisableMutationResult = Awaited<
  ReturnType<typeof MenuService.patchApiV1MenusDisable>
>
/**
 * Menu Disable By ID
 */
export const useMenuServicePatchApiV1MenusDisable = <
  TData = MenuServicePatchApiV1MenusDisableMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      MenuService.patchApiV1MenusDisable(id) as unknown as Promise<TData>,
    ...options,
  })
export type MenuServicePatchApiV1MenusEnableMutationResult = Awaited<
  ReturnType<typeof MenuService.patchApiV1MenusEnable>
>
/**
 * Menu Enable By ID
 */
export const useMenuServicePatchApiV1MenusEnable = <
  TData = MenuServicePatchApiV1MenusEnableMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      MenuService.patchApiV1MenusEnable(id) as unknown as Promise<TData>,
    ...options,
  })
export type CustomerServiceGetApiV1CustomersDefaultResponse = Awaited<
  ReturnType<typeof CustomerService.getApiV1Customers>
>
export type CustomerServiceGetApiV1CustomersQueryResult<
  TData = CustomerServiceGetApiV1CustomersDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useCustomerServiceGetApiV1CustomersKey =
  "CustomerServiceGetApiV1Customers"
/**
 * Customer Query
 */
export const useCustomerServiceGetApiV1Customers = <
  TData = CustomerServiceGetApiV1CustomersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    address,
    current,
    direction,
    fullName,
    key,
    pageSize,
    queryValue,
  }: {
    address?: string
    current?: number
    direction?: "ASC" | "DESC"
    fullName?: string
    key?: string
    pageSize?: number
    queryValue?: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      useCustomerServiceGetApiV1CustomersKey,
      ...(queryKey ?? [
        { address, current, direction, fullName, key, pageSize, queryValue },
      ]),
    ],
    queryFn: () =>
      CustomerService.getApiV1Customers(
        address,
        current,
        direction,
        fullName,
        key,
        pageSize,
        queryValue,
      ) as TData,
    ...options,
  })
export type CustomerServicePostApiV1CustomersMutationResult = Awaited<
  ReturnType<typeof CustomerService.postApiV1Customers>
>
/**
 * Customer Create
 */
export const useCustomerServicePostApiV1Customers = <
  TData = CustomerServicePostApiV1CustomersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        data: dto_CustomerCreate
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      data: dto_CustomerCreate
    },
    TContext
  >({
    mutationFn: ({ data }) =>
      CustomerService.postApiV1Customers(data) as unknown as Promise<TData>,
    ...options,
  })
export type CustomerServiceGetApiV1Customers1DefaultResponse = Awaited<
  ReturnType<typeof CustomerService.getApiV1Customers1>
>
export type CustomerServiceGetApiV1Customers1QueryResult<
  TData = CustomerServiceGetApiV1Customers1DefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useCustomerServiceGetApiV1Customers1Key =
  "CustomerServiceGetApiV1Customers1"
/**
 * Customer Get By ID
 */
export const useCustomerServiceGetApiV1Customers1 = <
  TData = CustomerServiceGetApiV1Customers1DefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      useCustomerServiceGetApiV1Customers1Key,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => CustomerService.getApiV1Customers1(id) as TData,
    ...options,
  })
export type CustomerServicePutApiV1CustomersMutationResult = Awaited<
  ReturnType<typeof CustomerService.putApiV1Customers>
>
/**
 * Customer Update By ID
 */
export const useCustomerServicePutApiV1Customers = <
  TData = CustomerServicePutApiV1CustomersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
        data: models_Customer
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
      data: models_Customer
    },
    TContext
  >({
    mutationFn: ({ id, data }) =>
      CustomerService.putApiV1Customers(id, data) as unknown as Promise<TData>,
    ...options,
  })
export type CustomerServiceDeleteApiV1CustomersMutationResult = Awaited<
  ReturnType<typeof CustomerService.deleteApiV1Customers>
>
/**
 * Customer Delete By ID
 */
export const useCustomerServiceDeleteApiV1Customers = <
  TData = CustomerServiceDeleteApiV1CustomersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      CustomerService.deleteApiV1Customers(id) as unknown as Promise<TData>,
    ...options,
  })
export type AstrologerServiceGetApiV1AstrologersDefaultResponse = Awaited<
  ReturnType<typeof AstrologerService.getApiV1Astrologers>
>
export type AstrologerServiceGetApiV1AstrologersQueryResult<
  TData = AstrologerServiceGetApiV1AstrologersDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useAstrologerServiceGetApiV1AstrologersKey =
  "AstrologerServiceGetApiV1Astrologers"
/**
 * Astrologer Query
 */
export const useAstrologerServiceGetApiV1Astrologers = <
  TData = AstrologerServiceGetApiV1AstrologersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    address,
    current,
    direction,
    fullName,
    key,
    pageSize,
    queryValue,
  }: {
    address?: string
    current?: number
    direction?: "ASC" | "DESC"
    fullName?: string
    key?: string
    pageSize?: number
    queryValue?: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      useAstrologerServiceGetApiV1AstrologersKey,
      ...(queryKey ?? [
        { address, current, direction, fullName, key, pageSize, queryValue },
      ]),
    ],
    queryFn: () =>
      AstrologerService.getApiV1Astrologers(
        address,
        current,
        direction,
        fullName,
        key,
        pageSize,
        queryValue,
      ) as TData,
    ...options,
  })
export type AstrologerServicePostApiV1AstrologersMutationResult = Awaited<
  ReturnType<typeof AstrologerService.postApiV1Astrologers>
>
/**
 * Astrologer Create
 */
export const useAstrologerServicePostApiV1Astrologers = <
  TData = AstrologerServicePostApiV1AstrologersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        data: dto_AstrologerCreate
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      data: dto_AstrologerCreate
    },
    TContext
  >({
    mutationFn: ({ data }) =>
      AstrologerService.postApiV1Astrologers(data) as unknown as Promise<TData>,
    ...options,
  })
export type AstrologerServiceGetApiV1Astrologers1DefaultResponse = Awaited<
  ReturnType<typeof AstrologerService.getApiV1Astrologers1>
>
export type AstrologerServiceGetApiV1Astrologers1QueryResult<
  TData = AstrologerServiceGetApiV1Astrologers1DefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useAstrologerServiceGetApiV1Astrologers1Key =
  "AstrologerServiceGetApiV1Astrologers1"
/**
 * Astrologer Get By ID
 */
export const useAstrologerServiceGetApiV1Astrologers1 = <
  TData = AstrologerServiceGetApiV1Astrologers1DefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    id,
  }: {
    id: string
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >,
) =>
  useQuery<TData, TError>({
    queryKey: [
      useAstrologerServiceGetApiV1Astrologers1Key,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => AstrologerService.getApiV1Astrologers1(id) as TData,
    ...options,
  })
export type AstrologerServicePutApiV1AstrologersMutationResult = Awaited<
  ReturnType<typeof AstrologerService.putApiV1Astrologers>
>
/**
 * Astrologer Update By ID
 */
export const useAstrologerServicePutApiV1Astrologers = <
  TData = AstrologerServicePutApiV1AstrologersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
        data: models_Astrologer
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
      data: models_Astrologer
    },
    TContext
  >({
    mutationFn: ({ id, data }) =>
      AstrologerService.putApiV1Astrologers(
        id,
        data,
      ) as unknown as Promise<TData>,
    ...options,
  })
export type AstrologerServiceDeleteApiV1AstrologersMutationResult = Awaited<
  ReturnType<typeof AstrologerService.deleteApiV1Astrologers>
>
/**
 * Astrologer Delete By ID
 */
export const useAstrologerServiceDeleteApiV1Astrologers = <
  TData = AstrologerServiceDeleteApiV1AstrologersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string
      },
      TContext
    >,
    "mutationFn"
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      id: string
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      AstrologerService.deleteApiV1Astrologers(id) as unknown as Promise<TData>,
    ...options,
  })
