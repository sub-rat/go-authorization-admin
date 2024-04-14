// generated with @7nohe/openapi-react-query-codegen@0.5.3 
import { useQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { models_UserRole } from "../requests/models/models_UserRole";
import { models_UserQueryResult } from "../requests/models/models_UserQueryResult";
import { models_UserInfo } from "../requests/models/models_UserInfo";
import { models_User } from "../requests/models/models_User";
import { models_RoleQueryResult } from "../requests/models/models_RoleQueryResult";
import { models_RoleMenu } from "../requests/models/models_RoleMenu";
import { models_Role } from "../requests/models/models_Role";
import { models_MenuTrees } from "../requests/models/models_MenuTrees";
import { models_MenuTree } from "../requests/models/models_MenuTree";
import { models_MenuQueryResult } from "../requests/models/models_MenuQueryResult";
import { models_MenuActionResource } from "../requests/models/models_MenuActionResource";
import { models_MenuAction } from "../requests/models/models_MenuAction";
import { models_Menu } from "../requests/models/models_Menu";
import { echo_response_Response } from "../requests/models/echo_response_Response";
import { dto_Pagination } from "../requests/models/dto_Pagination";
import { dto_OrderDirection } from "../requests/models/dto_OrderDirection";
import { dto_Login } from "../requests/models/dto_Login";
import { database_Datetime } from "../requests/models/database_Datetime";
import { UserService } from "../requests/services/UserService";
import { RoleService } from "../requests/services/RoleService";
import { PublicService } from "../requests/services/PublicService";
import { MenuService } from "../requests/services/MenuService";
export type UserServiceGetApiUsersDefaultResponse = Awaited<ReturnType<typeof UserService.getApiUsers>>;
export type UserServiceGetApiUsersQueryResult<TData = UserServiceGetApiUsersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserServiceGetApiUsersKey = "UserServiceGetApiUsers";
/**
 * User Query
 */
export const useUserServiceGetApiUsers = <TData = UserServiceGetApiUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ current, direction, fullName, key, pageSize, queryPassword, queryValue, roleIDs, status, username }: {
    current?: number;
    direction?: "ASC" | "DESC";
    fullName?: string;
    key?: string;
    pageSize?: number;
    queryPassword?: boolean;
    queryValue?: string;
    roleIDs?: Array<string>;
    status?: number;
    username?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useUserServiceGetApiUsersKey, ...(queryKey ?? [{ current, direction, fullName, key, pageSize, queryPassword, queryValue, roleIDs, status, username }])], queryFn: () => UserService.getApiUsers(current, direction, fullName, key, pageSize, queryPassword, queryValue, roleIDs, status, username) as TData, ...options });
export type UserServicePostApiUsersMutationResult = Awaited<ReturnType<typeof UserService.postApiUsers>>;
/**
 * User Create
 */
export const useUserServicePostApiUsers = <TData = UserServicePostApiUsersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    data: models_User;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    data: models_User;
}, TContext>({ mutationFn: ({ data }) => UserService.postApiUsers(data) as unknown as Promise<TData>, ...options });
export type UserServiceGetApiUsers1DefaultResponse = Awaited<ReturnType<typeof UserService.getApiUsers1>>;
export type UserServiceGetApiUsers1QueryResult<TData = UserServiceGetApiUsers1DefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserServiceGetApiUsers1Key = "UserServiceGetApiUsers1";
/**
 * User Get By ID
 */
export const useUserServiceGetApiUsers1 = <TData = UserServiceGetApiUsers1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useUserServiceGetApiUsers1Key, ...(queryKey ?? [{ id }])], queryFn: () => UserService.getApiUsers1(id) as TData, ...options });
export type UserServicePutApiUsersMutationResult = Awaited<ReturnType<typeof UserService.putApiUsers>>;
/**
 * User Update By ID
 */
export const useUserServicePutApiUsers = <TData = UserServicePutApiUsersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
    data: models_User;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
    data: models_User;
}, TContext>({ mutationFn: ({ id, data }) => UserService.putApiUsers(id, data) as unknown as Promise<TData>, ...options });
export type UserServiceDeleteApiUsersMutationResult = Awaited<ReturnType<typeof UserService.deleteApiUsers>>;
/**
 * User Delete By ID
 */
