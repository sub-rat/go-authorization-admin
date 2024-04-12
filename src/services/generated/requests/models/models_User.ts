/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { database_Datetime } from './database_Datetime';
import type { models_UserRole } from './models_UserRole';

export type models_User = {
    created_at?: database_Datetime;
    created_by?: string;
    email?: string;
    full_name: string;
    id?: string;
    password?: string;
    phone?: string;
    status: number;
    updated_at?: database_Datetime;
    user_roles?: Array<models_UserRole>;
    username: string;
};

