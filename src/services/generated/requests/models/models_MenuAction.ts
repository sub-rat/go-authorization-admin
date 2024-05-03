/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { database_Datetime } from './database_Datetime';
import type { models_MenuActionResource } from './models_MenuActionResource';

export type models_MenuAction = {
    code: string;
    created_at?: database_Datetime;
    id?: string;
    menu_id?: string;
    name: string;
    resources?: Array<models_MenuActionResource>;
    updated_at?: database_Datetime;
};

