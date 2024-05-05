/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { database_Datetime } from './database_Datetime';
import type { models_User } from './models_User';

export type models_Astrologer = {
    address: string;
    created_at?: database_Datetime;
    created_by?: string;
    full_name: string;
    id?: string;
    phone?: string;
    updated_at?: database_Datetime;
    user?: models_User;
    user_id?: string;
};

