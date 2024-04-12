/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { database_Datetime } from './database_Datetime';
import type { models_MenuAction } from './models_MenuAction';

export type models_Menu = {
    actions?: Array<models_MenuAction>;
    component?: string;
    created_at?: database_Datetime;
    created_by?: string;
    hidden: number;
    icon: string;
    id?: string;
    name: string;
    parent_id?: string;
    parent_path?: string;
    remark: string;
    router?: string;
    sequence: number;
    status: number;
    updated_at?: database_Datetime;
};

