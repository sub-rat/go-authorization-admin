/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dto_Pagination } from './dto_Pagination';
import type { models_User } from './models_User';

export type models_UserQueryResult = {
    list?: Array<models_User>;
    pagination?: dto_Pagination;
};