export const useUserServiceDeleteApiUsers = <TData = UserServiceDeleteApiUsersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => UserService.deleteApiUsers(id) as unknown as Promise<TData>, ...options });
export type UserServicePatchApiUsersDisableMutationResult = Awaited<ReturnType<typeof UserService.patchApiUsersDisable>>;
/**
 * User Disable By ID
 */
export const useUserServicePatchApiUsersDisable = <TData = UserServicePatchApiUsersDisableMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => UserService.patchApiUsersDisable(id) as unknown as Promise<TData>, ...options });
export type UserServicePatchApiUsersEnableMutationResult = Awaited<ReturnType<typeof UserService.patchApiUsersEnable>>;
/**
 * User Enable By ID
 */
export const useUserServicePatchApiUsersEnable = <TData = UserServicePatchApiUsersEnableMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => UserService.patchApiUsersEnable(id) as unknown as Promise<TData>, ...options });
export type RoleServiceGetApiRolesDefaultResponse = Awaited<ReturnType<typeof RoleService.getApiRoles>>;
export type RoleServiceGetApiRolesQueryResult<TData = RoleServiceGetApiRolesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoleServiceGetApiRolesKey = "RoleServiceGetApiRoles";
/**
 * Role Get All
 */
export const useRoleServiceGetApiRoles = <TData = RoleServiceGetApiRolesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ current, direction, ids, key, name, pageSize, queryValue, status, userId }: {
    current?: number;
    direction?: "ASC" | "DESC";
    ids?: Array<string>;
    key?: string;
    name?: string;
    pageSize?: number;
    queryValue?: string;
    status?: number;
    userId?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useRoleServiceGetApiRolesKey, ...(queryKey ?? [{ current, direction, ids, key, name, pageSize, queryValue, status, userId }])], queryFn: () => RoleService.getApiRoles(current, direction, ids, key, name, pageSize, queryValue, status, userId) as TData, ...options });
export type RoleServicePostApiRolesMutationResult = Awaited<ReturnType<typeof RoleService.postApiRoles>>;
/**
 * Role Create
 */
export const useRoleServicePostApiRoles = <TData = RoleServicePostApiRolesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    data: models_Role;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    data: models_Role;
}, TContext>({ mutationFn: ({ data }) => RoleService.postApiRoles(data) as unknown as Promise<TData>, ...options });
export type RoleServiceGetApiRoles1DefaultResponse = Awaited<ReturnType<typeof RoleService.getApiRoles1>>;
export type RoleServiceGetApiRoles1QueryResult<TData = RoleServiceGetApiRoles1DefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoleServiceGetApiRoles1Key = "RoleServiceGetApiRoles1";
/**
 * Role Get By ID
 */
export const useRoleServiceGetApiRoles1 = <TData = RoleServiceGetApiRoles1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useRoleServiceGetApiRoles1Key, ...(queryKey ?? [{ id }])], queryFn: () => RoleService.getApiRoles1(id) as TData, ...options });
export type RoleServicePutApiRolesMutationResult = Awaited<ReturnType<typeof RoleService.putApiRoles>>;
/**
 * Role Update By ID
 */
export const useRoleServicePutApiRoles = <TData = RoleServicePutApiRolesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
    data: models_Role;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
    data: models_Role;
}, TContext>({ mutationFn: ({ id, data }) => RoleService.putApiRoles(id, data) as unknown as Promise<TData>, ...options });
export type RoleServiceDeleteApiRolesMutationResult = Awaited<ReturnType<typeof RoleService.deleteApiRoles>>;
/**
 * Role Delete By ID
 */
export const useRoleServiceDeleteApiRoles = <TData = RoleServiceDeleteApiRolesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => RoleService.deleteApiRoles(id) as unknown as Promise<TData>, ...options });
export type RoleServicePatchApiRolesDisableMutationResult = Awaited<ReturnType<typeof RoleService.patchApiRolesDisable>>;
/**
 * Role Disable By ID
 */
export const useRoleServicePatchApiRolesDisable = <TData = RoleServicePatchApiRolesDisableMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => RoleService.patchApiRolesDisable(id) as unknown as Promise<TData>, ...options });
export type RoleServicePatchApiRolesEnableMutationResult = Awaited<ReturnType<typeof RoleService.patchApiRolesEnable>>;
/**
 * Role Enable By ID
 */
