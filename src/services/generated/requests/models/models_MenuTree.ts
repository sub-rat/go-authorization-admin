/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { models_MenuAction } from './models_MenuAction';
import type { models_MenuTrees } from './models_MenuTrees';

export type models_MenuTree = {
    actions?: Array<models_MenuAction>;
    children?: models_MenuTrees;
    component?: string;
    hidden?: number;
    icon?: string;
    id?: string;
    name?: string;
    parent_id?: string;
    parent_path?: string;
    router?: string;
    sequence?: number;
    status?: number;
};

