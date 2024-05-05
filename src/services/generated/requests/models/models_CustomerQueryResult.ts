/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dto_Pagination } from './dto_Pagination';
import type { models_Customer } from './models_Customer';

export type models_CustomerQueryResult = {
    list?: Array<models_Customer>;
    pagination?: dto_Pagination;
};

