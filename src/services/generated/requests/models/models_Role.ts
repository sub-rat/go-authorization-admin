/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { database_Datetime } from "./database_Datetime"
import type { models_RoleMenu } from "./models_RoleMenu"

export type models_Role = {
  created_at?: database_Datetime
  created_by?: string
  id?: string
  name: string
  remark: string
  role_menus?: Array<models_RoleMenu>
  sequence: number
  status: number
  updated_at?: database_Datetime
}