export const useRoleServicePatchApiRolesEnable = <TData = RoleServicePatchApiRolesEnableMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => RoleService.patchApiRolesEnable(id) as unknown as Promise<TData>, ...options });
export type PublicServiceGetApiV1PublicsSysRoutesDefaultResponse = Awaited<ReturnType<typeof PublicService.getApiV1PublicsSysRoutes>>;
export type PublicServiceGetApiV1PublicsSysRoutesQueryResult<TData = PublicServiceGetApiV1PublicsSysRoutesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePublicServiceGetApiV1PublicsSysRoutesKey = "PublicServiceGetApiV1PublicsSysRoutes";
/**
 * SysRoutes
 */
export const usePublicServiceGetApiV1PublicsSysRoutes = <TData = PublicServiceGetApiV1PublicsSysRoutesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePublicServiceGetApiV1PublicsSysRoutesKey, ...(queryKey ?? [])], queryFn: () => PublicService.getApiV1PublicsSysRoutes() as TData, ...options });
export type PublicServiceGetApiV1PublicsUserDefaultResponse = Awaited<ReturnType<typeof PublicService.getApiV1PublicsUser>>;
export type PublicServiceGetApiV1PublicsUserQueryResult<TData = PublicServiceGetApiV1PublicsUserDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePublicServiceGetApiV1PublicsUserKey = "PublicServiceGetApiV1PublicsUser";
/**
 * UserInfo
 */
export const usePublicServiceGetApiV1PublicsUser = <TData = PublicServiceGetApiV1PublicsUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePublicServiceGetApiV1PublicsUserKey, ...(queryKey ?? [])], queryFn: () => PublicService.getApiV1PublicsUser() as TData, ...options });
export type PublicServicePostApiV1PublicsUserLoginMutationResult = Awaited<ReturnType<typeof PublicService.postApiV1PublicsUserLogin>>;
/**
 * UserLogin
 */
export const usePublicServicePostApiV1PublicsUserLogin = <TData = PublicServicePostApiV1PublicsUserLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    data: dto_Login;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    data: dto_Login;
}, TContext>({ mutationFn: ({ data }) => PublicService.postApiV1PublicsUserLogin(data) as unknown as Promise<TData>, ...options });
export type PublicServicePostApiV1PublicsUserLogoutMutationResult = Awaited<ReturnType<typeof PublicService.postApiV1PublicsUserLogout>>;
/**
 * UserLogout
 */
export const usePublicServicePostApiV1PublicsUserLogout = <TData = PublicServicePostApiV1PublicsUserLogoutMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => PublicService.postApiV1PublicsUserLogout() as unknown as Promise<TData>, ...options });
export type PublicServiceGetApiV1PublicsUserMenutreeDefaultResponse = Awaited<ReturnType<typeof PublicService.getApiV1PublicsUserMenutree>>;
export type PublicServiceGetApiV1PublicsUserMenutreeQueryResult<TData = PublicServiceGetApiV1PublicsUserMenutreeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePublicServiceGetApiV1PublicsUserMenutreeKey = "PublicServiceGetApiV1PublicsUserMenutree";
/**
 * UserMenuTree
 */
export const usePublicServiceGetApiV1PublicsUserMenutree = <TData = PublicServiceGetApiV1PublicsUserMenutreeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePublicServiceGetApiV1PublicsUserMenutreeKey, ...(queryKey ?? [])], queryFn: () => PublicService.getApiV1PublicsUserMenutree() as TData, ...options });
export type MenuServiceGetApiMenusDefaultResponse = Awaited<ReturnType<typeof MenuService.getApiMenus>>;
export type MenuServiceGetApiMenusQueryResult<TData = MenuServiceGetApiMenusDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMenuServiceGetApiMenusKey = "MenuServiceGetApiMenus";
/**
 * Menu Query
 */
export const useMenuServiceGetApiMenus = <TData = MenuServiceGetApiMenusDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ current, direction, hidden, ids, includeActions, key, name, pageSize, parentId, prefixParentPath, queryValue, status, tree }: {
    current?: number;
    direction?: "ASC" | "DESC";
    hidden?: number;
    ids?: Array<string>;
    includeActions?: boolean;
    key?: string;
    name?: string;
    pageSize?: number;
    parentId?: string;
    prefixParentPath?: string;
    queryValue?: string;
    status?: number;
    tree?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useMenuServiceGetApiMenusKey, ...(queryKey ?? [{ current, direction, hidden, ids, includeActions, key, name, pageSize, parentId, prefixParentPath, queryValue, status, tree }])], queryFn: () => MenuService.getApiMenus(current, direction, hidden, ids, includeActions, key, name, pageSize, parentId, prefixParentPath, queryValue, status, tree) as TData, ...options });
export type MenuServicePostApiMenusMutationResult = Awaited<ReturnType<typeof MenuService.postApiMenus>>;
/**
 * Menu Create
 */
export const useMenuServicePostApiMenus = <TData = MenuServicePostApiMenusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    data: models_Menu;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    data: models_Menu;
}, TContext>({ mutationFn: ({ data }) => MenuService.postApiMenus(data) as unknown as Promise<TData>, ...options });
export type MenuServiceGetApiMenus1DefaultResponse = Awaited<ReturnType<typeof MenuService.getApiMenus1>>;
export type MenuServiceGetApiMenus1QueryResult<TData = MenuServiceGetApiMenus1DefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMenuServiceGetApiMenus1Key = "MenuServiceGetApiMenus1";
/**
 * Menu Get By ID
 */
export const useMenuServiceGetApiMenus1 = <TData = MenuServiceGetApiMenus1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useMenuServiceGetApiMenus1Key, ...(queryKey ?? [{ id }])], queryFn: () => MenuService.getApiMenus1(id) as TData, ...options });
export type MenuServicePutApiMenusMutationResult = Awaited<ReturnType<typeof MenuService.putApiMenus>>;
/**
 * Menu Update By ID
 */
export const useMenuServicePutApiMenus = <TData = MenuServicePutApiMenusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
    data: models_Menu;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
    data: models_Menu;
}, TContext>({ mutationFn: ({ id, data }) => MenuService.putApiMenus(id, data) as unknown as Promise<TData>, ...options });
export type MenuServiceDeleteApiMenusMutationResult = Awaited<ReturnType<typeof MenuService.deleteApiMenus>>;
/**
 * Menu Delete By ID
 */
export const useMenuServiceDeleteApiMenus = <TData = MenuServiceDeleteApiMenusMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => MenuService.deleteApiMenus(id) as unknown as Promise<TData>, ...options });
export type MenuServiceGetApiMenusActionsDefaultResponse = Awaited<ReturnType<typeof MenuService.getApiMenusActions>>;
export type MenuServiceGetApiMenusActionsQueryResult<TData = MenuServiceGetApiMenusActionsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMenuServiceGetApiMenusActionsKey = "MenuServiceGetApiMenusActions";
/**
 * MenuActions Get By menuID
 */
export const useMenuServiceGetApiMenusActions = <TData = MenuServiceGetApiMenusActionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useMenuServiceGetApiMenusActionsKey, ...(queryKey ?? [{ id }])], queryFn: () => MenuService.getApiMenusActions(id) as TData, ...options });
export type MenuServicePutApiMenusActionsMutationResult = Awaited<ReturnType<typeof MenuService.putApiMenusActions>>;
/**
 * Menu Actions Update By menuID
 */
export const useMenuServicePutApiMenusActions = <TData = MenuServicePutApiMenusActionsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
    data: Array<models_MenuAction>;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
    data: Array<models_MenuAction>;
}, TContext>({ mutationFn: ({ id, data }) => MenuService.putApiMenusActions(id, data) as unknown as Promise<TData>, ...options });
export type MenuServicePatchApiMenusDisableMutationResult = Awaited<ReturnType<typeof MenuService.patchApiMenusDisable>>;
/**
 * Menu Disable By ID
 */
export const useMenuServicePatchApiMenusDisable = <TData = MenuServicePatchApiMenusDisableMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => MenuService.patchApiMenusDisable(id) as unknown as Promise<TData>, ...options });
export type MenuServicePatchApiMenusEnableMutationResult = Awaited<ReturnType<typeof MenuService.patchApiMenusEnable>>;
/**
 * Menu Enable By ID
 */
export const useMenuServicePatchApiMenusEnable = <TData = MenuServicePatchApiMenusEnableMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => MenuService.patchApiMenusEnable(id) as unknown as Promise<TData>, ...options });
